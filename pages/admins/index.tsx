import { CommonTableView, Icon } from "@commons";
import { Button, Dropdown, Form, Input, Menu } from "antd";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { SearchOutlined } from "@ant-design/icons";
import { useHeader } from "@components/HeaderProvider";
import { deleteModal } from "@components/popup";
import { useDeleteAdminMutation, useGetAdminsQuery } from "@graphql";
import { onError, onSuccess } from "@utils";
import Link from "next/link";

const Admins = () => {
  const router = useRouter();
  const { setTitle } = useHeader();

  const {
    data,
    loading: adminLoading,
    refetch,
  } = useGetAdminsQuery({
    // notifyOnNetworkStatusChange: true,
    fetchPolicy: "cache-first",
    onError: onError,
  });

  useEffect(() => {
    refetch();
  }, [router, data]);

  const [deleteAdmin, { loading: deleting }] = useDeleteAdminMutation({
    onCompleted: () =>
      onSuccess({
        type: "delete",
        title: "Admin",
        router,
        goBack: false,
        refetch,
      }),
    onError: onError,
  });

  const parseFilter = () => {
    const query = router.query;
    const res = { and: [] as any[] };

    if (query.name) {
      res.and.push({
        or: [{ name: { like: `%${query.name}%` } }],
      });
    }

    if (query.email) {
      res.and.push({
        or: [{ email: { like: `%${query.email}%` } }],
      });
    }

    return res;
  };

  const totalCount = data?.admins?.totalCount || 0;

  useEffect(() => {
    setTitle("Users");
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
    },
    {
      title: "E-mail",
      dataIndex: "email",
      sorter: true,
    },
    {
      title: "",
      key: "action",
      className: "text-center",
      render: (data: any) => {
        const text = !data?.isActive ? "Activate" : "Deactivate";

        const menu = (
          <Menu
            items={[
              {
                label: "Delete",
                onClick: () =>
                  deleteModal({
                    name: data?.name,
                    onOk: () =>
                      deleteAdmin({
                        variables: {
                          input: { id: data?.id },
                        },
                      }),
                  }),
                key: "1",
              },
            ]}
          />
        );

        return (
          <div onClick={(e) => e.stopPropagation()} className="cursor-pointer">
            <Dropdown overlay={menu} trigger={["click"]}>
              <Icon name="dots" />
            </Dropdown>
          </div>
        );
      },
    },
  ];

  const onRow = (admin: any) => {
    return {
      onClick: () => router.push(`/admins/add-or-edit/${admin.id}`),
    };
  };

  const loading = deleting || adminLoading;
  return (
    <>
      <div className="p-9">
        <CommonTableView
          tableTitle={`Users (${totalCount})`}
          actions={
            <Link href="/admins/add-or-edit">
              <Button type="primary" className="w-[100px]">
                Add new
              </Button>
            </Link>
          }
          filterItems={[
            {
              title: "Name",
              render: (
                <Form.Item name="name" className="mb-0">
                  <Input prefix={<SearchOutlined />} placeholder="Name" />
                </Form.Item>
              ),
            },
            {
              title: "E-mail",
              render: (
                <Form.Item name="email" className="mb-0">
                  <Input prefix={<SearchOutlined />} placeholder="E-mail" />
                </Form.Item>
              ),
            },
          ]}
          // @ts-ignore
          columns={columns}
          loading={loading}
          refetch={refetch}
          dataSource={data?.admins?.nodes || []}
          totalCount={totalCount}
          gqlFilters={parseFilter()}
          onRow={onRow}
        />
      </div>
    </>
  );
};

Admins.auth = true;

export default Admins;

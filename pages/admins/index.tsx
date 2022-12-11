import { useEffect, useState } from "react";
import { Button, Dropdown, Menu, Form, Input, message, Tag } from "antd";
import { useRouter } from "next/router";
import _, { divide } from "lodash";
import { Icon, CommonTableView } from "@commons";
import * as Gql from "@graphql";
import { useHeader } from "@components/HeaderProvider";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import { deleteModal } from "@components/popup";
import { getErrorMessage } from "@utils";

//NOTE: Customer is list of company
const Customers = () => {
  const router = useRouter();
  const { setTitle } = useHeader();
  const [val, setVal] = useState();

  const {
    data,
    loading: adminLoading,
    refetch,
    error,
  } = Gql.useGetUsersQuery({
    // notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    variables: {
      paging: {
        limit: 10,
        offset: 0,
      },
    },
  });

  useEffect(() => {
    refetch();
  }, [data !== undefined]);

  const [deleteAdmin, { loading: deleting }] = Gql.useDeleteUserMutation({
    onCompleted: () => {
      refetch();
      message.success("Admin successfully deleted!");
    },
    onError: (e) => {
      message.error(getErrorMessage(e));
    },
  });

  const [updateAdmin, { loading: isSubmitting }] = Gql.useUpdateUserMutation({
    onCompleted: () => {
      refetch();
      message.success("Admin successfully saved!");
    },
    onError: (e) => {
      message.error(getErrorMessage(e));
    },
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

  const totalCount = data?.users?.totalCount || 0;

  useEffect(() => {
    setTitle("Admins");
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
              {
                label: `${text}`,
                key: "3",
                // onClick: () =>
                //   updateAdmin({
                //     variables: {
                //       input: {
                //         id: data?.id,
                //         update: { isActive: !data?.isActive },
                //       },
                //     },
                //   }),
              },
            ]}
          />
        );

        return (
          <div onClick={(e) => e.stopPropagation()}>
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

  const loading = deleting || adminLoading || isSubmitting;
  return (
    <>
      <div className="p-9">
        <CommonTableView
          tableTitle={`Admins (${totalCount})`}
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
            {
              title: "Type",
              render: (
                <Form.Item name="type" className="mb-0">
                  <Input prefix={<SearchOutlined />} placeholder="Type" />
                </Form.Item>
              ),
            },
          ]}
          // @ts-ignore
          columns={columns}
          loading={loading}
          refetch={refetch}
          dataSource={data?.users?.nodes || []}
          totalCount={totalCount}
          gqlFilters={parseFilter()}
          onRow={onRow}
        />
      </div>
    </>
  );
};

Customers.auth = true;

export default Customers;

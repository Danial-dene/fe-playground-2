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
    loading: shiftOptionLoading,
    refetch,
    error,
  } = Gql.useGetShiftsOptionsQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    variables: {
      // paging: {
      //   limit: 10,
      //   offset: 0,
      // },
    },
  });

  useEffect(() => {
    refetch();
  }, [data !== undefined]);
  console.log("error", error);

  const [deleteShiftOptions, { loading: deleting }] =
    Gql.useDeleteShiftOptionsMutation({
      onCompleted: () => {
        refetch();
        message.success("Rates successfully deleted!");
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    });
  console.log("data", data);

  const parseFilter = () => {
    const query = router.query;
    const res = { and: [] as any[] };

    if (query.name) {
      res.and.push({
        or: [{ name: { like: `%${query.name}%` } }],
      });
    }

    return res;
  };

  const totalCount = data?.shiftOptions?.totalCount || 0;

  useEffect(() => {
    setTitle("Rates");
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
    },
    {
      title: "Rate",
      dataIndex: "rate",
      sorter: true,
      render: (rate: number) => `RM ${rate.toFixed(2)} per hour`,
    },
    {
      title: "OT Rate",
      dataIndex: "otRate",
      sorter: true,
      render: (otRate: number) => `RM ${otRate.toFixed(2)} per hour`,
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
                      deleteShiftOptions({
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
          <div onClick={(e) => e.stopPropagation()}>
            <Dropdown overlay={menu} trigger={["click"]}>
              <Icon name="dots" />
            </Dropdown>
          </div>
        );
      },
    },
  ];

  const onRow = (shiftOption: any) => {
    return {
      onClick: () => router.push(`/rates/add-or-edit/${shiftOption.id}`),
    };
  };

  const loading = deleting || shiftOptionLoading;
  return (
    <>
      <div className="p-9">
        <CommonTableView
          tableTitle={`Rates (${totalCount})`}
          actions={
            <Link href="/rates/add-or-edit">
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
          dataSource={data?.shiftOptions?.nodes || []}
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

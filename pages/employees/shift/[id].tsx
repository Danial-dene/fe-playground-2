import { useEffect, useState } from "react";
import { Button, Dropdown, Menu, Form, Input, Avatar, message } from "antd";
import { useRouter } from "next/router";
import _, { divide } from "lodash";
import { Icon, CommonTableView } from "@commons";
import * as Gql from "@graphql";
import { UserOutlined } from "@ant-design/icons";
import { useHeader } from "@components/HeaderProvider";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import apolloClient from "@lib/apollo";
import { getErrorMessage } from "@utils";
import { deleteModal } from "@components/popup";
import moment from "moment";

const Shift = () => {
  const router = useRouter();
  const { id } = router.query;
  const { setTitle } = useHeader();

  const { data, loading, refetch, error } = Gql.useGetShiftsQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    skip: !id,
    variables: {
      filter: { employees: { id: { eq: _.toString(id) } } },
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

  const totalCount = data?.shifts?.totalCount || 0;

  useEffect(() => {
    setTitle("Shifts");
  }, []);

  const [deleteEmployee, { loading: deleting }] = Gql.useDeleteEmployeeMutation(
    {
      onCompleted: () => {
        refetch();
        message.success("Employee successfully deleted!");
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    }
  );

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      sorter: true,
      render: (date: Date) => moment(date).format("DD-MM-YYYY"),
    },
    {
      title: "Hours",
      dataIndex: "hours",
      sorter: true,
    },
    {
      title: "Rate (RM)",
      dataIndex: "shiftOptions",
      sorter: true,
      render: (shiftOptions: any) => {
        return <p>{` ${shiftOptions?.rate.toFixed(2)} per hour`}</p>;
      },
    },
    {
      title: "OT Rate (RM)",
      dataIndex: "shiftOptions",
      sorter: true,
      render: (shiftOptions: any) => {
        return <p>{` ${shiftOptions?.otRate?.toFixed(2)} per hour`}</p>;
      },
    },
    {
      title: "Allowance (RM)",
      dataIndex: "allowance",
      sorter: true,
      render: (allowance: any) => {
        return <p>{` ${allowance?.toFixed(2)} `}</p>;
      },
    },
    {
      title: "Total (RM)",
      dataIndex: "total",
      sorter: true,
      render: (total: any) => {
        return <p>{` ${total?.toFixed(2)} `}</p>;
      },
    },
    {
      title: "",
      key: "action",
      render: (data: any) => {
        const menu = (
          <Menu
            items={[
              {
                label: "Delete",
                key: "0",
                onClick: () =>
                  deleteModal({
                    name: data?.name,
                    onOk: () =>
                      deleteEmployee({
                        variables: {
                          input: { id: data?.id },
                        },
                      }),
                  }),
              },
              {
                label: "View shift",
                key: "1",
                onClick: () => router.push(`/employees/shifts/${data.id}`),
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

  const onRow = (employee: any) => {
    return {
      onClick: () => router.push(`/employees/add-or-edit/${employee?.id}`),
    };
  };

  return (
    <>
      <div className="p-9">
        <CommonTableView
          tableTitle={`Shifts (${totalCount})`}
          actions={
            <div>
              <Button
                type="primary"
                onClick={() =>
                  router.push(`/employees/shift/add-or-edit/${id}`)
                }
              >
                Add
              </Button>
            </div>
          }
          filterItems={[
            {
              title: "Name",
              render: (
                <div className="flex">
                  <Form.Item name="name" className="mb-0">
                    <Input prefix={<SearchOutlined />} placeholder="Name" />
                  </Form.Item>
                </div>
              ),
            },
          ]}
          // @ts-ignore
          columns={columns}
          loading={loading}
          refetch={refetch}
          dataSource={data?.shifts?.nodes}
          totalCount={totalCount}
          gqlFilters={parseFilter()}
          onRow={onRow}
        />
      </div>
    </>
  );
};

Shift.auth = true;

export default Shift;

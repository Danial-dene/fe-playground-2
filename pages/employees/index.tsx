import { useEffect, useState } from "react";
import { Button, Dropdown, Menu, Form, Input, Avatar } from "antd";
import { useRouter } from "next/router";
import _, { divide } from "lodash";
import { Icon, CommonTableView } from "@commons";
import * as Gql from "@graphql";
import { UserOutlined } from "@ant-design/icons";
import { useHeader } from "@components/HeaderProvider";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";

const Customers = () => {
  const router = useRouter();
  const { setTitle } = useHeader();

  const { data, loading, refetch, error } = Gql.useGetEmployeesQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    variables: {
      // paging: {
      //   limit: 10,
      //   offset: 0,
      // },
    },
  });
  console.log("error", error);

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
  console.log("data", data);

  const totalCount = data?.employees?.totalCount || 0;

  useEffect(() => {
    setTitle("Employees");
  }, []);

  const menu = (
    <Menu
      items={[
        {
          label: "Delete",
          key: "0",
        },
      ]}
    />
  );

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
    },
    {
      title: "Employee No.",
      dataIndex: "employeeNo",
      sorter: true,
    },
    {
      title: "IC No.",
      dataIndex: "icNo",
      sorter: true,
    },
    {
      title: "",
      key: "action",
      render: (data: any) => (
        <div onClick={(e) => e.stopPropagation()}>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Icon name="dots" />
          </Dropdown>
        </div>
      ),
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
          tableTitle={`Employees (${totalCount})`}
          actions={
            <div>
              <Button type="primary">Add</Button>
            </div>
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
          ]}
          // @ts-ignore
          columns={columns}
          loading={loading}
          refetch={refetch}
          dataSource={data?.employees?.nodes}
          totalCount={0}
          gqlFilters={parseFilter()}
          onRow={onRow}
        />
      </div>
    </>
  );
};

Customers.auth = true;

export default Customers;

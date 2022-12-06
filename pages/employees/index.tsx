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

//NOTE: Customer is list of company
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

  const totalCount = data?.employees || [];

  useEffect(() => {
    setTitle("Employees");
  }, []);

  // const menu = (
  //   <Menu
  //     items={[
  //       {
  //         label: "Delete",
  //         key: "0",
  //       },
  //     ]}
  //   />
  // );

  const columns = [
    {
      title: "Avatar",
      dataIndex: "avatar",
      sorter: true,
      width: 150,
      render: (avatar: string) => (
        <Avatar src={avatar} icon={!_.isEmpty(avatar) && <UserOutlined />} />
      ),
    },
    {
      title: "Company Name",
      dataIndex: "name",
      sorter: true,
    },
    // {
    //   title: "",
    //   key: "action",
    //   render: (data: any) => (
    //     <div onClick={(e) => e.stopPropagation()}>
    //       <Dropdown overlay={menu} trigger={["click"]}>
    //         <Icon name="dots" />
    //       </Dropdown>
    //     </div>
    //   ),
    // },
  ];

  const onRow = (customer: any) => {
    return {
      onClick: () => router.push(`/customers/details/${customer?.id}`),
    };
  };

  return (
    <>
      <div className="p-9">
        <CommonTableView
          tableTitle={`Employees (${totalCount})`}
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
          dataSource={data?.employees?.edges}
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

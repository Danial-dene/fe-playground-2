import { useEffect } from "react";
import { Button, Dropdown, Menu, Form, Input, message } from "antd";
import { useRouter } from "next/router";
import _ from "lodash";
import { Icon, CommonTableView } from "@commons";
import * as Gql from "@graphql";
import { useHeader } from "@components/HeaderProvider";
import { SearchOutlined } from "@ant-design/icons";
import Link from "next/link";
import { getErrorMessage } from "@utils";
import { deleteModal } from "@components/popup";

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

  const parseFilter = () => {
    const query = router.query;
    const res = { and: [] as any[] };

    if (query.name) {
      res.and.push({
        or: [{ name: { like: `%${query.name}%` } }],
      });
    }

    if (query.employeeNo) {
      res.and.push({
        or: [{ employeeNo: { like: `%${query.employeeNo}%` } }],
      });
    }

    if (query.icNo) {
      res.and.push({
        or: [{ icNo: { like: `%${query.icNo}%` } }],
      });
    }

    res.and.push({
      or: [{ id: { eq: query.id } }],
    });

    return res;
  };

  const totalCount = data?.employees?.totalCount || 0;

  useEffect(() => {
    setTitle("Employees");
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
                onClick: () => router.push(`/employees/shift/${data.id}`),
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
          initialFilter={{ id: { eq: router?.query?.id } }}
          tableTitle={`Employees (${totalCount})`}
          actions={
            <Link href={"/employees/add-or-edit"}>
              <Button type="primary" className="w-[100px]">
                Add new
              </Button>
            </Link>
          }
          filterItems={[
            {
              title: "Name",
              render: (
                <div className="">
                  <Form.Item name="name" className="mb-0">
                    <Input prefix={<SearchOutlined />} placeholder="Name" />
                  </Form.Item>
                </div>
              ),
            },
            {
              title: "Employee No.",
              render: (
                <div className="">
                  <Form.Item name="employeeNo" className="mb-0">
                    <Input
                      prefix={<SearchOutlined />}
                      placeholder="Employee No."
                    />
                  </Form.Item>
                </div>
              ),
            },
            {
              title: "IC No.",
              render: (
                <div className="">
                  <Form.Item name="icNo" className="mb-0">
                    <Input prefix={<SearchOutlined />} placeholder="IC No." />
                  </Form.Item>
                </div>
              ),
            },
          ]}
          // @ts-ignore
          columns={columns}
          loading={loading}
          refetch={refetch}
          dataSource={data?.employees?.nodes}
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

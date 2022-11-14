import { Card } from "antd";
import _ from "lodash";
import * as Gql from "@graphql";

const Dashboard = () => {
  const { data, loading: adminLoading } = Gql.useGetAdminsQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    variables: {
      paging: {
        limit: 10,
        offset: 0,
      },
    },
  });

  const { data: customerData, loading: customerLoading } =
    Gql.useGetCustomersQuery({
      notifyOnNetworkStatusChange: true,
      fetchPolicy: "network-only",
      variables: {
        paging: {
          limit: 10,
          offset: 0,
        },
      },
    });

  const adminTotal = _.get(data, "admins.totalCount", 0);
  const customerTotal = _.get(customerData, "companies.totalCount", 0);

  const loading = adminLoading || customerLoading;

  return (
    <>
      <div className="p-9 grid grid-cols-3 absolute overflow-auto h-fit gap-4 w-full">
        <Card loading={loading}>
          <p>Number of Admin</p>
          <p className="text-[40px]">{adminTotal}</p>
        </Card>
        <Card loading={loading}>
          <p>Number of Customer</p>
          <p className="text-[40px]">{customerTotal}</p>
        </Card>
      </div>
    </>
  );
};

Dashboard.auth = true;

export default Dashboard;

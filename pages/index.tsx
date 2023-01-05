import { Card } from "antd";
import _ from "lodash";
import * as Gql from "@graphql";
import { useEffect } from "react";
import { useHeader } from "@components/HeaderProvider";

const Dashboard = () => {
  const { setTitle } = useHeader();
  
  useEffect(() => {
    setTitle("My Info");
  }, []);
  const { data, loading, refetch, error } = Gql.useGetMeQuery({
    // notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
  });

  console.log("data", data);
  console.log("error", error);

  return (
    <>
      <div className="p-9 grid grid-cols-3 absolute overflow-auto h-fit gap-4 w-full">
        {/* <Card loading={loading}>
          <p>Number of Admin</p>
          <p className="text-[40px]">{adminTotal}</p>
        </Card>
        <Card loading={loading}>
          <p>Number of Customer</p>
          <p className="text-[40px]">{customerTotal}</p>
        </Card> */}
      </div>
    </>
  );
};

Dashboard.auth = true;

export default Dashboard;

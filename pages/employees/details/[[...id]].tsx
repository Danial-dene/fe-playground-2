import { Card, Col, Descriptions, Row } from "antd";
import React, { useEffect } from "react";
import * as Gql from "@graphql";
import { useRouter } from "next/router";
import _ from "lodash";
import { useHeader } from "@components/HeaderProvider";
import { Breadcrumb } from "@commons";

const CustomerDetail = () => {
  const { setTitle } = useHeader();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setTitle(
      <Breadcrumb
        onClose={() => router.back()}
        items={[
          {
            label: "Customer",
            onClick: () => router.back(),
          },
          {
            label: "Details",
          },
        ]}
      />
    );
  }, []);

  const {
    data: companyData,
    loading: companyLoading,
    error,
  } = Gql.useGetCustomerQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    variables: { id: _.toString(id) },
  });

  const { data: userData, loading: userLoading } = Gql.useGetUsersQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    variables: { filter: { companyId: { eq: _.toString(id) } } },
  });

  const loading = companyLoading || userLoading;
  const userDetail = _.get(userData, "users.nodes", []);
  const companyDetail = _.get(companyData, "company");

  return (
    <div className="p-9">
      <Card loading={loading} title="Company Detail">
        <Descriptions column={1} bordered>
          <Descriptions.Item label="Name">
            {companyDetail?.name}
          </Descriptions.Item>

          <Descriptions.Item label="Users">
            {_.map(userDetail, (o: any, index: number) => {
              return (
                <div>
                  <UserComp key={index} userData={o} />
                </div>
              );
            })}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

type UserProps = {
  userData: Gql.User;
};
const UserComp: React.FC<UserProps> = ({ userData }) => {
  return (
    <>
      <Card className="my-4">
        <Row>
          <Col span={3} className="font-bold">
            <p>Name</p>
            <p>Position</p>
            <p>Phone No.</p>
            <p>Email</p>
          </Col>

          <Col span={1} className="font-bold">
            <p>:</p>
            <p>:</p>
            <p>:</p>
            <p>:</p>
          </Col>

          <Col span={5}>
            <p>{userData?.name || "-"}</p>
            <p>{userData?.position || "-"}</p>
            <p>{userData?.phoneNo || "-"}</p>
            <p>{userData?.email || "-"}</p>
          </Col>
        </Row>
      </Card>
    </>
  );
};

CustomerDetail.auth = true;

export default CustomerDetail;

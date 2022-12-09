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
    data: employeeData,
    loading: userLoading,
    error,
  } = Gql.useGetOneEmployeeQuery({
    notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    skip: !id,
    variables: { id: _.toString(id) },
  });

  console.log("error", error, employeeData);

  const loading = userLoading;
  const employeeDetail = _.get(employeeData, "employee");
  // const companyDetail = _.get(companyData, "company");

  return (
    <div className="p-9">
      <Card loading={loading} title="Company Detail">
        <Descriptions column={2} bordered>
          <Descriptions.Item label="Name">
            {employeeDetail?.name}
          </Descriptions.Item>

          <Descriptions.Item label="Employee No.">
            {employeeDetail?.employeeNo}
          </Descriptions.Item>

          <Descriptions.Item label="IC No.">
            {employeeDetail?.icNo}
          </Descriptions.Item>

          <Descriptions.Item label="Loan">
            {employeeDetail?.loan}
          </Descriptions.Item>

          <Descriptions.Item label="Account No.">
            {employeeDetail?.accountNo}
          </Descriptions.Item>

          <Descriptions.Item label="Bank Type">
            {employeeDetail?.bankType}
          </Descriptions.Item>
        </Descriptions>
      </Card>
    </div>
  );
};

CustomerDetail.auth = true;

export default CustomerDetail;

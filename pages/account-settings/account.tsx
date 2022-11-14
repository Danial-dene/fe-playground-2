import { useHeader } from "@components/HeaderProvider";
import SecurityForm from "@components/settings/SecurityForm";
// import SettingsTabLayout from "@components/settings/SettingsTabLayout";
import { Button, Card, Form, message, Row } from "antd";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as Gql from "@graphql";
import { useForm } from "antd/lib/form/Form";
import { UserAuthService } from "src/api";

const Account = () => {
  const { setTitle } = useHeader();

  useEffect(() => {
    setTitle("Settings");
  }, []);

  // Check that user logged in with social media accounts do not show secure forms
  // const { data, loading: fetching } = Gql.useGetMeQuery({});

  return (
    <div className="p-9">
      <Row className="mb-6">
        <Card style={{ width: 640 }}>
          <h1 className="font-bold mb-6 text-lg">Bina Malaysia Sdn Bhd</h1>
          <div className="grid grid-rows-3 grid-flow-col gap-2">
            <Link href="/Terms">Terms & Conditions</Link>
            <Link href="/PrivacyPolicy">Privacy Policy</Link>
            <Link href="/Outlet">Outlet and Branch</Link>
          </div>
        </Card>
      </Row>
    </div>
  );
};

Account.auth = true;
// Account.Layout = SettingsTabLayout;
export default Account;

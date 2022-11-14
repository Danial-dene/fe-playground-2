import { useHeader } from "@components/HeaderProvider";
import AccountSettingsTabLayout from "@components/settings/AccountSettingsTabLayout";
import * as Gql from "@graphql";
import { isValidPhoneNumber } from "libphonenumber-js";
import { Button, Col, Form, Input, message, Row, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { AvatarUploadInput, PhoneNumberInput } from "@forms";
import { Card } from "@commons";
import _ from "lodash";
import { getErrorMessage } from "@utils";

const Profile = () => {
  const { setTitle } = useHeader();
  const [form] = useForm();

  useEffect(() => {
    setTitle("Account Settings");
  }, []);

  // RETRIEVE INFO IF THE USER SIGN IN WITH SOCIAL MEDIA ACCOUNT
  const { data, loading } = Gql.useGetMeQuery({
    onCompleted: (d) => {
      console.log(d);
      form.setFieldsValue(d.getAdminMe);
    },
  });

  const [updateUser, { loading: isSubmitting }] = Gql.useUpdateMeMutation({
    onCompleted: () => {
      message.success("Profile successfully saved!");
    },
    onError: (e) => {
      message.error(getErrorMessage(e));
    },
  });

  const onFinish = (values: Gql.UpdateAdminInputDto) => {
    let input = { ...values };

    updateUser({
      variables: { input },
    });
  };

  return (
    <div className="pt-5 px-5">
      <Row justify="center">
        <Col md={12}>
          <Card loading={loading}>
            <h1 className="text-h3 mb-5">Profile</h1>
            <Form
              layout="vertical"
              form={form}
              onFinish={onFinish}
              initialValues={data?.getAdminMe}
              requiredMark={false}
            >
              <Form.Item label="Full Name" name="name">
                <Input />
              </Form.Item>

              <Form.Item label="Email" name="email">
                <Input />
              </Form.Item>

              <Form.Item label="Status" name="isActive">
                <Select
                  options={[
                    { label: "Active", value: true },
                    { label: "Inactive", value: false },
                  ]}
                />
              </Form.Item>

              <Button
                htmlType="submit"
                type="primary"
                className="w-[112px]"
                loading={isSubmitting}
              >
                Save
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

Profile.auth = true;
Profile.Layout = AccountSettingsTabLayout;

export default Profile;

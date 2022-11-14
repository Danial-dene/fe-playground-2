import { useHeader } from "@components/HeaderProvider";
import AccountSettingsTabLayout from "@components/settings/AccountSettingsTabLayout";
import * as Gql from "@graphql";
import { isValidPhoneNumber } from "libphonenumber-js";
import { Button, Card, Col, Form, Input, message, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { AvatarUploadInput, PhoneNumberInput } from "@forms";
import { getErrorMessage } from "@utils";
import apiCaller from "@utils/axios";
import { UserAuthService } from "src/api";
import _ from "lodash";

const Security = () => {
  const { setTitle } = useHeader();
  const [form] = useForm();

  useEffect(() => {
    setTitle("Account Settings");
  }, []);

  // RETRIEVE INFO IF THE USER SIGN IN WITH SOCIAL MEDIA ACCOUNT

  const onFinish = async (values: {
    oldPassword: string;
    newPassword: string;
  }) => {
    try {
      await UserAuthService.changePassword({
        body: _.omit(values, ["confirmNewPassword"]) as any,
      });

      form.resetFields();
      message.success("Password succesfully updated!");
    } catch (e) {
      message.error(getErrorMessage(e));
    }
  };

  return (
    <div className="pt-5 px-5">
      <Row justify="center">
        <Col md={12}>
          <Card style={{ width: 640 }}>
            <h1 className="text-h3 mb-5">Security</h1>
            <Form
              layout="vertical"
              form={form}
              onFinish={onFinish}
              initialValues={{}}
              requiredMark={false}
            >
              <Form.Item
                label="Enter your current password"
                name="oldPassword"
                rules={[
                  {
                    required: true,
                    message: "Please enter your existing password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Enter your new password"
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Please enter your password!",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                label="Re-enter your new password"
                name="confirmNewPassword"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Button htmlType="submit" type="primary">
                Confirm password change
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

Security.auth = true;
Security.Layout = AccountSettingsTabLayout;

export default Security;

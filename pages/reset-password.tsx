import { getErrorMessage } from "@utils";
import { Form, Input, Button, Row, Col, Card, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { UserAuthService } from "src/api";

type FormData = { newPassword: string };
const ResetPassword: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const token = router.query.token as string;

  const onFinish = async (values: FormData) => {
    try {
      setSubmitting(true);
      const newPassword = values.newPassword;
      const res = await UserAuthService.resetPassword({
        body: { newPassword, token },
      });
      setSuccess(true);
    } catch (e) {
      message.error(getErrorMessage(e));
    } finally {
      setSubmitting(false);
    }
  };

  if (!token) {
    return (
      <div className="h-full">
        <Row justify="center" align="middle" className="h-full">
          <Col xs={24} sm={20} md={12} lg={8} xl={8}>
            <div className="px-5 text-center">
              <p className="mb-3">This page is no longer valid</p>
              <Link href="/login">Back to login</Link>
            </div>
          </Col>
        </Row>
      </div>
    );
  }

  return (
    <div className="h-full">
      <Row justify="center" align="middle" className="h-full">
        <Col xs={24} sm={20} md={12} lg={8} xl={8}>
          <div className="px-5">
            <Card>
              {!success && (
                <>
                  <div className="text-center py-5">
                    <div className="aspect-[1.7] relative self-center w-[80px] inline-block">
                      <Image src="/assets/logo.png" layout="fill" />
                    </div>
                  </div>
                  <h1 className="mb-5 text-center text-h1">
                    Set your new password
                  </h1>
                  <Form
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                  >
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
                      label="Confirm your new password"
                      name="confirmNewPassword"
                      rules={[
                        {
                          required: true,
                          message: "Please confirm your password!",
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (
                              !value ||
                              getFieldValue("newPassword") === value
                            ) {
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

                    <Button
                      htmlType="submit"
                      type="primary"
                      className="mt-3"
                      loading={isSubmitting}
                      block
                    >
                      Reset password
                    </Button>
                    <div className="text-center py-5 font-bold">
                      <Link href="/login">Back to login</Link>
                    </div>
                  </Form>
                </>
              )}

              {success && (
                <>
                  <div className="text-center py-5">
                    <div className="aspect-[1.7] relative self-center w-[80px] inline-block">
                      <Image src="/assets/logo.png" layout="fill" />
                    </div>
                  </div>
                  <h1 className="mb-5 text-center text-h1">
                    Your password is reset!
                  </h1>
                  <p className="text-center text-gray90 mb-5">
                    You can now login with your new password.
                  </p>
                  <Link href="/login">
                    <Button
                      htmlType="submit"
                      type="primary"
                      className="mt-3"
                      block
                    >
                      Login now
                    </Button>
                  </Link>
                </>
              )}
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResetPassword;

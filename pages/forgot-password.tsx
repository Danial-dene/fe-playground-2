import { getErrorMessage } from "@utils";
import { Button, Form, Input, message, Card, Row, Col } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { UserAuthService } from "src/api";

type FormData = { email: string };

const ForgotPassword: React.FC = () => {
  const [isSubmitting, setSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");

  const onFinish = async (values: FormData) => {
    try {
      setSubmitting(true);
      const res = await UserAuthService.forgetPassword({ body: { email: values.email } });
      setEmail(values.email);
      setSuccess(true);
    } catch (e) {
      message.error(getErrorMessage(e));
    } finally {
      setSubmitting(false);
    }
  };

  const resendEmail = async () => {
    try {
      await UserAuthService.forgetPassword({ body: { email } });
      message.success(`A password reset link has been resent to ${email}`);
    } catch (e) {
      message.error(getErrorMessage(e));
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="h-full">
      <Row justify="center" align="middle" className="h-full">
        <Col xs={24} sm={20} md={12} lg={8} xl={8}>
          <div className="px-5">
            <Card>
              {!success && (
                <>
                  <div className="text-center py-5">
                    <div className="aspect-[1] relative self-center w-[80px] inline-block">
                      <Image src="/assets/logo.png" layout="fill" />
                    </div>
                  </div>
                  <h1 className="mb-5 text-center text-h1">
                    Forgot your password?
                  </h1>
                  <p className="text-center text-gray90 mb-5">
                    Enter your email address and we’ll send you a password reset
                    link.
                  </p>
                  <Form
                    layout="vertical"
                    onFinish={onFinish}
                    requiredMark={false}
                  >
                    <Form.Item
                      label="Email address"
                      name="email"
                      rules={[
                        { required: true, message: "Email is required" },
                        { type: "email", message: "Email format invalid" },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Button
                      htmlType="submit"
                      type="primary"
                      className="mt-3"
                      loading={isSubmitting}
                      block
                    >
                      Send password reset link
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
                  <h1 className="mb-5 text-center text-h1">Check your email</h1>
                  <p className="text-center text-gray90 mb-5">
                    {`We’ve sent a password reset link to ${email}`}
                  </p>
                  <Link href="/login">
                    <Button
                      htmlType="submit"
                      type="primary"
                      className="mt-3"
                      loading={isSubmitting}
                      block
                    >
                      Back to login
                    </Button>
                  </Link>
                  <p className="text-center mt-5 text-gray90">
                    Didn’t receive the email?{" "}
                    <a className="font-bold" onClick={() => resendEmail()}>
                      Click to resend
                    </a>
                  </p>
                </>
              )}
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ForgotPassword;

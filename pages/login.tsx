import { useState } from "react";
import { Button, Card, Col, message, Row, Form, Input } from "antd";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import Head from "next/head";

type FormValues = {
  email: string;
  password: string;
  rememberMe: boolean;
};

const Login: React.FC = () => {
  const router = useRouter();
  const [isSubmitting, setSubmitting] = useState(false);
  const { status } = useSession();

  if (status === "authenticated") {
    router.push("/");
  }

  const onFinishFailed = (errorInfo: any) => {};

  const onFinish = async (values: FormValues) => {
    setSubmitting(true);

    try {
      //@ts-ignore
      const { error, status, ok, url } = await signIn("credentials", {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: "/",
      });

      if (error) message.error("Invalid email or password");
    } catch (e) {
      throw e;
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
              <div className="text-center py-5">
                <div className="aspect-[1] relative self-center w-[80px] inline-block">
                  {/* <Image alt="" src="/assets/logo.png" layout="fill" /> */}
                </div>
              </div>
              <h1 className="mb-6 text-center text-h1">
                Login to QS
              </h1>

              <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
                requiredMark={false}
                initialValues={{ rememberMe: false }}
              >
                <Form.Item
                  className="content-none"
                  name="email"
                  label="Email"
                  rules={[
                    { required: true, message: "Email is required" },
                    { type: "email", message: "Email format invalid" },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  style={{ marginBottom: "9px !important" }}
                  rules={[{ required: true, message: "Password is required" }]}
                >
                  <Input.Password />
                </Form.Item>

                <Link href="/forgot-password">
                  <a className="text-sm">Forgot password?</a>
                </Link>
                <Button
                  htmlType="submit"
                  type="primary"
                  loading={isSubmitting}
                  block
                  className="mt-5"
                >
                  Login
                </Button>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Login;

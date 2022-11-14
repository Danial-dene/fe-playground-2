import { useHeader } from "@components/HeaderProvider";
import * as Gql from "@graphql";
import { Button, Col, Form, Input, message, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { Breadcrumb, Card } from "@commons";
import _ from "lodash";
import { getErrorMessage } from "@utils";
import { useRouter } from "next/router";

const CustomerEdit = () => {
  const { setTitle } = useHeader();
  const [form] = useForm();
  const router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    setTitle(
      <Breadcrumb
        onClose={() => router.back()}
        items={[
          {
            label: "Subscription",
            onClick: () => router.back(),
          },
          {
            label: id ? "Edit" : "Add",
          },
        ]}
      />
    );
  }, []);

  const [getAdmin, { data, loading: adminLoading }] =
    Gql.useGetOneAdminLazyQuery({
      onCompleted: (obj) => {
        form.setFieldsValue(obj.admin);
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    });

  useEffect(() => {
    if (id) getAdmin({ variables: { id: _.toString(id) } });
  }, [router]);

  const [updateAdmin, { loading: isSubmitting }] = Gql.useUpdateAdminMutation({
    onCompleted: () => {
      message.success("Admin successfully saved!");
    },
    onError: (e) => {
      message.error(getErrorMessage(e));
    },
  });

  const [addAdmin, { loading: addAdminLoading }] = Gql.useCreateAdminMutation({
    onCompleted: () => {
      message.success("Admin successfully added!");
    },
    onError: (e) => {
      message.error(getErrorMessage(e));
    },
  });

  // console.log(error);

  const onFinish = (values: any) => {
    let input = { ...values };

    if (id) {
      updateAdmin({
        variables: { input: { id: _.toString(id), update: input } },
      });
    } else {
      addAdmin({ variables: { input: { admin: input } } });
    }
  };

  const loading = adminLoading || isSubmitting || addAdminLoading;

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
              initialValues={data?.admin ? data?.admin : {}}
              requiredMark={false}
            >
              <Form.Item label="Name" name="name">
                <Input />
              </Form.Item>

              {!id && (
                <Form.Item label="Password" name="password">
                  <Input.Password />
                </Form.Item>
              )}

              <Form.Item label="E-mail" name="email">
                <Input />
              </Form.Item>

              <Button
                loading={loading}
                htmlType="submit"
                type="primary"
                className="w-[112px]"
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

CustomerEdit.auth = true;

export default CustomerEdit;

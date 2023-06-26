import { Breadcrumb, Card } from "@commons";
import { useHeader } from "@components/HeaderProvider";
import { ImageUploadInput } from "@forms";
import {
  useCreateAdminMutation,
  useGetAdminLazyQuery,
  useUpdateAdminMutation,
} from "@graphql";
import { onError, onSuccess } from "@utils";
import { Button, Col, Form, Input, Row, Select, message } from "antd";
import { useForm } from "antd/lib/form/Form";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";

const AdminEdit = () => {
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
            label: "Admin",
            onClick: () => router.back(),
          },
          {
            label: id ? "Edit" : "Add",
          },
        ]}
      />
    );
  }, []);

  const [getAdmin, { loading: adminLoading }] = useGetAdminLazyQuery({
    onCompleted: (obj) => {
      form.setFieldsValue(obj.admin);
    },
    onError: onError,
  });

  useEffect(() => {
    if (id) getAdmin({ variables: { id: _.toString(id) } });
  }, [router]);

  const [updateAdmin, { loading: isSubmitting }] = useUpdateAdminMutation({
    onCompleted: () =>
      onSuccess({ type: "update", title: "Admin", router, goBack: false }),
    onError: onError,
  });

  const [addAdmin, { loading: addAdminLoading }] = useCreateAdminMutation({
    onCompleted: () =>
      onSuccess({ type: "create", title: "Admin", router, goBack: false }),
    onError: onError,
  });

  // console.log(error);

  const onFinish = (values: any) => {
    console.log("values", values);

    if (id) {
      updateAdmin({
        variables: { input: { id: _.toString(id), update: values } },
      });
    } else {
      addAdmin({ variables: { input: { admin: values } } });
      router.back();
    }
  };

  const loading = adminLoading || isSubmitting || addAdminLoading;

  return (
    <div className="pt-5 px-5">
      <Row justify="center">
        <Col md={12}>
          <Card loading={loading}>
            <h1 className="text-h3 mb-5">Profile</h1>
            <Form layout="vertical" form={form} onFinish={onFinish}>
              <Form.Item label="Thumbnail" name="thumbnail">
                <ImageUploadInput />
              </Form.Item>

              <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="E-mail"
                name="email"
                rules={[{ required: true }]}
              >
                <Input type="email" />
              </Form.Item>

              {!id && (
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[{ required: true }]}
                >
                  <Input.Password />
                </Form.Item>
              )}

              <Form.Item label="Status" name="active">
                <Select
                  options={[
                    { label: "Active", value: true },
                    { label: "Inactive", value: false },
                  ]}
                />
              </Form.Item>

              <Form.Item label="Phone No." name="phoneNo">
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

AdminEdit.auth = true;

export default AdminEdit;

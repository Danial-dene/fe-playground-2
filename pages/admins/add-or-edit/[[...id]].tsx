import { useHeader } from "@components/HeaderProvider";
import AccountSettingsTabLayout from "@components/settings/AccountSettingsTabLayout";
import * as Gql from "@graphql";
import { isValidPhoneNumber } from "libphonenumber-js";
import { Button, Col, Form, Input, message, Row, Select } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { AvatarUploadInput, ImageUploadInput, PhoneNumberInput } from "@forms";
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

  const [getAdmin, { data, loading: adminLoading }] =
    Gql.useGetOneUserLazyQuery({
      onCompleted: (obj) => {
        form.setFieldsValue(obj.user);
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    });

  useEffect(() => {
    if (id) getAdmin({ variables: { id: _.toString(id) } });
  }, [router]);

  const [updateAdmin, { loading: isSubmitting }] = Gql.useUpdateUserMutation({
    onCompleted: () => {
      message.success("User successfully saved!");
      router.back();
    },
    onError: (e) => {
      message.error(getErrorMessage(e));
    },
  });

  const [addAdmin, { loading: addAdminLoading }] = Gql.useCreateUserMutation({
    onCompleted: () => {
      message.success("User successfully added!");
    },
    onError: (e) => {
      message.error(getErrorMessage(e));
    },
  });

  // console.log(error);

  const onFinish = (values: any) => {
    let input = { ...values };

    console.log("input", input);

    if (id) {
      updateAdmin({
        variables: { input: { id: _.toString(id), update: input } },
      });
    } else {
      addAdmin({ variables: { input: { user: input } } });
      router.back();
      // form.resetFields()
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
              initialValues={data?.user ? data?.user : {}}
              requiredMark={false}
            >
              <Form.Item
                label="Thumbnail"
                name="thumbnailUrl"
                rules={[{ required: true }]}
              >
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

              {/* <Form.Item label="Status" name="isActive">
                <Select
                  options={[
                    { label: "Active", value: true },
                    { label: "Inactive", value: false },
                  ]}
                />
              </Form.Item> */}

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

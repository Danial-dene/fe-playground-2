import { useHeader } from "@components/HeaderProvider";
import AccountSettingsTabLayout from "@components/settings/AccountSettingsTabLayout";
import * as Gql from "@graphql";
import { isValidPhoneNumber } from "libphonenumber-js";
import {
  Button,
  Col,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Select,
} from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { AvatarUploadInput, PhoneNumberInput } from "@forms";
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
    Gql.useGetOneEmployeeLazyQuery({
      onCompleted: (obj) => {
        form.setFieldsValue(obj.employee);
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    });

  useEffect(() => {
    if (id) getAdmin({ variables: { id: _.toString(id) } });
  }, [router]);

  const [updateAdmin, { loading: isSubmitting }] =
    Gql.useUpdateEmployeeMutation({
      onCompleted: () => {
        message.success("Admin successfully saved!");
        router.back();
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    });

  const [addAdmin, { loading: addAdminLoading }] =
    Gql.useCreateEmployeeMutation({
      onCompleted: () => {
        message.success("Admin successfully added!");
        router.back();
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
              requiredMark={false}
            >
              <Form.Item label="Name" name="name" rules={[{ required: true }]}>
                <Input />
              </Form.Item>

              <Form.Item
                label="Employee No."
                name="employeeNo"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="IC No."
                name="icNo"
                rules={[{ required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item label="Loan" name="loan" rules={[{ required: true }]}>
                <InputNumber />
              </Form.Item>

              <Form.Item
                label="Account No."
                name="accountNo"
                rules={[{ required: true }]}
              >
                <InputNumber />
              </Form.Item>

              <Form.Item
                label="Bank Type"
                name="bankType"
                rules={[{ required: true }]}
              >
                <Input />
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

              <Button
                loading={loading}
                type="primary"
                className="w-[112px]"
                onClick={() => form.submit()}
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

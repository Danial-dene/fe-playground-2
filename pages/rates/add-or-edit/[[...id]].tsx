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
            label: "Rate",
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
    Gql.useGetOneShiftOptionLazyQuery({
      onCompleted: (obj) => {
        form.setFieldsValue(obj.shiftOption);
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    });

  useEffect(() => {
    if (id) getAdmin({ variables: { id: _.toString(id) } });
  }, [router]);

  const [updateShiftOptions, { loading: isSubmitting }] =
    Gql.useUpdateShiftOptionsMutation({
      onCompleted: () => {
        message.success("Rate successfully saved!");
        router.back();
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    });

  const [addShiftOptions, { loading: addAdminLoading }] =
    Gql.useCreateShiftOptionMutation({
      onCompleted: () => {
        message.success("Rate successfully added!");
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
      updateShiftOptions({
        variables: { input: { id: _.toString(id), update: input } },
      });
    } else {
      addShiftOptions({ variables: { input: { shiftOption: input } } });
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

              <Form.Item label="Rate" name="rate" rules={[{ required: true }]}>
                <InputNumber />
              </Form.Item>

              <Form.Item
                label="OT Rate"
                name="otRate"
                rules={[{ required: true }]}
              >
                <InputNumber />
              </Form.Item>

              <Button
                loading={loading}
                onClick={() => form.submit()}
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

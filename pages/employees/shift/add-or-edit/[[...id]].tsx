import { useHeader } from "@components/HeaderProvider";
import AccountSettingsTabLayout from "@components/settings/AccountSettingsTabLayout";
import * as Gql from "@graphql";
import { isValidPhoneNumber } from "libphonenumber-js";
import {
  Button,
  Col,
  DatePicker,
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
import { SelectSearchInput } from "@components/SelectSearchInput";

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

  const [getEmployee, { data, loading: adminLoading }] =
    Gql.useGetOneEmployeeLazyQuery({
      onCompleted: (obj) => {
        form.setFieldsValue(obj.employee);
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    });

  useEffect(() => {
    if (id) getEmployee({ variables: { id: _.toString(id) } });
  }, [router]);

  const [updateEmployee, { loading: isSubmitting }] =
    Gql.useUpdateEmployeeMutation({
      onCompleted: () => {
        message.success("Employee successfully saved!");
        router.back();
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    });

  const [addEmployee, { loading: addAdminLoading }] =
    Gql.useCreateEmployeeMutation({
      onCompleted: () => {
        message.success("Employee successfully added!");
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
      updateEmployee({
        variables: { input: { id: _.toString(id), update: input } },
      });
    } else {
      addEmployee({ variables: { input: { employee: input } } });
    }
  };

  const loading = adminLoading || isSubmitting || addAdminLoading;

  return (
    <div className="pt-5 px-5">
      <Row justify="center">
        <Col md={12}>
          <Card loading={loading}>
            <h1 className="text-h3 mb-5">Shift</h1>
            <Form
              layout="vertical"
              form={form}
              onFinish={onFinish}
              requiredMark={false}
            >
              <Form.Item label="Date" name="date" rules={[{ required: true }]}>
                <DatePicker />
              </Form.Item>

              <Form.Item label="Hours" name="hours">
                <InputNumber />
              </Form.Item>

              <Form.Item label="Rate" name="rate">
                <SelectSearchInput
                  GqlDocument={Gql.GetShiftsOptionsDocument}
                  toDisplay={"name"}
                  valueToGet={"id"}
                  rowsKey={"shiftOptions.nodes"}
                />
              </Form.Item>

              <Form.Item label="Allowance" name="allowance">
                <InputNumber />
              </Form.Item>

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
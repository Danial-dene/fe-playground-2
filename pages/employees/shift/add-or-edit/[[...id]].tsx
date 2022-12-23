import { useHeader } from "@components/HeaderProvider";
import * as Gql from "@graphql";
import { Button, Col, DatePicker, Form, InputNumber, message, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import { useEffect } from "react";
import { Breadcrumb, Card } from "@commons";
import _ from "lodash";
import { getErrorMessage } from "@utils";
import { useRouter } from "next/router";
import { SelectSearchInput } from "@components/SelectSearchInput";
import moment from "moment";

const CustomerEdit = () => {
  const { setTitle } = useHeader();
  const [form] = useForm();
  const router = useRouter();

  const { id: shiftId, employeeId } = router.query;

  useEffect(() => {
    setTitle(
      <Breadcrumb
        onClose={() => router.back()}
        items={[
          {
            label: "Shift",
            onClick: () => router.back(),
          },
          {
            label: shiftId ? "Edit" : "Add",
          },
        ]}
      />
    );
  }, []);

  const [getShift, { data, loading: shiftLoading }] =
    Gql.useGetOneShiftLazyQuery({
      onCompleted: (obj) => {
        console.log("obj", obj);
        const date = moment(obj?.shift?.date);
        const shiftOptionId = _.toString(obj?.shift?.shiftOptionId);
        form.setFieldsValue({
          ..._.omit(obj?.shift, ["date"], ["shiftOptionId"]),
          date,
          shiftOptionId,
        });
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    });

  useEffect(() => {
    if (shiftId) getShift({ variables: { id: _.toString(shiftId) } });
  }, [router]);

  const [updateShift, { loading: isSubmitting }] = Gql.useUpdateShiftMutation({
    onCompleted: () => {
      message.success("Employee successfully saved!");
      router.back();
    },
    onError: (e) => {
      message.error(getErrorMessage(e));
    },
  });

  const [addShift, { loading: addAdminLoading }] = Gql.useCreateShiftMutation({
    onCompleted: () => {
      message.success("Shift successfully added!");
      router.back();
    },
    onError: (e) => {
      message.error(getErrorMessage(e));
    },
  });

  // console.log(error);

  const onFinish = (values: any) => {
    let input = { ...values };
    const shiftOptionId = _.get(values, "shiftOptionId");
    input = _.omit(input, ["shiftOptionId"]);
    console.log("input", input);

    if (shiftId) {
      updateShift({
        variables: {
          input: {
            id: _.toString(shiftId),
            update: {
              ...input,
            },
          },
        },
      });
    } else {
      addShift({
        variables: {
          input: {
            shift: {
              ...input,
              shiftOptionId: Number(shiftOptionId),
              employeeId: Number(employeeId),
            },
          },
        },
      });
    }
  };

  const loading = shiftLoading || isSubmitting || addAdminLoading;

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

              <Form.Item label="Rate" name="shiftOptionId">
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

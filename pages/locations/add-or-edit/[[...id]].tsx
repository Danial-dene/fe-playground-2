import { Breadcrumb, Card } from "@commons";
import { useHeader } from "@components/HeaderProvider";
import GoogleGetPlace from "@forms/GooglePlace";
import * as Gql from "@graphql";
import { getErrorMessage } from "@utils";
import { Button, Col, Form, InputNumber, message, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import _ from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
            label: "Location",
            onClick: () => router.back(),
          },
          {
            label: id ? "Edit" : "Add",
          },
        ]}
      />
    );
  }, []);

  const { data, loading: locationLoading } = Gql.useGetOneLocationQuery({
    variables: { id: "1" },
    skip: !id,
    onCompleted: (obj) => {
      form.setFieldsValue(obj.location);
    },
    onError: (e) => {
      message.error(getErrorMessage(e));
    },
  });

  const [updateLocation, { loading: isSubmitting }] =
    Gql.useUpdateLocationMutation({
      onCompleted: () => {
        message.success("Location successfully saved!");
        router.back();
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    });

  const onFinish = (values: any) => {
    const {
      location: { details, suggestion },
      range,
    } = values;

    if (id) {
      updateLocation({
        variables: {
          input: {
            id: _.toString(id),
            update: {
              range,
              location: suggestion?.description,
              lat: details?.coordinates?.lat,
              lang: details?.coordinates?.lng,
            },
          },
        },
      });
    }
  };

  const loading = locationLoading || isSubmitting;

  return (
    <div className="pt-5 px-5">
      <Row justify="center">
        <Col md={12}>
          <Card loading={loading}>
            <h1 className="text-h3 mb-5">Location</h1>
            <Form
              layout="vertical"
              form={form}
              onFinish={onFinish}
              requiredMark={false}
            >
              <Form.Item
                label="Name"
                name="location"
                rules={[{ required: true }]}
              >
                <GoogleGetPlace address={data?.location?.location} />
              </Form.Item>

              <Form.Item
                label="Range"
                name="range"
                rules={[{ required: true }]}
              >
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

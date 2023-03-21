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

  const [getLocation, { data, loading: locationLoading }] =
    Gql.useGetOneLocationLazyQuery({
      onCompleted: (obj) => {
        form.setFieldsValue(obj.location);
      },
      onError: (e) => {
        message.error(getErrorMessage(e));
      },
    });

  useEffect(() => {
    if (id) getLocation({ variables: { id: _.toString(id) } });
  }, [router]);

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
      location: {
        details: { coordinates },
        suggestion: { description },
      },
      range,
    } = values;

    if (id) {
      updateLocation({
        variables: {
          input: {
            id: _.toString(id),
            update: {
              range,
              location: description,
              lat: coordinates.lat,
              lang: coordinates.lng,
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
                <GoogleGetPlace address={data?.location} />
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

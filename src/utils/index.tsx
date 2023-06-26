import { ApolloError } from "@apollo/client";
import { message } from "antd";
import _ from "lodash";
import moment from "moment";
import { NextRouter } from "next/router";

export const getErrorMessage = (
  error: ApolloError | Error | string | any
): string => {
  let message = "";
  const data = _.get(error, "response.data", {});
  if (_.isString(error)) {
    message = error;
  } else if (Object.keys(data).length !== 0 && data.constructor === Object) {
    message = _.toString(_.get(error, "response.data.message"));
  } else if (error instanceof Error) {
    message = error.message;
  }
  return message;
};

export const filterOption = (input: string, option: any) =>
  (option!.children as unknown as string)
    .toLowerCase()
    .includes(input.toLowerCase());

export const parseLiteralDateTime = (date: string) =>
  moment(date).format("D MMM YYYY h:mm A");

export const onError = (error: any) => {
  message.error(getErrorMessage(error));
};

export const onSuccess = ({
  router,
  title,
  type,
  goBack = true,
  refetch
}: {
  router?: NextRouter;
  title: string;
  type: "create" | "update" | "delete";
  goBack?: boolean;
  refetch?: () => void;
}) => {
  message.success(`${title} has been successfully ${type}!`);
  refetch && refetch();
  goBack && router?.back();
};

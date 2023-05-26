import { Tag } from "antd";
import _ from "lodash";
import React from "react";

type Props = {
  status: string;
};
const TagComp: React.FC<Props> = ({ status }) => {
  let color;
  if (status === "Approved") {
    color = "green";
  } else if (status === "Pending") {
    color = "orange";
  }
  return <Tag color={color}>{_.startCase(status)}</Tag>;
};

export default TagComp;

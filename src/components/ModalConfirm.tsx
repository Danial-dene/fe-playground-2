import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import _ from "lodash";

type ModalConfirmProps = {
  name: string;
  onOk: () => void;
  type: "delete" | "activate" | "deactivate";
};
const modalConfirm = ({ name, onOk, type }: ModalConfirmProps) => {
  const content =
    type === "delete" ? "You cannot undo the item once it's deleted." : "";
  Modal.confirm({
    title: `Do you want to ${type} this item?`,
    icon: <ExclamationCircleOutlined />,
    content: content,
    okText: `${_.upperFirst(type)}`,
    okType: "danger",
    onOk,
  });
};

export default modalConfirm;

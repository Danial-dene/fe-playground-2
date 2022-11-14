import { Modal } from "antd";

type DeleteModalProps = { name: string; onOk: () => void };
export const deleteModal = ({ name, onOk }: DeleteModalProps) => {
  Modal.confirm({
    title: `Delete ${name}`,
    content: `Are you sure to delete this ${name}?`,
    okText: "Yes, Delete",
    cancelText: "No",
    maskClosable: true,
    icon: false,
    onOk,
  });
};

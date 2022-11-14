import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Icon } from "@commons";
import { message, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import React, { useEffect, useState } from "react";

import styles from "./ImageUploadInput.module.scss";

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result as string));
  reader.readAsDataURL(img);
};

const dummyRequest = ({ onSuccess }: any) => {
  setTimeout(() => {
    onSuccess("OK");
  }, 0);
};

const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
    return false;
  }
  const isLt2M = file.size / 1024 / 1024 < 3;
  if (!isLt2M) {
    message.error("Image must smaller than 3MB!");
    return false;
  }
  return isJpgOrPng && isLt2M;
};

interface ImageUploadInputProps {
  onChange?: (v: any) => void;
  value?: any;
}

const ImageUploadInput: React.FC<ImageUploadInputProps> = ({
  onChange,
  value,
}) => {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>(value);

  useEffect(() => {
    if (value) setImageUrl(value);
  }, [value]);

  const handleChange: UploadProps["onChange"] = (
    info: UploadChangeParam<UploadFile>
  ) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      if (onChange) onChange(info.file.originFileObj);
      getBase64(info.file.originFileObj as RcFile, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = <Icon name="camera" />;

  return (
    <Upload
      name="photo"
      listType="picture-card"
      className={styles.imageUploader}
      showUploadList={false}
      beforeUpload={beforeUpload}
      onChange={handleChange}
      customRequest={dummyRequest}
    >
      <div className="upload-wrapper">
        <>
          {!imageUrl ? (
            <div className="photo-wrapper">{uploadButton}</div>
          ) : (
            <img src={imageUrl} alt="avatar" style={{ width: "40%", marginRight: 16 }} />
          )}
          <span className="text-primary font-bold">Upload photo</span>
        </>
      </div>
    </Upload>
  );
};

export { ImageUploadInput };

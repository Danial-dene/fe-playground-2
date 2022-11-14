import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Icon } from "@commons";
import { message, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import type { UploadChangeParam } from "antd/es/upload";
import type { RcFile, UploadFile, UploadProps } from "antd/es/upload/interface";
import React, { useEffect, useState } from "react";

import styles from "./AvatarUploadInput.module.scss";

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

interface AvatarUploadInputProps {
  onChange?: (v: any) => void;
  value?: any;
}

const AvatarUploadInput: React.FC<AvatarUploadInputProps> = ({
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

  const onPreview = async (file: UploadFile) => {
    let src = file.url as string;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };

  return (
    <ImgCrop rotate>
      <Upload
        name="avatar"
        listType="picture-card"
        className={styles.avatarUploader}
        showUploadList={false}
        beforeUpload={beforeUpload}
        onChange={handleChange}
        onPreview={onPreview}
        customRequest={dummyRequest}
      >
        <div className="upload-wrapper">
          <div className="photo-wrapper">
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </div>
          <span className="text-primary font-bold">Upload photo</span>
        </div>
      </Upload>
    </ImgCrop>
  );
};

export { AvatarUploadInput };

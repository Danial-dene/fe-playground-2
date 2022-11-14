import { Input, InputProps, message, Select, Space } from "antd";
import _ from "lodash";
import { useEffect, useState } from "react";
import libphone, { CountryCode, parsePhoneNumber } from "libphonenumber-js";
import { Icon } from "@commons";

const { Option } = Select;

interface Props extends Omit<InputProps, "onChange"> {
  className?: string;
  style?: React.CSSProperties;
  countryCode?: CountryCode;
  disabled?: boolean;
  onChange?: (value: string) => void;
  value?: string;
}

const PhoneNumberInput: React.FC<Props> = ({
  disabled,
  onChange,
  ...props
}) => {
  const [value, setValue] = useState<string>(_.toString(props.value || ""));
  const [phoneCode, setPhoneCode] = useState("+60");

  const triggerChange = (val: string) => {
    onChange?.(val);
  };

  useEffect(() => {
    if (!props.value) return;
    const parsed = libphone(props.value);
    if (!parsed) return;
    setPhoneCode(`+${parsed.countryCallingCode}`);
    setValue(parsed.nationalNumber);
  }, [props.value]);

  return (
    <Space className="w-full">
      <Select
        value={phoneCode}
        defaultValue="+60"
        className="phone-selector"
        style={{ flex: 1, width: 110 }}
        onChange={(v) => {
          setPhoneCode(_.toString(v));
          triggerChange(`${v}${value}`);
        }}
      >
        <Option value="+60">+60</Option>
      </Select>

      <Input
        type="tel"
        style={{ width: "100%" }}
        {...props}
        disabled={disabled}
        value={value.replace(phoneCode, "")}
        onChange={(e) => {
          const value = (e.target.value || "").replace(
            eval("/[^0-9,+*#]/g"),
            ""
          );
          setValue(value);
          triggerChange(`${phoneCode}${value}`);
        }}
      />
    </Space>
  );
};
export { PhoneNumberInput };

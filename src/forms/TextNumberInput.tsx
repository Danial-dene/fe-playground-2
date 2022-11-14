import { useState } from "react";
import { Input, InputProps } from "antd";
import _ from "lodash";

interface Props extends Omit<InputProps, "onChange"> {
  disabled?: boolean;
  onChange?: (value: number) => void;
}
const TextNumberInput: React.FC<Props> = ({ disabled, onChange, ...props }) => {
  const [value, setValue] = useState<string>(_.toString(props.value || ""));

  const triggerChange = (val: string) => {
    onChange?.(_.toNumber(val));
  };

  return (
    <Input
      {...props}
      disabled={disabled}
      value={props.value || value}
      onChange={(e) => {
        const value = (e.target.value || "").replace(eval("/[^0-9]/g"), "");
        setValue(value);
        triggerChange(value);
      }}
    />
  );
};

export default TextNumberInput;

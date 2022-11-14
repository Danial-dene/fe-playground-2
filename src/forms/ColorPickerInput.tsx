import { FC, useEffect, useState } from "react";
import { Input, SelectProps } from "antd";
import _ from "lodash";
import * as Gql from "@graphql";
import apolloClient from "@lib/apollo";
import {
  ColorResult,
  ChromePicker
} from "react-color";

interface ColorInputProps {
  onChange?: (v: any) => void;
  value?: any;
}

const ColorPickerInput: FC<ColorInputProps> = ({ onChange, value }) => {
  // console.log(value);
  const [isOpen, setOpen] = useState<boolean>(false);
  const handleFocus = () => {
    setOpen(true);
  };

  // const handleBlur = (e) => {
  //   // setFocused(false);
  // };

  const handleChange = (color: ColorResult) => {
    if (onChange) onChange(color.hex);
    // setFocused(false);
  };

  return (
    <div>
      <Input
        onFocus={handleFocus}
        // onBlur={handleBlur}
        value={value}
        prefix={
          <div
            style={{
              width: 24,
              height: 24,
              backgroundColor: value,
              borderRadius: "50%",
            }}
          />
        }
      />
      {isOpen && (
        <div onClick={(e) => e.stopPropagation()} className="absolute z-10">
          <div
            className="fixed"
            style={{ top: "0px", right: "0px", bottom: "0px", left: "0px" }}
            onClick={() => setOpen(false)}
          />
          <ChromePicker
            disableAlpha
            onChange={handleChange}
            color={value}
            // onChangeComplete={() => setOpen(false)}
          />
        </div>
      )}
    </div>
  );
};

export { ColorPickerInput };

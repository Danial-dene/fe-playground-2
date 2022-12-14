import { FC, useEffect, useState } from "react";
import { message, Select, SelectProps, Spin } from "antd";
import _, { Dictionary, NumericDictionary } from "lodash";
import apolloClient from "@lib/apollo";
import { DocumentNode, useQuery } from "@apollo/client";
import { Icon } from "@commons";
import { getErrorMessage } from "@utils";

interface Props extends SelectProps {
  GqlDocument: DocumentNode;
  toDisplay: string;
  valueToGet: string;
  totalKey?: string;
  rowsKey: string;
  limit?: number;
  filter?: object;
  placeholder?: string;
  className?: string;
  showArrow?: boolean;
  size?: "small" | "middle" | "large";
  mode?: "multiple" | undefined;
  disabled?: boolean;
  onChange?: (val: string | number | string[]) => void;
}

const SelectSearchInput: FC<Props> = (props) => {
  const {
    GqlDocument,
    toDisplay,
    valueToGet,
    onChange,
    rowsKey,
    placeholder,
    mode,
    className,
    showArrow,
    size,
    disabled,
    filter = {},
  } = props;
  const [isFetching, setFetching] = useState<boolean>(false);
  const [options, setOptions] = useState<any[]>();
  const [value, setValue] = useState<any>(mode === "multiple" ? [] : "");

  useEffect(() => {
    if (!_.isEmpty(props.value)) {
      fetchOneData(props.value);
    }
    if (props.onClear) onClear();
  }, [props.value]);
  console.log("value", value);

  //find the data if this component receive a data
  const fetchOneData = async (val: any) => {
    //when got value/selected it will get the value and set it
    console.log("hello");

    const arrayOfValue = mode
      ? _.map(val, (obj: any) => {
          //check the value either ['1'] or [{label: "car", value: 1}]
          //get one value only
          if (obj.value) {
            return obj.value;
          } else {
            return obj;
          }
        })
      : val;

    setFetching(true);
    try {
      const res = await apolloClient.query({
        query: GqlDocument,
        variables: {
          filter: { id: { in: arrayOfValue } },
        },
      });

      let getValue;
      if (mode === "multiple") {
        getValue = _.map(_.get(res, `data.${rowsKey}`), (obj, index) => {
          return {
            label: _.get(obj, toDisplay),
            value: _.get(obj, valueToGet),
            key: index,
          };
        });
      } else {
        getValue = _.get(res, `data.${rowsKey}[0].${toDisplay}`);
      }
      // console.log("res", res);
      setValue(getValue);
    } catch (e) {
      message.error(getErrorMessage(e));
    } finally {
      setFetching(false);
    }
  };

  const onSearch = async (keyword: string) => {
    setFetching(true);
    try {
      const res = await apolloClient.query({
        query: GqlDocument,
        variables: {
          filter: {
            ...filter,
            or: [
              {
                [toDisplay]: { like: `%${keyword}%` },
              },
            ],
          },
        },
      });

      setOptions(_.get(res, `data.${rowsKey}`));
    } catch (e) {
      message.error(getErrorMessage(e));
    } finally {
      setFetching(false);
    }
  };

  const onSelect = (val: any) => {
    if (onChange) {
      if (mode === "multiple") {
        onChange([val, ...value]);
        //set value whenever user select one data
      } else onChange(val);
    }
  };

  const onClear = () => {
    setValue("");
  };

  const handleChange = (afterDelete: string[]) => {
    //delete item if select mode multiple

    if (mode === "multiple" && onChange) onChange([...afterDelete]);

    if (mode === "multiple" && _.isEmpty(afterDelete)) setValue([]);
  };

  return (
    <Select
      suffixIcon={<Icon name="chevron-down" />}
      loading={isFetching}
      className={`w-full ${className}`}
      showSearch
      labelInValue={mode ? true : false}
      size={size}
      mode={mode}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
      allowClear
      onChange={handleChange}
      showArrow={showArrow}
      filterOption={false}
      onSearch={_.debounce(onSearch, 350)}
      onClear={onClear}
      notFoundContent={isFetching ? <Spin size="small" /> : null}
      getPopupContainer={(triggerNode: HTMLElement) => triggerNode}
      onSelect={onSelect}
    >
      {_.map(options, (o, index) => {
        // console.log("o", o);
        return (
          <Select.Option key={index} value={_.get(o, valueToGet)}>
            {_.get(o, toDisplay)}
          </Select.Option>
        );
      })}
    </Select>
  );
};

export { SelectSearchInput };

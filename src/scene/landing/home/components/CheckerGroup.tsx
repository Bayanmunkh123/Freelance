import * as React from 'react';
import { Field, FieldInputProps, FormikProps, connect } from 'formik'; // Import the 'connect' function
import { Button, Checkbox } from '@mui/material';
import {
  RenderValues,
  RenderNumbers,
  RenderStatus,
} from 'src/@core/utils/initData';
import { RenderValueType } from 'src/@core/utils/types';
import Icon from 'src/@core/components/icon';
import { CustomizedProps, FilterType } from './FilterBuy';

export interface CheckerGroupType {
  isImg: boolean;
  isStartIcon: boolean;
  isBuy: boolean;
  name: string;
  isNumber: boolean;
  isStatus: boolean;
  form: FormikProps<FilterType>; 
}

const CustomCheckIcon = <Icon icon={'mdi:check-circle'} color='#42C3A7' />;

const CustomUncheckedIcon = <Icon icon={'mdi:radiobox-blank'} />;

export const CheckerGroup: React.FC<CheckerGroupType> = (props) => {
  const [selected, setSelected] = React.useState<string | number | null>(null);
  const { isStartIcon, isImg, isBuy, name, isNumber, isStatus } = props;
  const values = isBuy
    ? RenderValues.slice(0, 6)
    : !isBuy && !isNumber && !isStatus
    ? RenderValues
    : isNumber
    ? RenderNumbers
    : isStatus
    ? RenderStatus
    : null;

  const handleChange = (value: string | number | null) => {
    setSelected(value);
    props.form.setFieldValue(name, value); 
  };

  return (
    <>
      {values?.map((item: RenderValueType, index: number) => (
        <Button
          size="small"
          sx={{
            border: '1px solid',
            borderRadius: '15px',
            width: !isNumber ? 200 : 75,
            justifyContent: !isStatus ? 'space-between' : 'none',
          }}
          key={index}
          onClick={() => handleChange(item.value)}
        >
          {isImg ? (
            <img
              src="https://images.homes.com/listings/214/1007620603-872007331-original.jpg"
              width="40px"
              style={{ borderRadius: '20px' }}
            />
          ) : null}
          {isStartIcon ? null : item.label}
          <Field name={name} size="small">
            {(field: FieldInputProps<FilterType>) => (
              <Checkbox
                {...field}
                value={item.value}
                checked={selected === item.value}
                icon={CustomUncheckedIcon}
                checkedIcon={CustomCheckIcon}
              />
            )}
          </Field>
          {isStartIcon ? item.label : null}
        </Button>
      ))}
    </>
  );
};



// ** React Imports
import { forwardRef } from 'react'

// ** MUI Imports
import TextField from '@mui/material/TextField'
import { CustomSliderProps, CustomizedFilterProps, CustomizedSelectProps } from 'src/@core/utils/types';
import { useField } from 'formik';
import { Box, Chip, Select, Slider } from '@mui/material';

interface PickerProps {
  label?: string;
  readOnly?: boolean;
}

export const PickersComponent = forwardRef(({ ...props }: PickerProps, ref) => {
  // ** Props
  const { label, readOnly } = props

  return (
    <TextField
      inputRef={ref}
      {...props}
      label={label || ''}
      {...(readOnly && { inputProps: { readOnly: true } })}
    />
  )
})
export const CustomSlider: React.FC<CustomSliderProps> = (props) => {
  const [field] = useField(props);
  return <Slider {...field} {...props} />;
}
export const CustomizedSelect: React.FC<CustomizedSelectProps>= ({ children, form, field }) => {
  const { name, value } = field
  const _value = value as unknown as string
  const { setFieldValue } = form
  const handleDelete = () => {
    // if (Array.isArray(value)) {
    //   const updatedValue = value.filter((el: string) => el !== deleteValue);
    //   setFieldValue(name, updatedValue);
    // }
    setFieldValue(name, null )
  }

  return (
    <Select
      // multiple
      name={name}
      value={_value}
      onChange={(e) => {
        setFieldValue(name, e.target.value)
      }}
      renderValue={(selected: string) => (
  //       <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
  //        {Array.isArray(selected) &&
  //           selected.map((value: string) => (
  //           <Chip
  //             key={value}
  //             label={value}
  //             onMouseDown={(event) => {
  //               event.stopPropagation();
  //             }}
  //             onDelete={() => handleDelete(value)}
  //           />
  // ))}

  //       </Box>
  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
  <Chip
              //key={selected}
              label={selected}
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              onDelete={() => handleDelete()}
            />
    </Box>
      )}
    >
      {children}
    </Select>
  )
}
export const CustomizedTextField: React.FC<CustomizedFilterProps> = ({ form, field }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
    <TextField
      name={name}
      value={value}
      size="small"
      onChange={(e) => {
        setFieldValue(name, e.target.value);
      }}
    />
  );
}

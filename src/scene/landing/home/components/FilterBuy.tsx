import React from 'react'
import {
  Button,
  Typography,
  Stack,
  Grid,
  Slider,
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Chip,
  TextField,
} from '@mui/material'
import { Formik, Form, Field, useField, FormikProps, FieldInputProps } from 'formik'
// import { TextField } from 'formik-mui'
import * as yup from 'yup'
import { CheckerGroup } from './CheckerGroup'

import { distNames } from 'src/@core/utils/initData'
import { ProductStatusEnum } from 'src/generated'
import { filterApartmentSchema } from 'src/@core/utils/types'

export interface FilterType{
  location: string,
  type: string,
  price: never[],
  size: never[],
  roomNo: number,
  status: ProductStatusEnum,


}
interface CustomSliderProps{
  name: string;
  min?: number;
  max?: number;
  valueLabelDisplay?:string;
  label?: string;
  step?: number;
}

export const CustomSlider: React.FC<CustomSliderProps> = (props) => {
  const [field] = useField(props);
  return <Slider {...field} {...props} />;
};
export interface CustomizedProps {
  form: FormikProps<FilterType>;
  field: FieldInputProps<FilterType>;
}
interface CustomizedSelectProps extends CustomizedProps {
  children: React.ReactNode;
}
const CustomizedSelect: React.FC<CustomizedSelectProps>= ({ children, form, field }) => {
  const { name, value } = field
  const { setFieldValue } = form
  const handleDelete = (deleteValue: string) => {
    if (Array.isArray(value)) {
      const updatedValue = value.filter((el: string) => el !== deleteValue);
      setFieldValue(name, updatedValue);
    }
  }

  return (
    <Select
      multiple
      name={name}
      value={value || []}
      onChange={(e) => {
        setFieldValue(name, e.target.value)
        console.log(e.target.value)
      }}
      renderValue={(selected) => (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
         {Array.isArray(selected) &&
            selected.map((value: string) => (
            <Chip
              key={value}
              label={value}
              onMouseDown={(event) => {
                event.stopPropagation();
              }}
              onDelete={() => handleDelete(value)}
            />
  ))}

        </Box>
      )}
    >
      {children}
    </Select>
  )
}


const CustomizedTextField: React.FC<CustomizedProps> = ({ form, field }) => {
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



export const FilterBuy = () => {
  // const [priceRange, setPriceRange] = React.useState<number[]>([
  //   20000000, 500000000,
  // ])
  return (
    <Formik
      initialValues={{
        location: '',
        type: '',
        price: [],
        size: [],
        roomNo: 0,
        status: ProductStatusEnum.DEFAULT,
      }}
      validationSchema={filterApartmentSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values)
        resetForm()
        // router.push('/product');
      }}
    >
      {(formikProps) => (
        <Form className="formBuy">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Байршил</InputLabel>
            <Field name="location" component={CustomizedSelect}>
              {distNames.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
          <Typography>Төрөл</Typography>
          <Grid container columnGap="10px" rowGap="20px">
            <CheckerGroup
              isBuy={true}
              name="type"
              isImg={true}
              isStartIcon={false}
              isNumber={false}
              isStatus={false}
              form={formikProps}
            />
          </Grid>
          <Typography>Үнэ</Typography>
          <Grid container columnGap="20px">
            <Stack>
              <Typography>Доод үнэ</Typography>
              <CustomSlider
                name="price[0]"
                valueLabelDisplay="auto"
                max={500000000}
                min={20000000}
                step={1000000}
                label="Доод үнэ"
              />
              <Field
                name="price[0]"
                type="number"
                //value={priceRange[0]}
                component={CustomizedTextField}
              />
            </Stack>
            <Stack>
              <Typography>Доод үнэ</Typography>
              <CustomSlider
                name="price[1]"
                valueLabelDisplay="auto"
                max={500000000}
                min={20000000}
                step={1000000}
                label="Дээд үнэ"
              />
              <Field
                name="price[1]"
                type="number"
                //value={priceRange[1]}
                component={CustomizedTextField}
              />
            </Stack>
          </Grid>

          <Typography>Хэмжээ</Typography>
          <Grid container columnGap="10px" rowGap="20px">
            <Field
              component={CustomizedTextField}
              name="size[0]"
              type="number"
              label="Бага"
            />
            <Field
              component={CustomizedTextField}
              name="size[1]"
              type="number"
              label="Их"
            />
          </Grid>
          <Grid container columnGap="10px" rowGap="20px">
            <CheckerGroup
              isBuy={false}
              name="roomNo"
              isImg={false}
              isStartIcon={true}
              isNumber={true}
              isStatus={false}
              form={formikProps}
            />
          </Grid>
          <Grid container columnGap="10px" rowGap="20px">
            <CheckerGroup
              isBuy={false}
              name="status"
              isImg={false}
              isStartIcon={true}
              isNumber={false}
              isStatus={true}
              form={formikProps}
            />
          </Grid>
          <Grid container columnGap="10px">
            <Button
              variant="contained"
              size="large"
              color="primary"
              type="reset"
              onClick={() => {
                formikProps.resetForm({})
              }}
            >
              Цэвэрлэх
            </Button>
            <Button
              type="submit"
              variant="contained"
              size="large"
              color="primary"

              // disabled={formikProps.isSubmitting}
            >
              Шүүх
            </Button>
          </Grid>
        </Form>
      )}
    </Formik>
  )
}

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
import { CheckerGroup } from './CheckerGroup'
import { FilterInputProps } from './Header'

import { distNames } from 'src/@core/utils/initData'
import { ConstructionStatusEnum } from 'src/generated'
// import { filterApartmentSchema } from 'src/@core/utils/types'

export interface FilterType{
  city: string,
  district: string | null,
  //type: string,
  maxPrice: number | null,
  minPrice: number | null,
  maxSqr: number | null,
  minSqr: number | null,
  roomNumber: number | null,
  constStatus: ConstructionStatusEnum | null,
  organizationId: string | null,
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
export interface Props extends FilterInputProps{
  setOpen: (bool : boolean) => void
}


export const FilterBuy = (props: Props) => {
  const { filterValues, handleFilterFill, setOpen } = props
  return (
    <Formik
      initialValues={filterValues}
      //validationSchema={filterApartmentSchema}
      onSubmit={(values: FilterType , { resetForm }) => {
        handleFilterFill(values)
        setOpen(false)
        resetForm()
        // router.push('/product');
      }}
    >
      {(formikProps) => (
        <Form className="formBuy">
          <FormControl>
            <InputLabel id="demo-simple-select-label">Байршил</InputLabel>
            <Field name="district" component={CustomizedSelect}>
              {distNames.map((name) => (
                <MenuItem key={name} value={name}>
                  {name}
                </MenuItem>
              ))}
            </Field>
          </FormControl>
          <Typography>Төрөл</Typography>
          {/* <Grid container columnGap="10px" rowGap="20px">
            <CheckerGroup
              isBuy={true}
              name="type"
              isImg={true}
              isStartIcon={false}
              isNumber={false}
              isStatus={false}
              form={formikProps}
            />
          </Grid> */}
          <Typography>Үнэ</Typography>
          <Grid container columnGap="20px">
            <Stack>
              <Typography>Доод үнэ</Typography>
              <CustomSlider
                name="minPrice"
                valueLabelDisplay="auto"
                max={500000}
                min={0}
                step={10}
                label="Доод үнэ"
              />
              <Field
                name="minPrice"
                type="number"
                //value={priceRange[0]}
                component={CustomizedTextField}
              />
            </Stack>
            <Stack>
              <Typography>Доод үнэ</Typography>
              <CustomSlider
                name="maxPrice"
                valueLabelDisplay="auto"
                max={5000000}
                min={0}
                step={10}
                label="Дээд үнэ"
              />
              <Field
                name="maxPrice"
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
              name="minSize"
              type="number"
              label="Бага"
            />
            <Field
              component={CustomizedTextField}
              name="maxSize"
              type="number"
              label="Их"
            />
          </Grid>
          <Grid container columnGap="10px" rowGap="20px">
            <CheckerGroup
              isBuy={false}
              name="roomNumber"
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
              name="constStatus"
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

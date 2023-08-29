import React from 'react'
import {
  Button,
  Typography,
  Stack,
  Grid,
  FormControl,
  InputLabel,
  MenuItem,
} from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { CheckerGroup } from './CheckerGroup'
import { distNames } from 'src/@core/utils/initData'
// import { filterApartmentSchema } from 'src/@core/utils/types'
import { FilterType, FilterProps } from 'src/@core/utils/types'
import { CustomSlider, CustomizedSelect,CustomizedTextField } from 'src/@core/components/product'

export const FilterBuy = (props: FilterProps) => {
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
                aria-label='slider'
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

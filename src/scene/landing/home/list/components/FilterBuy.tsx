import React from 'react'
import {
  Button,
  FormControlLabel,
  FormLabel,
  FormControl,
  Stack,
  RadioGroup,
  Checkbox,
} from '@mui/material'
import { Formik, Form, Field, FieldArray } from 'formik'
import { TextField } from 'formik-mui'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import LocationSelect from './LocationSelect'
import { styled } from "@mui/material/styles"

const LabeledCheckbox = (name: string) => {
  return (
    <Button>
      <Checkbox />
      {name}
    </Button>
  )
}

const filterApartmentSchema = yup.object().shape({
  //email: yup.string().email().required().label("И-мэйл"),
  //password: yup.string().min(6).required().label("Нууц үг"),
  location: yup.array().of(yup.string()).label('Байршил'),
  type: yup.string().label('Төрөл'),
  price: yup.number().min(1).max(2).label('Үнэ'),
  size: yup.number().min(1).max(1).label('Үнэ'),
  roomNo: yup.number().min(1).max(10).label('Өрөө'),
  bedNo: yup.number().min(0).max(5).label('Унтлагын өрөө'),
  bathNo: yup.number().min(1).max(5).label('Угаалгын өрөө'),
  status: yup.string().label('Статус'),
})
const FilterBuy = () => {
  const router = useRouter()
  return (
    <Formik
      initialValues={{
        location: [],
        type: '',
        price: 0,
        size: 0,
        roomNo: 1,
        bathNo: 1,
        bedNo: 0,
        status: '',
      }}
      validationSchema={filterApartmentSchema}
      onSubmit={(values) => {
        console.log(values)
        router.push('/product')
      }}
    >
      {() => (
        <Form>
          {/* <FieldArray name="location">
            {(fieldArrayProps) => {
              const { values } = Form
              console.log(values)
              return (
                <>
                  {values.location.map((d, index: number) => {
                    return <Field name={d} as component={LocationSelect} />
                  })}
                </>
              )
            }}
          </FieldArray> */}
          <FormControl>
            <FormLabel>Төрөл</FormLabel>
            <RadioGroup>
              <Stack direction="row">
                {' '}
                <Field value="dept" name="type" control={<Checkbox />} label="Орон сууц" />
                <Field
                  value="house"
                  name="type"
                  render={LabeledCheckbox}
                  label="Хувийн сууц"
                />
                <Field
                  value="place"
                  name="type"
                  control={<Checkbox />}
                  label="Газар"
                />
              </Stack>
              <Stack direction="row">
                <Field
                  value="office"
                  name="type"
                  control={<Checkbox />}
                  label="Оффис"
                />
                <Field
                  value="building"
                  name="type"
                  control={<Checkbox />}
                  label="Барилга"
                />
                <Field
                  value="shop"
                  name="type"
                  control={<Checkbox />}
                  label="Дэлгүүр"
                />
              </Stack>
            </RadioGroup>
          </FormControl>
          <Field
            component={TextField}
            name="type"
            type="text"
            label="Төрөл"
            size="small"
          />
          <Field
            component={TextField}
            name="price"
            type="number"
            label="Үнэ"
            size="small"
          />
          <Field
            component={TextField}
            name="size"
            type="number"
            label="Метр квадрат"
            size="small"
          />
          <Field
            component={TextField}
            name="roomNo"
            type="number"
            label="Өрөө"
            size="small"
          />
          <Field
            component={TextField}
            name="bedNo"
            type="number"
            label="Унтлагын өрөө"
            size="small"
          />
          <Field
            component={TextField}
            name="bathNo"
            type="number"
            label="Угаалгын өрөө"
            size="small"
          />
          <Field
            component={TextField}
            name="status"
            type="text"
            label="Статус"
            size="small"
          />
          <Button
            type="submit"
            variant="contained"
            size="large"
            color="primary"
            fullWidth

            // disabled={formikProps.isSubmitting}
          >
            Шүүх
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default FilterBuy

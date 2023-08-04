import { Formik, Form, Field } from 'formik'
import LocationSelect from './LocationSelect'
import * as yup from 'yup'
import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
} from '@mui/material'

const filterApartmentSchema = yup.object().shape({
  location: yup.array().of(yup.string()).label('Байршил'),
  type: yup.string().label('type'),
  price: yup.number().min(1).max(2).label('Үнэ'),
  size: yup.number().min(1).max(1).label('Үнэ'),
  roomNo: yup.number().min(1).max(10).label('Өрөө'),
  bedNo: yup.number().min(0).max(5).label('Унтлагын өрөө'),
  bathNo: yup.number().min(1).max(5).label('Угаалгын өрөө'),
  status: yup.string().label('Статус'),
})
export const FilterBuy = () => {
  return (
    <Formik
      initialValues={{
        location: '',
        type: '',
        price: 0,
        size: 0,
        roomNo: 1,
        bathNo: 1,
        bedNo: 0,
        status: '',
      }}
      //validationSchema={filterApartmentSchema}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      {() => (
        <Form noValidate autoComplete="off">
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel>Байршил</InputLabel>
            <Field
              name={'location'}
              label={'Байршил'}
              type="location"
              component={LocationSelect}
            ></Field>
          </FormControl>
          <Field name={'type'} label={'Төрөл'} component={TextField}></Field>
          <Button type="submit">Шүүх</Button>
        </Form>
      )}
    </Formik>
  )
}

import { Formik, Form, Field } from 'formik'
import LocationSelect from './LocationSelect'
import * as yup from 'yup'
import {
  Button,
  FormControl,
  InputLabel,
  TextField,
  MenuItem,
  Box,
  Stack,
  FormControlLabel,
  Typography,
} from '@mui/material'

const filterApartmentSchema = yup.object().shape({
  location: yup.array().of(yup.string()).label('Байршил'),
  type: yup.string().label('Төрөл'),
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
        location: [],
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
      {(error) => (
        <Form noValidate autoComplete="off">
          <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel>Байршил</InputLabel>
            <Field as="select" name="location" component={LocationSelect} />
            {/* <Field
              name={'location'}
              label={'Байршил'}
              type="location"
              component={LocationSelect}
            /> */}
          </FormControl>
          <Field name="type" label={'Төрөл'} component={TextField} />
          <Field name={'price'} label={'Үнэ'} component={TextField} />
          <Field name={'size'} label={'Метр квадрат'} component={TextField} />
          <Field name={'roomNo'} label={'Өрөө'} component={TextField} />
          <Field
            name={'bathNo'}
            label={'Угаалгын өрөө'}
            component={TextField}
          />
          <Field name={'bedNo'} label={'Унтлагын өрөө'} component={TextField} />
          <Field name={'Status'} label={'Статус'} component={TextField} />
          <Button type="submit" onClick={() => console.log(error)}>
            Шүүх
          </Button>
        </Form>
      )}
    </Formik>
  )
}

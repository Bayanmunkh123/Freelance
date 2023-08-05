// import { Formik, Form, Field } from 'formik'
// import LocationSelect from './LocationSelect'
// import { LoginEmailInput, useLoginEmailMutation } from 'src/generated'
// import { AuthModalType } from 'src/utils/constants'
// import { validationLoginEmailSchema } from 'src/validators/auth/auth.validator'

// import * as yup from 'yup'
// import {
//   Button,
//   FormControl,
//   InputLabel,
//   TextField,
//   MenuItem,
//   Box,
//   Stack,
//   FormControlLabel,
//   Typography,
//   Checkbox,
//   Divider,
// } from '@mui/material'
// import { error } from 'console'

// const filterApartmentSchema = yup.object().shape({
//   location: yup.array().of(yup.string()).label('Байршил'),
//   type: yup.string().label('Төрөл'),
//   price: yup.number().min(1).max(2).label('Үнэ'),
//   size: yup.number().min(1).max(1).label('Үнэ'),
//   roomNo: yup.number().min(1).max(10).label('Өрөө'),
//   bedNo: yup.number().min(0).max(5).label('Унтлагын өрөө'),
//   bathNo: yup.number().min(1).max(5).label('Угаалгын өрөө'),
//   status: yup.string().label('Статус'),
// })
// const FilterBuy = () => {
//   return (
//     <Formik
//       initialValues={{
//         location: [],
//         type: '',
//         price: 0,
//         size: 0,
//         roomNo: 1,
//         bathNo: 1,
//         bedNo: 0,
//         status: '',
//       }}
//       validationSchema={filterApartmentSchema}
//       onSubmit={(values) => {
//         console.log(values)
//       }}
//     >
//       {(error) => (
//         <Form noValidate autoComplete="off">
//           <FormControl sx={{ m: 1, width: 300 }}>
//             <InputLabel>Байршил</InputLabel>
//             <Field as="select" name="location" component={LocationSelect} />
//             {/* <Field
//               name={'location'}
//               label={'Байршил'}
//               type="location"
//               component={LocationSelect}
//             /> */}
//           </FormControl>
//           <Field
//             name="type"
//             label={'Төрөл'}
//             type="text"
//             component={TextField}
//           />
//           <Field
//             name={'price'}
//             label={'Үнэ'}
//             type="number"
//             component={TextField}
//           />
//           <Field
//             name={'size'}
//             label={'Метр квадрат'}
//             type="number"
//             component={TextField}
//           />
//           <Field
//             name={'roomNo'}
//             label={'Өрөө'}
//             type="number"
//             component={TextField}
//           />
//           <Field
//             name={'bathNo'}
//             label={'Угаалгын өрөө'}
//             component={TextField}
//             type="number"
//           />
//           <Field
//             name={'bedNo'}
//             label={'Унтлагын өрөө'}
//             type="number"
//             component={TextField}
//           />
//           <Field
//             name={'Status'}
//             label={'Статус'}
//             type="text"
//             component={TextField}
//           />
//           <Button type="submit" onClick={() => console.log(error)}>
//             Шүүх
//           </Button>
//         </Form>
//       )}
//     </Formik>
//   )
// }
// export default FilterBuy
import React from 'react'
import { Button, Box, Stack } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'
import * as yup from 'yup'

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
      }}
    >
      {() => (
        <Form>
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
            Нэвтрэх
          </Button>
        </Form>
      )}
    </Formik>
  )
}

export default FilterBuy

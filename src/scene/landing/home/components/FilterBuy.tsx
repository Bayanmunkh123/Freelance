
// import React from 'react'
// import { Formik, Field, Form } from 'formik'
// import {
//   Typography,
//   RadioGroup,
//   Button,
//   Checkbox,
//   Stack,
//   Grid,
// } from '@mui/material'
// import CheckCircleIcon from '@mui/icons-material/CheckCircle'
// import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
// import * as yup from 'yup'
// import { TextField, InputAdornment } from '@mui/material'
// import CancelIcon from '@mui/icons-material/Cancel'
// import FormControlLabel from '@mui/material/FormControlLabel'
// import { styled } from '@mui/material'
// import { ST } from 'next/dist/shared/lib/utils'
// import { validate } from 'graphql'
// import { CheckerGroup } from './CheckerGroup'

// // export const FilterBuy = () => (
// //   <Formik
// //     initialValues={{ email: '', password: '' }}
// //     onSubmit={(values) => {
// //       console.log(values)
// //     }}
// //     validationSchema={Yup.object().shape({
// //       email: Yup.string().email().required(),
// //       password: Yup.string().required().min(8),
// //     })}
// //   >
// //     {(props) => {
// //       const { errors, touched, handleChange, handleBlur } = props
// //       return (
// //         <Form>
// //           <Field
// //             variant="outlined"
// //             component={TextField}
// //             onChange={handleChange}
// //             onBlur={handleBlur}
// //             type="checkbox"
// //             id="password"
// //             placeholder="Password"
// //             size="small"
// //             error={errors.password && touched.password && true}
// //             // Mui icons based on Validation
// //             InputProps={{
// //               startAdornment: (
// //                 <InputAdornment position="end" style={{ outline: 'none' }}>
// //                     <CancelIcon
// //                       style={{ color: 'red' }}
// //                       fontSize="default"
// //                     ></CancelIcon>
// //                     <CheckCircleIcon
// //                       style={{ color: '#05cc30' }}
// //                       fontSize="default"
// //                     ></CheckCircleIcon>
// //                 </InputAdornment>
// //               ),
// //             }}
// //           />
// //           <Button type='submit'>s</Button>
// //         </Form>
// //       )
// //     }}
// //   </Formik>
// // )
import React from 'react'
import { Button, Typography, Stack, Grid, Slider, Box } from '@mui/material'
import { Formik, Form, Field, useFormikContext} from 'formik'
import { TextField } from 'formik-mui'
import * as yup from 'yup'
import { CheckerGroup } from './CheckerGroup'
import LocationSelect from './LocationSelect'

const filterApartmentSchema = yup.object().shape({
  location: yup.array().of(yup.string()).label('Байршил'),
  type: yup.string(),
  price: yup.number().label('Үнэ'), // Adjust the min value to 0
  size: yup.number().min(0).label('Метр квадрат'), // Adjust the min value to 0
  roomNo: yup.number().min(1).max(10).label('Өрөө'),
  bedNo: yup.number().min(0).max(5).label('Унтлагын өрөө'),
  bathNo: yup.number().min(1).max(5).label('Угаалгын өрөө'),
  status: yup.string().label('Статус'),
})

export const FilterBuy = () => {
  //const {setFieldValue} = useFormikContext()
   const [priceRange, setPriceRange] = React.useState<number[]>([20000000, 500000000])
  const handleChangeSlider = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[])
  };

  const handleChangeTextField = (index: number, value: number) => {
    const updatedRange = [...priceRange]
    updatedRange[index] = value
    setPriceRange(updatedRange)
    //setFieldValue("price", updatedRange)

  }

  return (
    <Formik
      initialValues={{
        location: [],
        type: '',
        price: [],
        size: [],
        roomNo: [],
        status: '',
      }}
      //validationSchema={filterApartmentSchema}
      onSubmit={(values) => {
        console.log(values)
        // router.push('/product');
      }}
    >
      {(form) => (
        <Form className='formBuy' >
          <LocationSelect />
          <Typography>Төрөл</Typography>
          <Grid container columnGap="10px" rowGap="20px">
            <CheckerGroup isBuy={true} name="type" isImg={true} isStartIcon={false} isNumber={false} isStatus={false}/>
          </Grid>
          <Typography>Үнэ</Typography>

          <Stack direction="row" justifyContent="space-between">
            <Typography >{priceRange[0]}</Typography>
            <Typography>{priceRange[1]}</Typography>
            <Field
              component={TextField}
              name="price[0]"
              type="number"
              label="Доод үнэ"
              size="small"
              value={priceRange[0]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeTextField(0, parseInt(e.target.value, 10))
              }
            />
            <Field
              component={TextField}
              name="price[1]"
              type="number"
              label="Дээд үнэ"
              size="small"
              value={priceRange[1]}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                handleChangeTextField(1, parseInt(e.target.value, 10))
              }
            />
          </Stack>
          <Box sx={{ width: '100%' }}>
            <Slider
              //name="price"
              value={priceRange}
              onChange={handleChangeSlider}
              valueLabelDisplay="auto"
              max={500000000}
              min={20000000}
              step={1000000}
            />
          </Box>
          <Typography>Хэмжээ</Typography>
          <Stack direction="row" justifyContent="space-between" sx={{width: 320, '& .MuiInputBase-input':{width: 100}}}>
            <Field
              component={TextField}
              name="size[0]"
              type="number"
              label="Бага"
              size="small"
            />
            <Field
              component={TextField}
              name="size[1]"
              type="number"
              label="Их"
              size="small"
            />
          </Stack>
          <Grid container columnGap="10px" rowGap="20px">
            <CheckerGroup isBuy={false} name="roomNo" isImg={false} isStartIcon={true} isNumber={true} isStatus={false}/>
          </Grid>
          <Grid container columnGap="10px" rowGap="20px">
            <CheckerGroup isBuy={false} name="status" isImg={false} isStartIcon={true} isNumber={false} isStatus={true}/>
          </Grid>

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

// // import React from 'react'
// // import {
// //   Button,
// //   FormControlLabel,
// //   FormLabel,
// //   FormControl,
// //   FormGroup,
// //   Radio,
// //   RadioGroup,
// //   Checkbox,
// // } from '@mui/material'
// // import { Formik, Form, Field, FieldArray } from 'formik'
// // import { TextField } from 'formik-mui'
// // import * as yup from 'yup'
// // import { useRouter } from 'next/router'
// // import LocationSelect from './LocationSelect'
// // import { styled } from '@mui/material/styles'
// // import { CheckerGroup } from './CheckerGroup'

// // /**Icon imports */
// // import CheckCircleIcon from '@mui/icons-material/CheckCircle'
// // import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

// // const options = [
// //   {
// //     label: 'Орон сууц',
// //     value: 'one',
// //   },
// //   {
// //     label: 'Хувийн сууц',
// //     value: 'two',
// //   },
// //   {
// //     label: 'Газар',
// //     value: 'three',
// //   },
// // ]
// // const LabeledCheckbox = (name: string) => {
// //   return (
// //     <label>
// //       <Checkbox
// //         name="type"
// //         icon={<CheckCircleIcon />}
// //         checkedIcon={<RadioButtonUncheckedIcon />}
// //         sx={{
// //           '& .MuiSvgIcon-root': {
// //             fontSize: 20,
// //             borderRadius: 20,
// //           },
// //         }}
// //       />
// //       {name}
// //     </label>
// //   )
// // }

// // const filterApartmentSchema = yup.object().shape({
// //   //email: yup.string().email().required().label("И-мэйл"),
// //   //password: yup.string().min(6).required().label("Нууц үг"),
// //   location: yup.array().of(yup.string()).label('Байршил'),
// //   type: yup.string().label('Төрөл'),
// //   price: yup.number().min(1).max(2).label('Үнэ'),
// //   size: yup.number().min(1).max(1).label('Үнэ'),
// //   roomNo: yup.number().min(1).max(10).label('Өрөө'),
// //   bedNo: yup.number().min(0).max(5).label('Унтлагын өрөө'),
// //   bathNo: yup.number().min(1).max(5).label('Угаалгын өрөө'),
// //   status: yup.string().label('Статус'),
// // })
// // const FilterBuy = () => {
// //   return (
// //     //try removing initialValues
// //     <Formik
// //       initialValues={{ numbers: [] }}
// //       onSubmit={(values) => {
// //         console.log('values =', values)
// //       }}
// //     >
// //       {() => {
// //         return (
// //           <Form>
// //             <FormControl component="fieldset" sx={{ display: 'flex' }}>
// //               <FormLabel component="legend">Numbers</FormLabel>
// //               <FormGroup>
// //                 {options.map((opt) => (
// //                   <Field
// //                     type="checkbox"
// //                     component={Checkbox}
// //                     name="numbers"
// //                     key={opt.value}
// //                     value={opt.value}
// //                     Label={{ label: opt.label }}
// //                   />
// //                 ))}
// //               </FormGroup>
// //             </FormControl>
// //             <Button type="submit"> Шүүх</Button>
// //           </Form>
// //         )
// //       }}
// //     </Formik>
// //   )
// // }

// // export default FilterBuy
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

// const CustomCheckIcon = <CheckCircleIcon /* Add any custom styles here */ />
// const CustomUncheckedIcon = (
//   <RadioButtonUncheckedIcon /* Add any custom styles here */ />
// )
// const filterApartmentSchema = yup.object().shape({
//   type: yup.array().of(yup.string()).min(0).max(1),
//   price: yup.number().min(1).max(2).label('Үнэ'),})

// export const FilterBuy = () => {
//   return (
//     <Formik
//       initialValues={{
//         type: ' ',
//         price: 0,
//       }}
//       //validationSchema={filterApartmentSchema}
//       onSubmit={(values, field) => {
//         console.log(values)
//       }}
//     >
//       {({ values }) => (
//         <Form>
//           <Typography>Төрөл</Typography>
//           <Grid container columnGap="10px" rowGap="20px">
//             <CheckerGroup isBuy={true} name="type" />
//           </Grid>
//           <Typography>Үнэ</Typography>
//           <Stack direction="row">
//             <Typography>0</Typography>
//             <Typography>5000000000</Typography>
//           </Stack>
//           <Stack direction="row">
//             {/* <Field
//               name="price"
//               type="number"
//               component={TextField}
//               Label="Доод үнэ"
//             ></Field> */}
//             <Field
//               component={TextField}
//               name="price"
//               type="number"
//               label="Доод үнэ"
//               size="small"
//             />

//           {/* <Stack direction="row">
//             <Field
//               component={TextField}
//               name="price"
//               type="number"
//               label="Доод үнэ"
//               size="small"
//             />
//             <Field
//               component={TextField}
//               name="price[1]" // Use the correct name for the upper price field
//               type="number"
//               label="Дээд үнэ"
//               size="small"
//             />
//           </Stack> */}

//             {/* //<Field name="price[1]" type="number" component={TextField} Label="Дээд үнэ" ></Field> */}
//           </Stack>
//           <Button type="submit">Submit</Button>
//         </Form>
//       )}
//     </Formik>
//   )
// }
import React from 'react'
import { Button, Typography, Stack, Grid, Slider, Box } from '@mui/material'
import { Formik, Form, Field, useFormikContext} from 'formik'
import { TextField } from 'formik-mui'
import * as yup from 'yup'
import { CheckerGroup } from './CheckerGroup'
import { set } from 'nprogress'
import { width } from '@mui/system'

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

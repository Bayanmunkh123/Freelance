import * as React from 'react'
import {
  Grid,
  Typography,
  Stack,
  Button,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Box,
} from '@mui/material'
import { Formik, Form, Field, FormikProps } from 'formik'
import { ConstructionStatusEnum, BannerStatusEnum, ProductInput, useProductCreateMutation,ProductRoom } from 'src/generated'
import { RenderValues } from 'src/@core/utils/initData'
import { distNames, mongolianProvinces } from 'src/@core/utils/initData'
import { TextField } from 'formik-mui'
import PickersComponent from './DateInput'
import DatePicker, {ReactDatePickerProps} from 'react-datepicker'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

export interface Props{
  setType: (type :string) => void;
  formikProps: FormikProps<ProductInput>
}

// function Thumb({ file }) {
//   const [loading, setLoading] = React.useState(false);
//   const [thumb, setThumb] = React.useState(undefined);

//   React.useEffect(() => {
//     if (!file) return;

//     setLoading(true);

//     let reader = new FileReader();

//     reader.onloadend = () => {
//       setLoading(false);
//       setThumb(reader?.result);
//     };

//     reader.readAsDataURL(file);
//   }, [file]);

//   if (!file) return null;

//   if (loading) return <p>loading...</p>;

//   return (
//     <img
//       src={thumb}
//       alt={file.name}
//       className="img-thumbnail mt-2"
//       height={200}
//       width={200}
//     />
//   );
// }


export const RegisterBasic = (props :Props) => {
  const {setType,formikProps} = props
  //const popperPlacement: ReactDatePickerProps['popperPlacement'] 
  // const [onCreateProduct] = useProductCreateMutation()
  // const submitHandler = (data: ProductInput) => {
  //   console.log('onSubmit === values', data)

  //   onCreateProduct({
  //     variables: {
  //       input: {
  //         images: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
  //         name: data.name,
  //         city: data.city,
  //         district: data.district,
  //         address1: data.address1,
  //         sqr: data.sqr,
  //         priceSqr: data.priceSqr,
  //         releaseDate: data.releaseDate,
  //         price: 0,
  //         //uliral: number
  //         floors: data.floors,
  //         floorNumber: data.floorNumber,
  //         roomNumber: data.roomNumber,
  //         constStatus: data.constStatus,
  //         bannerStatus: data.bannerStatus,
  //         description: data.description,
  //         organizationId: '879094b3-f68e-4bda-8139-b5ebf599e84b',
  //       },
  //     },
  //   })
  // }

  return (
    <Box display="flex" justifyContent="center"  >
      {/* <Formik
        initialValues={{
          images: '',
          name: '',
          city: '',
          district: '',
          address1: '',
          sqr: 0,
          priceSqr: 0,
          releaseDate: new Date(),
          //uliral: 1,
          floors: 1,
          floorNumber: 1,
          roomNumber: 1,
          constStatus: ConstructionStatusEnum.NEWBUILDING,
          bannerStatus: BannerStatusEnum.HIGHLIGTH,
          description: '',
          price: 0,
          organizationId: '',
          ProductRooms: '',
        }}
        //validationSchema={validationCreateProductSchema}
        onSubmit={(values: ProductInput, formikHelpers) => {
          submitHandler(values)
          formikHelpers.setSubmitting(false)
        }}
      > */}
       
          <Form>
            <Stack
              direction="column"
              rowGap="20px"
              width="1000px"
              sx={{
                '& .MuiGrid-root': {
                  rowGap: '20px',
                  columnGap: '20px'
                },
              }}
            >
            <Typography variant="h6" fontWeight="bold">Үндсэн мэдээлэл</Typography>
             <input
            id="file"
            name="images"
            type="file"
            onChange={(event) => {
              if (event?.currentTarget?.files) {
                formikProps.setFieldValue("images", event.currentTarget.files[0]);
              }
            }}
            className="form-control"
          />
                  {/* <Thumb file={formikProps.values.images} /> */}
                  <Typography fontWeight="bold" >Төслийн Нэр</Typography>
              <FormControl>
                
                <InputLabel id="select-name">Төслийн Нэр</InputLabel>
                <Select
                  value={formikProps.values.name}
                  id="select-name"
                  label="Төслийн нэр"
                  labelId="name-select"
                  onChange={(event) => {
                    formikProps.handleChange('name')(event.target.value)
                  }}
                >
                  {RenderValues?.map((name) => (
                    <MenuItem key={name.value} value={name.value}>
                      {name.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography fontWeight="bold">Аймаг</Typography>
              <FormControl>
                <InputLabel id="select-city">Аймаг эсвэл хотын нэр</InputLabel>
                <Select
                  value={formikProps.values.city}
                  id="select-city"
                  label="Аймаг эсвэл хотын нэр"
                  labelId="city-select"
                  onChange={(event) => {
                    formikProps.handleChange('city')(event.target.value)
                  }}
                >
                  {mongolianProvinces?.map((name) => (
                    <MenuItem key={name.id} value={name.name}>
                      {name.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {formikProps.values.city === "Улаанбаатар" ? 
              <><Typography fontWeight="bold">Дүүрэг</Typography><FormControl>
                  <InputLabel id="select-district">Дүүрэг эсвэл сумын нэр</InputLabel>
                  <Select
                    value={formikProps.values.district}
                    id="select-district"
                    label="Дүүрэг эсвэл сумын нэр"
                    labelId="district-select"
                    onChange={(event) => {
                      formikProps.handleChange('district')(event.target.value)
                    } }
                  >
                    {distNames?.map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl></> : null}
              <Typography fontWeight="bold">Дэлгэрэнгүй байршил</Typography>
              <Field
                component={TextField}
                name="address1"
                type="text"
                label="Байршил"
                size="big"
              />
              <Grid container>
                
                
              </Grid>
              <Grid container mt="-20px">
                <Box sx={{display: "flex", flexDirection: "column" , rowGap: "20px"}}>
                  <Typography fontWeight="bold">Хэмжээ</Typography>
                  <Field
                    component={TextField}
                    name="sqr"
                    type="number"
                    label="Метр квадрат"
                    size="medium"
                  />
                </Box>
                
                <Box sx={{display: "flex", flexDirection: "column" , rowGap: "20px"}}>
                  <Typography fontWeight="bold">Метр квадрат үнэ</Typography>
                  <Field
                    component={TextField}
                    name="priceSqr"
                    type="number"
                    label="Метр квадрат үнэ"
                    size="medium"
                  /></Box>
              </Grid>
              <Typography fontWeight="bold">Ашиглалтанд орох хугацаа</Typography>
              <DatePickerWrapper><DatePicker
                selected={formikProps.values.releaseDate}
                id="basic-input"
                popperPlacement="bottom-start"
                name="releaseDate"
                onChange={(date: Date) =>
                  formikProps.setFieldValue('releaseDate', date)
                }
                customInput={<PickersComponent label="Хугацаа сонгох" />}
              /></DatePickerWrapper>
              
              <Grid container>
               
                
              </Grid>
              <Grid container mt="-20px">
                <Box sx={{display: "flex", flexDirection: "column" , rowGap: "20px"}}>
                   <Typography fontWeight="bold">Нийт давхарын тоо</Typography>
                  <Field
                  component={TextField}
                  name="floors"
                  type="number"
                  label="Давхарын тоо"
                  size="medium"
                />
                </Box>
                <Box sx={{display: "flex", flexDirection: "column" , rowGap: "20px"}}>
                   <Typography fontWeight="bold">Давхарын тоо</Typography>
                   <Field
                  component={TextField}
                  name="floorNumber"
                  type="number"
                  label="Давхарын тоо"
                  size="medium"
                />
                </Box>
                

               
              </Grid>

              <Typography fontWeight="bold">Өрөөний тоо</Typography>
              <Field
                component={TextField}
                name="roomNumber"
                type="number"
                label="Өрөөний тоо"
                size="medium"
              />
              <Grid container>
                <Typography fontWeight="bold">Статус</Typography>
              </Grid>
              <Grid container>
                <FormControl>
                  <InputLabel id="select-status">Барилгын Статус</InputLabel>
                  <Select
                    value={formikProps.values.constStatus}
                    id="select-status"
                    label="Барилгын Статус"
                    labelId="status-select"
                    onChange={(event) => {
                      formikProps.handleChange('constStatus')(
                        event.target.value,
                      )
                    }}
                  >
                    <MenuItem key={'DEFAULT'} value={'DEFAULT'}>
                      Байхгүй
                    </MenuItem>
                    <MenuItem key={'NEWBUILDING'} value={'NEWBUILDING'}>
                      Шинэ
                    </MenuItem>
                    <MenuItem key={'SOON'} value={'SOON'}>
                      Тун удахгүй
                    </MenuItem>
                    <MenuItem key={'OLD'} value={'OLD'}>
                      Хуучин
                    </MenuItem>
                  </Select>
                </FormControl>
                <FormControl>
                  <InputLabel id="select-status">Статус</InputLabel>
                  <Select
                    value={formikProps.values.bannerStatus}
                    id="select-status"
                    label="Статус"
                    labelId="status-select"
                    onChange={(event) => {
                      formikProps.handleChange('bannerStatus')(
                        event.target.value,
                      )
                    }}
                  >
                    <MenuItem key={'DEFAULT'} value={'DEFAULT'}>
                      Байхгүй
                    </MenuItem>
                    <MenuItem key={'NEW'} value={'NEW'}>
                      Шинэ
                    </MenuItem>
                    <MenuItem key={'HIGHLIGTH'} value={'HIGHLIGTH'}>
                      Онцлох
                    </MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Typography fontWeight="bold">Дэлгэрэнгүй мэдээлэл</Typography>
              <Field
                component={TextField}
                name="description"
                type="text"
                label="Дэлгэрэнгүй мэдээлэл"
                size="big"
              />
              
            </Stack>
          </Form>
      {/* </Formik> */}
    </Box>
  )
}
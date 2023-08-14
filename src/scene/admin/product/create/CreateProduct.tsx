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
} from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { ConstructionStatusEnum, ProductStatusEnum } from 'src/generated'
import * as yup from 'yup'
import FileUploaderSingle from './FileUploaderSingle'
import { RenderValues } from '../../../landing/home/components/CheckerGroup'
import { distNames } from '../../../landing/home/components/FilterBuy'
import { TextField } from 'formik-mui'
import PickersComponent from './DateInput'
import DatePicker from 'react-datepicker'
import { useMutation } from '@apollo/client'
import { PRODUCT_CREATE } from '../../../landing/home/utils/mutation'

export interface mongolianProvincesType {
  id: number;
  name: string;
  child: string[];
}

export const mongolianProvinces: mongolianProvincesType[] = [
  {
    id: 1,
    name: 'Улаанбаатар',
    child: distNames,
  },
  {
    id: 2,
    name: 'Архангай',
    child: [],
  },
  {
    id: 3,
    name: 'Баян-Өлгий',
    child: [],
  },
  {
    id: 4,
    name: 'Баянхонгор',
    child: [],
  },
  {
    id: 5,
    name: 'Булган',
    child: [],
  },
  {
    id: 6,
    name: 'Говь-Алтай',
    child: [],
  },
  {
    id: 7,
    name: 'Говьсүмбэр',
    child: [],
  },
  {
    id: 8,
    name: 'Дархан-Уул',
    child: [],
  },
  {
    id: 9,
    name: 'Дорноговь',
    child: [],
  },
  {
    id: 10,
    name: 'Дорнод',
    child: [],
  },
  {
    id: 11,
    name: 'Дундговь',
    child: [],
  },
  {
    id: 12,
    name: 'Завхан',
    child: [],
  },
  {
    id: 13,
    name: 'Орхон',
    child: [],
  },
  {
    id: 14,
    name: 'Өвөрхангай',
    child: [],
  },
  {
    id: 15,
    name: 'Өмнөговь',
    child: [],
  },
  {
    id: 16,
    name: 'Сүхбаатар',
    child: [],
  },
  {
    id: 17,
    name: 'Сэлэнгэ',
    child: [],
  },
  {
    id: 18,
    name: 'Төв',
    child: [],
  },
  {
    id: 19,
    name: 'Увс',
    child: [],
  },
  {
    id: 20,
    name: 'Ховд',
    child: [],
  },
  {
    id: 21,
    name: 'Хөвсгөл',
    child: [],
  },
  {
    id: 22,
    name: 'Хэнтий',
    child: [],
  },
]

export interface ProductCreateInput {
  images: string;
  name: string;
  city: string;
  district: string;
  address1: string;
  sqr: number;
  priceSqr: number;
  releaseDate: Date | number;
  price: number;
  //uliral: number
  floors: number;
  floorNumber: number;
  roomNumber: number;
  constStatus: ConstructionStatusEnum;
  productStatus: ProductStatusEnum;
  description: string;
  organizationId: string;
}
const validationCreateProductSchema = yup.object().shape({
  images: yup.string().required(),
  name: yup.string().required(),
  city: yup.string(),
  district: yup.string(),
  address1: yup.string(),
  sqr: yup.number(),
  priceSqr: yup.number(),
  releaseDate: yup.date(),
  //uliral: yup.number(),
  floors: yup.number(),
  floorNumber: yup.number(),
  roomNumber: yup.number(),
  constStatus: yup.string(),
  productStatus: yup.string(),
  description: yup.string(),
})
const CreateProduct = () => {
  const [onCreateProduct] = useMutation(PRODUCT_CREATE)
  const submitHandler = (data: ProductCreateInput) => {
    console.log('onSubmit === values', data)

    onCreateProduct({
      variables: {
        input: {
          images: '',
          name: data.name,
          city: data.city,
          district: data.district,
          address1: data.address1,
          sqr: data.sqr,
          priceSqr: data.priceSqr,
          releaseDate: data.releaseDate,
          price: data.sqr * data.priceSqr,
          //uliral: number
          floors: data.floors,
          floorNumber: data.floorNumber,
          roomNumber: data.roomNumber,
          constStatus: data.constStatus,
          productStatus: data.productStatus,
          description: data.description,
          organizationId: 'd73e16eb-6bc8-4fae-ab18-e50da7b6bf8b',
        },
      },
    })
  }

  return (
    <>
      <Typography variant="h6" fontWeight="bold">
        Үндсэн мэдээлэл
      </Typography>
      <Formik
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
          constStatus: ConstructionStatusEnum.NEW,
          productStatus: ProductStatusEnum.HIGHLIGTH,
          description: '',
          price: 0,
          organizationId: '',
        }}
        //validationSchema={validationCreateProductSchema}
        onSubmit={(values: ProductCreateInput, formikHelpers) => {
          console.log(values)
          submitHandler(values)
          formikHelpers.setSubmitting(false)
        }}
      >
        {(formikProps) => (
          <Form>
            <Stack
              direction="column"
              rowGap="20px"
              sx={{
                '& .MuiGrid-root': {
                  columnGap: '20px',
                },
              }}
            >
              <FileUploaderSingle formik={formikProps} />
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
              <FormControl>
                <InputLabel id="select-city">Аймаг</InputLabel>
                <Select
                  value={formikProps.values.city}
                  id="select-city"
                  label="Аймгийн нэр"
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
              <FormControl>
                <InputLabel id="select-district">Дүүрэг</InputLabel>
                <Select
                  value={formikProps.values.district}
                  id="select-district"
                  label="Дүүрэг"
                  labelId="district-select"
                  onChange={(event) => {
                    formikProps.handleChange('district')(event.target.value)
                  }}
                >
                  {distNames?.map((name) => (
                    <MenuItem key={name} value={name}>
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Typography>Дэлгэрэнгүй байршил</Typography>
              <Field
                component={TextField}
                name="address1"
                type="text"
                label="Байршил"
                size="big"
              />
              <Grid container>
                <Typography>Хэмжээ</Typography>
                <Typography>Метр квадрат үнэ</Typography>
              </Grid>
              <Grid container>
                <Field
                  component={TextField}
                  name="sqr"
                  type="number"
                  label="Метр квадрат"
                  size="medium"
                />

                <Field
                  component={TextField}
                  name="priceSqr"
                  type="number"
                  label="Метр квадрат үнэ"
                  size="medium"
                />
              </Grid>
              <DatePicker
                selected={formikProps.values.releaseDate}
                id="basic-input"
                popperPlacement="bottom-start"
                name="releaseDate"
                onChange={(date: Date) =>
                  formikProps.setFieldValue('releaseDate', date)
                }
                customInput={<PickersComponent label="Хугацаа сонгох" />}
              />
              <Grid container>
                <Typography>Нийт давхарын тоо</Typography>
                <Typography>Давхарын тоо</Typography>
              </Grid>
              <Grid container>
                <Field
                  component={TextField}
                  name="floors"
                  type="number"
                  label="Давхарын тоо"
                  size="medium"
                />

                <Field
                  component={TextField}
                  name="floorNumber"
                  type="number"
                  label="Давхарын тоо"
                  size="medium"
                />
              </Grid>

              <Typography>Өрөөний тоо</Typography>
              <Field
                component={TextField}
                name="roomNumber"
                type="number"
                label="Өрөөний тоо"
                size="medium"
              />
              <Grid container>
                <Typography>Статус</Typography>
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
                    <MenuItem key={'NEW'} value={'NEW'}>
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
                    value={formikProps.values.productStatus}
                    id="select-status"
                    label="Статус"
                    labelId="status-select"
                    onChange={(event) => {
                      formikProps.handleChange('productStatus')(
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
              <Typography>Дэлгэрэнгүй мэдээлэл</Typography>
              <Field
                component={TextField}
                name="description"
                type="text"
                label="Дэлгэрэнгүй мэдээлэл"
                size="big"
              />
              <Button type="submit">үүсгэх</Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  )
}
export default CreateProduct

import * as React from "react"
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
} from "@mui/material"
import { Formik, Form, Field } from "formik"
import { RenderValues } from "src/@core/utils/initData"
import { TextField } from "formik-mui"
import PickersComponent from "../create/components/DateInput"
import DatePicker from "react-datepicker"
import { distNames } from "src/@core/utils/initData"
import { ProductInput, useProductQuery } from "src/generated"
import { mongolianProvinces } from "src/@core/utils/initData"
import { useProductUpdateMutation } from "src/generated"
import { useRouter } from "next/router"
import Icon from "src/@core/components/icon"
import DatePickerWrapper from "src/@core/styles/libs/react-datepicker"
import formatISO from "date-fns/formatISO"

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

const UpdateProduct = ({ id }: { id: string }) => {

  const { data } = useProductQuery({
      variables: {input: { id } },
  })
  const parsedDate = new Date(data?.product?.releaseDate)
  //console.log(data?.product?.releaseDate)
// Format the date into the desired format

const formattedDate = parsedDate.toLocaleString("en-GB", {
  weekday: 'short', // Short weekday name
  year: 'numeric',
  month: 'short', // Short month name
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric',
  timeZoneName: 'short', // Short time zone name
})

console.log(formattedDate);

  const initialValues = {
    id: data?.product?.id,
    name: data?.product?.name,
    constStatus: data?.product?.constStatus,
    bannerStatus: data?.product?.bannerStatus,
    description: data?.product?.description,
    address1: data?.product?.address1,
    roomNumber: data?.product?.roomNumber,
    // bedNo: number;
    // bathNo: number;
    sqr: data?.product?.sqr,
    price: data?.product?.price,
    //isFav: data?.product?
    images: data?.product?.images,
    //parking: number;
    releaseDate: data?.product?.releaseDate,
    floors: data?.product?.floors,
    floorNumber: data?.product?.floorNumber,
    //highlights:
    city: data?.product?.city,
    district: data?.product?.district,
    organizationId: data?.product?.organizationId,
    priceSqr: data?.product?.priceSqr,
  } as ProductInput
  console.log("should get value", initialValues?.releaseDate)
  const [onUpdateProduct] = useProductUpdateMutation()
  const submitHandler = (_values: ProductInput) => {
    console.log("onSubmit === values", _values.releaseDate)
    onUpdateProduct({
      variables: {
        id: id,
        input: {
          images: "",
          name: _values.name,
          city: _values.city,
          district: _values.district,
          address1: _values.address1,
          sqr: _values.sqr,
          priceSqr: _values.priceSqr,
          releaseDate: _values.releaseDate,
          price: 0,
          floors: _values.floors,
          floorNumber: _values.floorNumber,
          roomNumber: _values.roomNumber,
          constStatus: _values.constStatus,
          bannerStatus: _values.bannerStatus,
          description: _values.description,
          organizationId: "879094b3-f68e-4bda-8139-b5ebf599e84b",
        },
      },
    })
  }
const router = useRouter()
  return (
    <Box display="flex" justifyContent="center" >
      <Formik
        initialValues={initialValues}
        onSubmit={(values: ProductInput, formikHelpers) => {
          submitHandler(values)
          formikHelpers.setSubmitting(false)
        }}
      >
        {(formikProps) => (
          <Form>
            <Stack
              direction="column"
              rowGap="20px"
              width="1000px"
              sx={{
                "& .MuiGrid-root": {
                  columnGap: "20px",
                  rowGap: "20px"
                },
              }}
            >
              <Button variant="outlined" onClick={()=> router.back()} startIcon={<Icon icon={"mdi:arrow-left"} />} sx={{alignSelf: "flex-start"}}>Буцах</Button>
              <Typography variant="h6" fontWeight="bold">
        Үндсэн мэдээлэл засах
      </Typography>
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

                  {/* //<Thumb file={formikProps.values.images} /> */}
              
              {/* <input
          type='file'
          name='images'
          //accept='image/*'
          onChange={formikProps.handleChange}
        /> */}
              <FormControl>
                <InputLabel id="select-name">Төслийн Нэр</InputLabel>
                <Select
                  value={formikProps.values.name}
                  id="select-name"
                  label="Төслийн нэр"
                  labelId="name-select"
                  onChange={(event) => {
                    formikProps.handleChange("name")(event.target.value)
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
                    formikProps.handleChange("city")(event.target.value)
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
                    formikProps.handleChange("district")(event.target.value)
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
              <DatePickerWrapper><DatePicker
                selected={formikProps.values.releaseDate ? new Date(formikProps.values.releaseDate) : null}
                id="basic-input"
                popperPlacement="bottom-start"
                name="releaseDate"
                onChange={(date: Date) =>
                  formikProps.setFieldValue('releaseDate', date)
                }
                customInput={<PickersComponent label="Хугацаа сонгох" />}
              /></DatePickerWrapper>
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
                      formikProps.handleChange("constStatus")(
                        event.target.value,
                      )
                    }}
                  >
                    <MenuItem key={"DEFAULT"} value={"DEFAULT"}>
                      Байхгүй
                    </MenuItem>
                    <MenuItem key={"NEW"} value={"NEWBUILDING"}>
                      Шинэ
                    </MenuItem>
                    <MenuItem key={"SOON"} value={"SOON"}>
                      Тун удахгүй
                    </MenuItem>
                    <MenuItem key={"OLD"} value={"OLD"}>
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
                      formikProps.handleChange("bannerStatus")(
                        event.target.value,
                      )
                    }}
                  >
                    <MenuItem key={"DEFAULT"} value={"DEFAULT"}>
                      Байхгүй
                    </MenuItem>
                    <MenuItem key={"NEW"} value={"NEW"}>
                      Шинэ
                    </MenuItem>
                    <MenuItem key={"HIGHLIGTH"} value={"HIGHLIGTH"}>
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
              <Button type="submit" variant="contained" sx={{alignSelf: "flex-end"}}>Хадгалах</Button>
            </Stack>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
export default UpdateProduct
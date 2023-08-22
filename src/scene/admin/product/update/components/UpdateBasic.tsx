
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
import { Form, Field } from 'formik'
import { RenderValues } from 'src/@core/utils/initData'
import { distNames, mongolianProvinces } from 'src/@core/utils/initData'
import { TextField } from 'formik-mui'
import { PickersComponent } from 'src/@core/components/product'
import DatePicker from 'react-datepicker'
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'
import { useRouter } from 'next/router'
import { ProductActionProps } from 'src/@core/utils/types'

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


export const UpdateBasic = (props :ProductActionProps) => {
  const router = useRouter()
  const {setType,formikProps} = props
  return (
    <Box >
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
              <Stack direction="row" columnGap="20px" justifyContent="flex-end">
                  <Button type="submit" variant="contained" sx={{alignSelf: "flex-end"}}>Хадгалах</Button>
                    <Button
                      variant="contained"
                      sx={{ alignSelf: "flex-end" }}
                      onClick={() => setType("room")}
                    >
                      Өрөөний мэдээлэл засах
                    </Button>
                </Stack>     
              
            </Stack>
          </Form>
      {/* </Formik> */}
    </Box>
  )
}
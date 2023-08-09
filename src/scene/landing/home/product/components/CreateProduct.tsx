import { Grid, Typography, Stack, Button, Select, FormControl, InputLabel, MenuItem } from '@mui/material'
import { Formik, Form, Field } from 'formik'
import { ConstructionStatusEnum } from 'src/generated'
import * as yup from 'yup'
import FileUploaderSingle from './FileUploaderSingle'
import { RenderValues } from '../../components/CheckerGroup'
interface ProductCreateInput{
    image: string
    name: string
    city: string
    district: string
    address1: string
    sqr: number
    sqrPrice: number
    releaseDate: Date | number
    uliral: number
    floors: number
    floorNumber: number
    roomNumber: number
    constStatus: ConstructionStatusEnum
    status: string
    description: string
}
const validationCreateProductSchema = yup.object().shape({
    firstName: yup.string().min(3).required().label("Нэр"),
    lastName: yup.string().min(3).required().label("Овог"),
    email: yup.string().email().required().label("И-мэйл"),
    orgRole: yup.string().required().label("Role"),
    organization: yup.string().required().label("Байгуулга"),
    image: yup.string(),
    name: yup.string().required(),
    city: yup.string(),
    district: yup.string(),
    address1: yup.string(),
    sqr: yup.number(),
    sqrPrice: yup.number(),
    releaseDate: yup.number(),
    uliral: yup.number(),
    floors: yup.number(),
    floorNumber: yup.number(),
    roomNumber: yup.number(),
    constStatus: yup.string(),
    status: yup.string(),
    description: yup.string(),
  })
const CreateProduct = () =>{
    return (
        <Grid container>
            <Typography variant="h6" fontWeight="bold">Үндсэн мэдээлэл</Typography>
            <Formik
          initialValues={{
            image: "",
            name: "",
            city: "",
            district: "",
            address1: "",
            sqr: 0,
            sqrPrice: 0,
            releaseDate: 0,
            uliral: 1,
            floors: 1,
            floorNumber: 1,
            roomNumber: 1,
            constStatus: ConstructionStatusEnum.NEW,
            status: "",
            description: "",
          }}
          validationSchema={validationCreateProductSchema}
          onSubmit={(values: ProductCreateInput, formikHelpers) => {
            console.log(values)
            //submitHandler(values)
            formikHelpers.setSubmitting(false)
          }}
        >
          {(formikProps) => (
            <Form>
                <FileUploaderSingle />
                <FormControl fullWidth>
                  <InputLabel id="select-name">Төслийн Нэр</InputLabel>
                  <Select
                    value={formikProps.values.name}
                    id="select-name"
                    label="Төслийн нэр"
                    labelId="name-select"
                    onChange={(event) => {
                      formikProps.handleChange("name")(
                        event.target.value,
                      )
                    }}

                  >
                    {RenderValues?.map((name) => (
                      <MenuItem key={name.value} value={name.value}>
                        {name.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="select-name">Төслийн Нэр</InputLabel>
                  <Select
                    value={formikProps.values.name}
                    id="select-name"
                    label="Төслийн нэр"
                    labelId="name-select"
                    onChange={(event) => {
                      formikProps.handleChange("name")(
                        event.target.value,
                      )
                    }}

                  >
                    {RenderValues?.map((name) => (
                      <MenuItem key={name.value} value={name.value}>
                        {name.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel id="select-name">Төслийн Нэр</InputLabel>
                  <Select
                    value={formikProps.values.name}
                    id="select-name"
                    label="Төслийн нэр"
                    labelId="name-select"
                    onChange={(event) => {
                      formikProps.handleChange("name")(
                        event.target.value,
                      )
                    }}

                  >
                    {RenderValues?.map((name) => (
                      <MenuItem key={name.value} value={name.value}>
                        {name.label}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

              {/* <Stack spacing={6}>
                <Field
                  component={TextField}
                  name="firstName"
                  type="text"
                  label="Нэр"
                  size="big"
                />
                <Field
                  component={TextField}
                  name="lastName"
                  type="text"
                  label="Овог"
                  size="big"
                />
                <Field
                  component={TextField}
                  name="email"
                  type="text"
                  label="И-мейл"
                  size="big"
                />
                <FormControl fullWidth>
                  <InputLabel id="org-select">Байгуулга сонгох</InputLabel>
                  <Select
                    value={formikProps.values.organization}
                    id="select-org"
                    label="Байгуулга сонгох"
                    labelId="org-select"
                    onChange={(event) => {
                      formikProps.handleChange("organization")(
                        event.target.value,
                      )
                    }}

                    // inputProps={{ placeholder: 'Байгуулга сонгох' }}
                  >
                    {OrgList?.organizations?.data?.map((org) => (
                      <MenuItem key={org.id} value={org.id}>
                        {org.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 6 }}>
                  <InputLabel id="role-select">Role сонгох</InputLabel>
                  <Select
                    fullWidth
                    value={formikProps.values.orgRole}
                    id="select-role"
                    label="Role сонгох"
                    labelId="role-select"
                    onChange={(event) => {
                      formikProps.handleChange("orgRole")(event.target.value)
                    }}
                    inputProps={{ placeholder: "Role сонгох" }}
                  >
                    {OrgRoles.map((role) => (
                      <MenuItem key={role.id} value={role.name}>
                        {role.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  sx={{ mr: 3 }}
                >
                  Нэмэх
                </Button>
              </Stack> */}
            </Form>
          )}
        </Formik>

        </Grid>

    )
}
export default CreateProduct
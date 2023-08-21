import { Field, Form } from "formik";
import { Props } from "./RegisterBasic"
import { Box, FormControl, Grid, InputLabel, Stack,  Typography } from "@mui/material";
import { TextField } from "formik-mui";
// bathNumber: 1,
//           bathRoom:'',
//           bedNumber: 1,
//           bedRoom: '',
//           kitchenNumber: 1,
//           kitchenRoom: '',
//           livingNumber: 1,
//           livingRoom: '',
//           viewWindow: '',
export const RegisterRoom = (props: Props) =>{
    const {formikProps} = props
    return (
      <Box display="flex" justifyContent="center"  >
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
                <Typography variant="h6" fontWeight="bold">Нэмэлт мэдээлэл- Өрөө</Typography>
                <Typography fontWeight="bold">Угаалгын өрөө</Typography>
                <Grid container>
                    <input
                            id="file"
                            name="bathRoom"
                            type="file"
                            onChange={(event) => {
                            if (event?.currentTarget?.files) {
                                formikProps.setFieldValue("bathRoom", event.currentTarget.files[0]);
                            }
                            }}
                            className="form-control"
                        />
                        <Field
                            component={TextField}
                            name="bathNumber"
                            type="number"
                            label="Угаалгын өрөөны тоо"
                            size="big"
                        />
                </Grid>
                <Typography fontWeight="bold">Унтлагын өрөө</Typography>
                <Grid container>
                    <input
                            id="file"
                            name="bathRoom"
                            type="file"
                            onChange={(event) => {
                            if (event?.currentTarget?.files) {
                                formikProps.setFieldValue("bathRoom", event.currentTarget.files[0]);
                            }
                            }}
                            className="form-control"
                        />
                        <Field
                            component={TextField}
                            name="bathNumber"
                            type="number"
                            label="Угаалгын өрөөны тоо"
                            size="big"
                        />
                </Grid>
                <Typography fontWeight="bold">Гал тогооны өрөө</Typography>
                <Grid container>
                    <input
                            id="file"
                            name="bathRoom"
                            type="file"
                            onChange={(event) => {
                            if (event?.currentTarget?.files) {
                                formikProps.setFieldValue("bathRoom", event.currentTarget.files[0]);
                            }
                            }}
                            className="form-control"
                        />
                        <Field
                            component={TextField}
                            name="bathNumber"
                            type="number"
                            label="Угаалгын өрөөны тоо"
                            size="big"
                        />
                </Grid>
                <Typography fontWeight="bold">Угаалгын өрөө</Typography>
                <Grid container>
                    <input
                            id="file"
                            name="bathRoom"
                            type="file"
                            onChange={(event) => {
                            if (event?.currentTarget?.files) {
                                formikProps.setFieldValue("bathRoom", event.currentTarget.files[0]);
                            }
                            }}
                            className="form-control"
                        />
                        <Field
                            component={TextField}
                            name="bathNumber"
                            type="number"
                            label="Угаалгын өрөөны тоо"
                            size="big"
                        />
                </Grid>
                <input
                            id="file"
                            name="bathRoom"
                            type="file"
                            onChange={(event) => {
                            if (event?.currentTarget?.files) {
                                formikProps.setFieldValue("bathRoom", event.currentTarget.files[0]);
                            }
                            }}
                            className="form-control"
                        />
              
            </Stack>
        </Form>
    </Box>  
    )
}
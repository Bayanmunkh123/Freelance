import { Field, Form } from "formik";
import { ProductActionProps } from "src/@core/utils/types";
import { Box,  Button,  Grid,  Stack,  Typography } from "@mui/material";
import { TextField } from "formik-mui";

export const RegisterRoom = (props: ProductActionProps) =>{
    const {setType, formikProps} = props
    return (
      <Box >
        <Form>
            <Stack
              direction="column"
              rowGap="20px"
              width="1000px"
              sx={{
                '& .MuiGrid-root': {
                  rowGap: '20px',
                  columnGap: '20px',
                  alignItems: 'center',
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
                            name="bedRoom"
                            type="file"
                            onChange={(event) => {
                            if (event?.currentTarget?.files) {
                                formikProps.setFieldValue("bedRoom", event.currentTarget.files[0]);
                            }
                            }}
                            className="form-control"
                        />
                        <Field
                            component={TextField}
                            name="bedNumber"
                            type="number"
                            label="Унтлагын өрөөны тоо"
                            size="big"
                        />
                </Grid>
                <Typography fontWeight="bold">Гал тогооны өрөө</Typography>
                <Grid container>
                    <input
                            id="file"
                            name="kitchenRoom"
                            type="file"
                            onChange={(event) => {
                            if (event?.currentTarget?.files) {
                                formikProps.setFieldValue("kitchenRoom", event.currentTarget.files[0]);
                            }
                            }}
                            className="form-control"
                        />
                        <Field
                            component={TextField}
                            name="kitchenNumber"
                            type="number"
                            label="Гал тогооны өрөөны тоо"
                            size="big"
                        />
                </Grid>
                <Typography fontWeight="bold">Зочны өрөө</Typography>
                <Grid container>
                    <input
                            id="file"
                            name="livingRoom"
                            type="file"
                            onChange={(event) => {
                            if (event?.currentTarget?.files) {
                                formikProps.setFieldValue("livingRoom", event.currentTarget.files[0]);
                            }
                            }}
                            className="form-control"
                        />
                        <Field
                            component={TextField}
                            name="livingNumber"
                            type="number"
                            label="Зочны өрөөны тоо"
                            size="big"
                        />
                </Grid>
                <Typography fontWeight="bold">Цонхны харагдах байдал</Typography>
                <input
                            id="file"
                            name="viewWindow"
                            type="file"
                            onChange={(event) => {
                            if (event?.currentTarget?.files) {
                                formikProps.setFieldValue("viewWindow", event.currentTarget.files[0]);
                            }
                            }}
                            className="form-control"
                        />
                 <Stack direction="row" columnGap="20px" justifyContent="flex-end">
                    <Button
                      variant="contained"
                      sx={{ alignSelf: "flex-end" }}
                      onClick={() => setType("basic")}
                    >
                      Буцах
                    </Button>
                  <Button
                    type="submit" 
                    variant="contained"
                    sx={{ alignSelf: "flex-end" }}
                  >
                    Үүсгэх
                  </Button>
                </Stack>
              
            </Stack>
        </Form>
    </Box>  
    )
}
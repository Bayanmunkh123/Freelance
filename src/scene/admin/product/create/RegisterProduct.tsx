import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Button, Stack, Tab } from "@mui/material"
import { Fragment, useState } from "react"
import Icon from "src/@core/components/icon"
import { RegisterBasic } from "./components/RegisterBasic"
import { Formik } from "formik"
import { BannerStatusEnum, ConstructionStatusEnum, ProductInput, useProductCreateMutation } from "src/generated"

export const RegisterProduct = () =>{
    const [onCreateProduct] = useProductCreateMutation()
  const submitHandler = (data: ProductInput) => {
    console.log('onSubmit === values', data)

    onCreateProduct({
      variables: {
        input: {
          images: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
          name: data.name,
          city: data.city,
          district: data.district,
          address1: data.address1,
          sqr: data.sqr,
          priceSqr: data.priceSqr,
          releaseDate: data.releaseDate,
          price: 0,
          //uliral: number
          floors: data.floors,
          floorNumber: data.floorNumber,
          roomNumber: data.roomNumber,
          constStatus: data.constStatus,
          bannerStatus: data.bannerStatus,
          description: data.description,
          organizationId: '879094b3-f68e-4bda-8139-b5ebf599e84b',
        },
      },
    })
  }
    const [type, setType] = useState("basic")
    return (
        <Fragment>
          <TabContext value={type}>
            <Box sx={{ mb: "24px" }}>
              <TabList
                onChange={(_event, _type) => {
                  console.log(_type)
                  setType(_type)
                }}
                aria-label="lab API tabs example"
              >
                <Tab
                  label="Үндсэн бүртгэл"
                  value="basic"
                  iconPosition="start"
                  icon={
                    <Icon
                      icon="mdi:information-outline"
                      style={{ marginRight: "4px" }}
                    />
                  }
                />
                <Tab
                  label="Өрөөний мэдээлэл"
                  value="room"
                  iconPosition="start"
                  icon={
                    <Icon icon="cil:room" style={{ marginRight: "4px" }} />
                  }
                />
              </TabList>
            </Box>
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
          constStatus: ConstructionStatusEnum.NEWBUILDING,
          bannerStatus: BannerStatusEnum.HIGHLIGTH,
          description: '',
          price: 0,
          organizationId: '',
          bathNumber: 1,
          bathRoom:'',
          bedNumber: 1,
          bedRoom: '',
          kitchenNumber: 1,
          kitchenRoom: '',
          livingNumber: 1,
          livingRoom: '',
          viewWindow: '',
        }}
        //validationSchema={validationCreateProductSchema}
        onSubmit={(values: ProductInput, formikHelpers) => {
          submitHandler(values)
          formikHelpers.setSubmitting(false)
        }}
      >{(formikProps) => (
        <>
        <TabPanel value="basic">
            <RegisterBasic setType={setType} formikProps={formikProps}/>
          </TabPanel>
          <TabPanel value="room">
            
          </TabPanel>
          <Stack direction="row" columnGap="20px" justifyContent="flex-end">
              <Button type="submit" variant='contained' sx={{alignSelf: 'flex-end'}}>Үүсгэх</Button>
              {type === "room" ?  null : <Button  variant='contained' sx={{alignSelf: 'flex-end'}} onClick={()=> setType("room")}>Өрөөний мэдээлэл оруулах</Button> }
              
          </Stack>
          </>
          )}
      </Formik>
          
        </TabContext>

        </Fragment>
    )
}
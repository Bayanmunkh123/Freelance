import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Button, Stack, Tab } from "@mui/material"
import { Fragment, useState } from "react"
import Icon from "src/@core/components/icon"
import { RegisterBasic } from "./components/CreateBasic"
import { Formik } from "formik"
import { BannerStatusEnum, ConstructionStatusEnum, ProductInput, useProductCreateMutation } from "src/generated"
import { RegisterRoom } from "./components/CreateRoom"

export const CreateProduct = () =>{
    const [onCreateProduct] = useProductCreateMutation()
  const submitHandler = (data: ProductInput) => {
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
          floors: data.floors,
          floorNumber: data.floorNumber,
          roomNumber: data.roomNumber,
          constStatus: data.constStatus,
          bannerStatus: data.bannerStatus,
          description: data.description,
          organizationId: '879094b3-f68e-4bda-8139-b5ebf599e84b',
          bathNumber: data.bathNumber,
          bathRoom:'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
          bedNumber: data.bedNumber,
          bedRoom: 'https://media.architecturaldigest.com/photos/5eac81ca18c600bbd587e15f/master/w_1600%2Cc_limit/Nune_4th_Street_01.jpg',
          kitchenNumber: data.kitchenNumber,
          kitchenRoom: 'https://hips.hearstapps.com/hmg-prod/images/hbx100120birgittepearce-006-copy-1600802952.jpg?crop=0.4444444444444444xw:1xh;center,top&resize=640:*',
          livingNumber: data.livingNumber,
          livingRoom: 'https://hips.hearstapps.com/hmg-prod/images/hbx100120birgittepearce-006-copy-1600802952.jpg?crop=0.4444444444444444xw:1xh;center,top&resize=640:*',
          viewWindow: 'https://hips.hearstapps.com/hmg-prod/images/hbx100120birgittepearce-006-copy-1600802952.jpg?crop=0.4444444444444444xw:1xh;center,top&resize=640:*',
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
    <><TabPanel value="basic">
                <RegisterBasic setType={setType} formikProps={formikProps} />
              </TabPanel><TabPanel value="room">
                  <RegisterRoom setType={setType} formikProps={formikProps} />
                </TabPanel>
               </>
  )}
      </Formik>
          
        </TabContext>

        </Fragment>
    )
}



import { TabContext, TabList, TabPanel } from "@mui/lab"
import { Box, Tab } from "@mui/material"
import { Fragment, useState } from "react"
import Icon from "src/@core/components/icon"
import { FormBasic } from "./FormBasic"
import { Formik } from "formik"
import { ProductInput, useProductCreateMutation, useProductUpdateMutation } from "src/generated"
import { FormRoom } from "./FormRoom"
import { useRouter } from "next/router"

interface ProductFormType{
    actionType: string, 
    initialValues: ProductInput, 
    id: string | null
}

export const FormInitial = (props: ProductFormType) =>{
    const {actionType, initialValues, id} = props
    const router = useRouter()
    const [onCreateProduct] = useProductCreateMutation({
        onCompleted: () => {
            alert("Амжиллтай хадгаллаа")
            router.push("/admin/product/register")
        },
        onError: (error) => {
            console.log(error)
            
        }
    })
    const [onUpdateProduct] = useProductUpdateMutation({
        onCompleted: () => {
            alert("Амжиллтай хадгаллаа")
            router.push("/admin/product")
        },
        onError: (error) => {
            console.log(error)
        }
    })
    const handleCreate = (_value: ProductInput) => {
        onCreateProduct({
        variables: {
            input: {
            images: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?auto=compress&cs=tinysrgb&w=800",
            name: _value.name,
            city: _value.city,
            district: _value.district,
            address1: _value.address1,
            sqr: _value.sqr,
            priceSqr: _value.priceSqr,
            releaseDate: _value.releaseDate,
            price: 0,
            floors: _value.floors,
            floorNumber: _value.floorNumber,
            roomNumber: _value.roomNumber,
            constStatus: _value.constStatus,
            bannerStatus: _value.bannerStatus,
            description: _value.description,
            organizationId: '879094b3-f68e-4bda-8139-b5ebf599e84b',
            bathNumber: _value.bathNumber,
            bathRoom:'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            bedNumber: _value.bedNumber,
            bedRoom: 'https://media.architecturaldigest.com/photos/5eac81ca18c600bbd587e15f/master/w_1600%2Cc_limit/Nune_4th_Street_01.jpg',
            kitchenNumber: _value.kitchenNumber,
            kitchenRoom: 'https://hips.hearstapps.com/hmg-prod/images/hbx100120birgittepearce-006-copy-1600802952.jpg?crop=0.4444444444444444xw:1xh;center,top&resize=640:*',
            livingNumber: _value.livingNumber,
            livingRoom: 'https://hips.hearstapps.com/hmg-prod/images/hbx100120birgittepearce-006-copy-1600802952.jpg?crop=0.4444444444444444xw:1xh;center,top&resize=640:*',
            viewWindow: 'https://hips.hearstapps.com/hmg-prod/images/hbx100120birgittepearce-006-copy-1600802952.jpg?crop=0.4444444444444444xw:1xh;center,top&resize=640:*',
            },
        },
        })
    }
    const handleUpdate = (_values: ProductInput) => {
        console.log(_values)
        onUpdateProduct({
        variables: {
            id: id ? id : "",
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
            bathNumber: _values.bathNumber,
            bathRoom:'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmF0aHJvb218ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60',
            bedNumber: _values.bedNumber,
            bedRoom: 'https://media.architecturaldigest.com/photos/5eac81ca18c600bbd587e15f/master/w_1600%2Cc_limit/Nune_4th_Street_01.jpg',
            kitchenNumber: _values.kitchenNumber,
            kitchenRoom: 'https://hips.hearstapps.com/hmg-prod/images/hbx100120birgittepearce-006-copy-1600802952.jpg?crop=0.4444444444444444xw:1xh;center,top&resize=640:*',
            livingNumber: _values.livingNumber,
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
        initialValues={initialValues}
        //validationSchema={validationCreateProductSchema}
        onSubmit={(values: ProductInput, formikHelpers) => {
            //console.log(actionType, initialValues, id)
            actionType === "create" ? handleCreate(values) : handleUpdate(values)
          formikHelpers.setSubmitting(false)
        }}
      >{(formikProps) => (
        <>
          <TabPanel value="basic">
            <FormBasic actionType={actionType} setType={setType} formikProps={formikProps} />
          </TabPanel>
          <TabPanel value="room">
            <FormRoom actionType={actionType} setType={setType} formikProps={formikProps} />
          </TabPanel>
        </>
  )}
      </Formik>
          
        </TabContext>

        </Fragment>
    )
}



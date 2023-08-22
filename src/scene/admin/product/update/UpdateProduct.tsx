import { Fragment, useState} from "react"
import {
  Button,
  Box,
  Tab,
} from "@mui/material"
import { Formik, Form, Field } from "formik"
import Icon from "src/@core/components/icon"
import { TabContext, TabList, TabPanel } from "@mui/lab"
import { UpdateBasic } from "./components/UpdateBasic"
import { UpdateRoom } from "./components/UpdateRoom"
import { ProductInput, useProductQuery, useProductUpdateMutation } from "src/generated"
import { useRouter } from "next/router"


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
  const [type, setType] = useState("basic")
  const { data } = useProductQuery({
      variables: {input: { id } },
  })

  const initialValues = {
    id: data?.product?.id,
    name: data?.product?.name,
    constStatus: data?.product?.constStatus,
    bannerStatus: data?.product?.bannerStatus,
    description: data?.product?.description,
    address1: data?.product?.address1,
    roomNumber: data?.product?.roomNumber,
    sqr: data?.product?.sqr,
    price: data?.product?.price,
    images: data?.product?.images,
    releaseDate: data?.product?.releaseDate,
    floors: data?.product?.floors,
    floorNumber: data?.product?.floorNumber,
    city: data?.product?.city,
    district: data?.product?.district,
    organizationId: data?.product?.organizationId,
    priceSqr: data?.product?.priceSqr,
    bathNumber: data?.product?.ProductRooms?.bathNumber,
    bathRoom: data?.product?.ProductRooms?.bathRoom,
    bedNumber: data?.product?.ProductRooms?.bedNumber,
    bedRoom: data?.product?.ProductRooms?.bedRoom,
    kitchenNumber: data?.product?.ProductRooms?.kitchenNumber,
    kitchenRoom: data?.product?.ProductRooms?.kitchenRoom,
    livingNumber: data?.product?.ProductRooms?.livingNumber,
    livingRoom: data?.product?.ProductRooms?.livingRoom,
    viewWindow: data?.product?.ProductRooms?.viewWindow,
    
  } as ProductInput
  const [onUpdateProduct] = useProductUpdateMutation()
  const submitHandler = (_values: ProductInput) => {
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
const router = useRouter()
  return (
    <Fragment>
       <Button variant="outlined" onClick={()=> router.back()} startIcon={<Icon icon={"mdi:arrow-left"} />} sx={{alignSelf: "flex-start"}}>Буцах</Button>
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
        onSubmit={(values: ProductInput, formikHelpers) => {
          submitHandler(values)
          formikHelpers.setSubmitting(false)
        }}
      >
        {(formikProps) => (
           <>
            <TabPanel value="basic">
                <UpdateBasic setType={setType} formikProps={formikProps} />
              </TabPanel><TabPanel value="room">
                  <UpdateRoom setType={setType} formikProps={formikProps} />
                </TabPanel>
               </>
  )}
        
      </Formik>
    </TabContext>
    </Fragment>
  )
}
export default UpdateProduct

import { Formik, Form, Field } from 'formik'
import * as yup from 'yup'

const filterApartmentSchema = yup.object().shape({
  location: yup.array().of(yup.string()).label('Байршил'),
  type: yup.string().label('type'),
  price: yup.number().min(1).max(2).label('Үнэ'),
  size: yup.number().min(1).max(1).label('Үнэ'),
  roomNo: yup.number().min(1).max(10).label('Өрөө'),
  bedNo: yup.number().min(0).max(5).label('Унтлагын өрөө'),
  bathNo: yup.number().min(1).max(5).label('Угаалгын өрөө'),
  status: yup.string().label('Статус'),
})
export const FilterRent = () => {
  return (
    <Formik
      initialValues={{
        location: '',
        type: '',
        price: 0,
        size: 0,
        roomNo: 1,
        bathNo: 1,
        bedNo: 0,
        status: '',
      }}
      validationSchema={filterApartmentSchema}
      onSubmit={(values: any) => {
        console.log(values)
      }}
    >
      {/* <Form>
  
        </Form> */}
    </Formik>
  )
}

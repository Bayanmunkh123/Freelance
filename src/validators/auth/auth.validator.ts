import * as yup from 'yup'
import { descriptive } from '../../utils/locale'

yup.setLocale(descriptive)

export const validationLoginEmailSchema = yup.object().shape({
  email: yup.string().email().required().label('И-мэйл'),
  password: yup.string().min(8).required().label('Нууц үг')
})

export const validationLoginPhoneSchema = yup.object().shape({
  phoneNumber: yup.string().required().label('Утасны дугаар'),
  countryCode: yup.string().required(),
  password: yup.string().min(8).required().label('Нууц үг')
})

export const validationRegisterEmailSchema = yup.object().shape({
  email: yup.string().email().required().label('И-мэйл'),
  password: yup.string().min(8).required().label('Нууц үг'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Нууц үг таарах ёстой.')
    .required('Нууц үгийг давтаж оруулах ёстой.')
})

export const validationRegisterPhoneSchema = yup.object().shape({
  phoneNumber: yup.string().required().label('Утасны дугаар'),
  countryCode: yup.string().required(),
  password: yup.string().min(8).required().label('Нууц үг')
})


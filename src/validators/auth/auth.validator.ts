import * as yup from 'yup'
import { descriptive } from '../../utils/locale'

yup.setLocale(descriptive)

const showErrors = (field: string, valueLen: number, min: number) => {
  if (valueLen === 0) {
    return `${field} заавал оруулна уу.`
  } else if (valueLen > 0 && valueLen < min) {
    return `${field} хамгийн багадаа ${min} тэмдэгт байна.`
  } else {
    return ''
  }
}

export const validationLoginEmailSchema = yup.object().shape({
  email: yup.string().email().required().label('И-мэйл'),
  password: yup.string().min(6).required().label('Нууц үг')
})

export const validationLoginPhoneSchema = yup.object().shape({
  phone: yup.string().required().label('Утасны дугаар'),

  // countryCode: yup.string().required(),
  password: yup.string().min(6).required().label('Нууц үг')
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
  phone: yup.string().required().label('Утасны дугаар'),

  // countryCode: yup.string().required(),
  password: yup.string().min(8).required().label('Нууц үг')
})

export const validationConfirmCodeSchema = yup.object().shape({
  code: yup.string().min(6).required().label('Баталгаажуулах код')
})

export const validationConfirmPasswordSchema = yup.object().shape({
  password: yup.string().min(8).required().label('Нууц үг'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Нууц үг таарах ёстой.')
    .required('Нууц үгийг давтаж оруулах ёстой.')
})

// Forget password
export const validationForgetEmailSchema = yup.object().shape({
  email: yup.string().email().required().label('И-мэйл')
})
export const validationForgetPhoneSchema = yup.object().shape({
  email: yup.string().email().required().label('Утасны дугаар')
})

export const validationAddUserSchema = yup.object().shape({
  firstName: yup.string().min(3).required().label('Нэр'),
  lastName: yup.string().min(3).required().label('Овог'),
  email: yup.string().email().required().label('И-мэйл'),
  orgRole: yup.string().required().label('Role'),
  organization: yup.string().required().label('Байгуулга')
})

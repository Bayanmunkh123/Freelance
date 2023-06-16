import { images } from 'src/utils/theme/images'

// import { PaymentMethodEnum } from "generated"

const constants = {
  ACCESS_TOKEN_KEY: 'access-token',
  REFRESH_TOKEN_KEY: 'refresh-token',
  WS_TOKEN_KEY: 'ws-token'
}

export const config = {
  ...constants,
  NODE_ENV: process.env.ENV || process.env.NODE_ENV,
  BACKEND_URL: process.env.BACKEND_URL || 'http://localhost:4007/',
  BACKEND_WS_URL: process.env.BACKEND_WS_URL || 'ws://localhost:4007/'
}

export const MEDIA_TYPES = {
  'video/mp4': 18000,
  'image/jpeg': 18001,
  'image/png': 18001,
  'video/quicktime': 18000
}

export const PAYMENT_TYPES = [
  {
    id: 0,

    // value: PaymentMethodEnum.None,
    title: 'Дансаар шилжүүлэх',
    subTitle: 'Данс эсвэл QR код',
    disabled: false,
    desc: 'Төлбөрийг дансанд шилжүүлэх. Интернет банк, мобайл банк, QR код, дансаар төлбөр төлөх.',
    src: null
  },
  {
    id: 1,

    // value: PaymentMethodEnum.MnQpay,
    title: 'QPay',
    subTitle: 'Цахим хэтэвч',
    disabled: false,
    desc: 'Бүх банкны QPay үйлчилгээг ашиглан төлбөр төлөх боломжтой',
    src: images.banks.qpay
  },
  {
    id: 1,

    // value: PaymentMethodEnum.MnSpay,
    title: 'SocialPay',
    subTitle: 'Цахим хэтэвч',
    disabled: true,
    desc: 'ГОЛОМТ банкны Social Pay үйлчилгээг ашиглан төлбөр төлөх боломжтой',
    src: images.banks.social
  },
  {
    id: 2,
    value: 'MN_KHAN_BANK',
    title: 'Хаан банк',
    subTitle: 'Картаар',
    disabled: true,
    desc: 'ХААН банкны картаар төлбөр төлөх бол энд дарна уу. Интернет ПИН код шаардлагатай.',
    src: images.banks.khanbank
  },
  {
    id: 3,
    value: 'TDB',
    title: 'Худалдаа хөгжлийн банк',
    subTitle: 'Картаар',
    disabled: true,
    desc: 'ХААН банкны картнаас бусад бүх төрлийн дебит, кредит, гадаадын, дотоодын картаар төлбөр төлөх.',
    src: images.banks.tdbbank
  },
  {
    id: 4,
    value: 'STATE',
    title: 'Төрийн банк',
    subTitle: 'Картаар',
    disabled: true,
    desc: 'ХААН банкны картнаас бусад бүх төрлийн дебит, кредит, гадаадын, дотоодын картаар төлбөр төлөх.',
    src: images.banks.statebank
  },
  {
    id: 5,
    value: 'KHAS',
    title: 'Хас банк',
    subTitle: 'Картаар',
    disabled: true,
    desc: 'ХасБанкны картыг ашиглан төлбөр төлөх боломжтой',
    src: images.banks.xacbank
  },
  {
    id: 6,
    value: 'GOLOMT',
    title: 'Голомт банк',
    subTitle: 'Картаар',
    disabled: true,
    desc: 'ГОЛОМТ банкны картыг ашиглан төлбөр төлөх боломжтой',
    src: images.banks.golomt
  },
  {
    id: 7,
    value: 'MOST_MONEY',
    title: 'Most money',
    subTitle: 'Цахим хэтэвч',
    disabled: true,
    desc: 'Most Money үйлчилгээний хэрэглэгчид утасны дугаар, ТАН кодоо оруулан төлбөрөө төлнө үү',
    src: images.banks.most
  },
  {
    id: 8,
    value: 'CHINGIS_KHAN',
    title: 'Чингис хаан банк',
    subTitle: 'Картаар',
    disabled: true,
    desc: 'ХААН банкны картнаас бусад бүх төрлийн дебит, кредит, гадаадын, дотоодын картаар төлбөр төлөх.',
    src: images.banks.ckbank
  },
  {
    id: 9,
    value: 'CAPITRON',
    title: 'Капитрон банк',
    subTitle: 'Картаар',
    disabled: true,
    desc: 'ХААН банкны картнаас бусад бүх төрлийн дебит, кредит, гадаадын, дотоодын картаар төлбөр төлөх.',
    src: images.banks.capitronbank
  }
]

// eslint-disable-next-line no-shadow
export enum AuthModalType {
  Login = 'LOGIN',
  Register = 'REGISTER',
  Forget = 'FORGET',
  NewPassword = 'NEW_PASSWORD',
  ConfirmCode = 'CONFIRM_CODE',
  ChangePassword = 'CHANGE_PASSWORD',
  SessionManage = 'SESSION_MANAGE',
  TokenVerify = 'TOKEN_VERIFY'
}

export const OrgRoles = [
  { id: 1, name: 'OWNER' },
  { id: 2, name: 'EDITOR' },
  { id: 3, name: 'FINANCE' },
  { id: 4, name: 'SALES' },
  { id: 5, name: 'SUPPORT' },
  { id: 6, name: 'VIEWER' }
]

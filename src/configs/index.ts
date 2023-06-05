// import { images } from "src/utils/theme/images";

// import { PaymentMethodEnum } from "generated"

const tokenKeys = {
  ACCESS_TOKEN_KEY: 'access-token',
  REFRESH_TOKEN_KEY: 'refresh-token',
  WS_TOKEN_KEY: 'ws-token'
}

export const config = {
  ...tokenKeys,
  NODE_ENV: process.env.ENV || process.env.NODE_ENV,
  BACKEND_URL: process.env.BACKEND_URL || 'http://192.168.0.108:4011/graphql',
  BACKEND_WS_URL: process.env.BACKEND_WS_URL || 'ws://192.168.0.108:4011/subscriptions'
}

export const MEDIA_TYPES = {
  'video/mp4': 18000,
  'image/jpeg': 18001,
  'image/png': 18001,
  'video/quicktime': 18000
}

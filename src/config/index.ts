// import { images } from "src/utils/theme/images";

// import { PaymentMethodEnum } from "generated"

const tokenKeys = {
  ACCESS_TOKEN_KEY: "access-token",
  REFRESH_TOKEN_KEY: "refresh-token",
  RESET_TOKEN_KEY: "reset-token",
  DEVICE_ID: "device-id",
  WS_TOKEN_KEY: "ws-token",
}

const crypto = {
  SECRET_KEY: "vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3",
  ALGORITHM: "aes-256-ctr",
}

export const config = {
  ...tokenKeys,
  ...crypto,
  NODE_ENV: process.env.ENV || process.env.NODE_ENV,
  BACKEND_URL:
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:4000/graphql",
  BACKEND_WS_URL:
    process.env.NEXT_PUBLIC_BACKEND_WS_URL ||
    "ws://localhost:4000/subscriptions",
  BUCKET_IMAGE_URL:
    process.env.NEXT_PUBLIC_BUCKET_IMAGE_URL || "https://testimages.tab.mn",
}

export const MEDIA_TYPES = {
  "video/mp4": 18000,
  "image/jpeg": 18001,
  "image/png": 18001,
  "video/quicktime": 18000,
}

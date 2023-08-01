import { setCookie, destroyCookie } from "nookies"
import { config } from "src/config"
import { AuthVerifyTokenType } from "src/generated"

export const setCookieToken = (token: AuthVerifyTokenType | undefined) => {
  setCookie(null, config.ACCESS_TOKEN_KEY, token?.accessToken || "", {
    path: "/",
    maxAge: 60 * 60 * 60,
    httpOnly: false,
    secure: false,
  })
  setCookie(null, config.REFRESH_TOKEN_KEY, token?.refreshToken || "", {
    path: "/",
    maxAge: 60 * 60 * 60,
    httpOnly: false,
    secure: false,
  })
}
export const destroyCookieToken = (res: any | undefined) => {
  destroyCookie(res ? { res } : null, config.ACCESS_TOKEN_KEY, {
    path: "/",
  })
  destroyCookie(res ? { res } : null, config.REFRESH_TOKEN_KEY, {
    path: "/",
  })
}

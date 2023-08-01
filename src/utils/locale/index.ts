import type * as yup from "yup"

export const mixed: yup.LocaleObject["mixed"] = {
  default: ({ label }) =>
    (label ? label + "-д " : "") +
    ` ${label ? " б" : "Б"}уруу утга оруулсан байна.`,
  required: ({ label }) =>
    (label ? label : "") +
    ` ${label ? " з" : "З"}аавал оруулсан байх шаардлагатай.`,
  oneOf: ({ label, values }) =>
    (label ? label : "") + `以下のものが入力できます: ${values}`,
  notOneOf: ({ label, values }) =>
    (label ? label : "") + `以下のものは入力できません: ${values}`,
  defined: ({ label }) =>
    (label ? label : "") +
    ` ${label ? " з" : "З"}аавал оруулсан байх шаардлагатай.`,
}

export const string: yup.LocaleObject["string"] = {
  length: ({ label, length }) =>
    (label ? label + "нь " : "") +
    `${length} ${label ? " у" : "У"}рттай байна.`,
  min: ({ label, min }) =>
    (label ? label : "") +
    `${label ? " б" : "Б"}агадаа ${min} урттай байх ёстой.`,
  max: ({ label, max }) =>
    (label ? label : "") +
    `${label ? " и" : "И"}хдээ ${max} урттай байх ёстой.`,
  matches: ({ label, regex }) => (label ? label : "") + `${regex} байна.`,
  email: ({ label }) =>
    (label ? label + " нь" : "") +
    `${label ? " з" : "З"}өв мэйл хаяг биш байна!`,
  url: ({ label }) =>
    (label ? label : "") + `${label ? " з" : "З"}өв URL хаяг биш байна!`,
  uuid: ({ label }) =>
    (label ? label : "") + `${label ? " з" : "З"}өв uuid биш байна!`,
  trim: ({ label }) =>
    (label ? label : "") + `${label ? " x" : "X"}оосон зай авах боломжгүй!`,
  lowercase: ({ label }) =>
    (label ? label + "-д" : "") +
    `${label ? " x" : "X"}оосон зай авах боломжгүй!`,
  uppercase: ({ label }) =>
    (label ? label + "-д" : "") +
    `${label ? " x" : "X"}оосон зай авах боломжгүй!`,
}

export const number: yup.LocaleObject["number"] = {
  min: ({ label, min }) =>
    (label ? label : "") + `${min}-c дээш тоо агуулсан байх шаардлагатай.`,
  max: ({ label, max }) =>
    (label ? label : "") + `${max}-с доош тоо агуулсан байх шаардлагатай.`,
  lessThan: ({ label, less }) =>
    (label ? label : "") + `${less}-с бага тоо оруулах боломжтой.`,
  moreThan: ({ label, more }) =>
    (label ? label : "") + `${more}-с их тоо оруулах боломжтой.`,
  positive: ({ label }) =>
    (label ? label : "") + "0-с их тоо оруулах шаардлагатай.",
  negative: ({ label }) =>
    (label ? label : "") + "0-с бага тоо оруулах шаардлагатай.",
  integer: ({ label }) =>
    (label ? label : "") +
    `${label ? "бүхэл" : "Бүхэл"}-с их тоо оруулах боломжтой.`,
}

export const date: yup.LocaleObject["date"] = {
  min: ({ label, min }) =>
    (label ? label + "には" : "") + `${min}以降の日付のみ入力可能です`,
  max: ({ label, max }) =>
    (label ? label + "には" : "") + `${max}以前の日付のみ入力可能です`,
}

export const object: yup.LocaleObject["object"] = {
  noUnknown: ({ label, unknown }: { label?: string; unknown?: string }) =>
    (label ? label + "には" : "") +
    "登録されていないキーは入力できません" +
    (unknown ? ": " + unknown : ""),
}

export const array: yup.LocaleObject["array"] = {
  min: ({ label, min }) =>
    (label ? label + "нь" : "") + `${min}-с их утга агуулах байх шаардлагатай.`,
  max: ({ label, max }) =>
    (label ? label + "нь" : "") + `${max} хүртэл утга агуулах шаардлагатай.`,
  length: ({ label, length }) =>
    (label ? label + "нь" : "") + `${length} байх шаардлагатай.`,
}

export const descriptive: yup.LocaleObject = {
  mixed,
  string,
  number,
  date,
  object,
  array,
}

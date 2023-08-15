import { mongolianProvincesType } from "./types"
import { RenderValueType } from "./types"

export const distNames = [
  "Баянгол",
  "Баянзүрх",
  "Хан-Уул",
  "Чингэлтэй",
  "Сүхбаатар",
  "Налайх",
  "Багахангай",
  "Сонгинохайрхан",
  "Багануур",
]

export const mongolianProvinces: mongolianProvincesType[] = [
  {
    id: 1,
    name: "Улаанбаатар",
    child: distNames,
  },
  {
    id: 2,
    name: "Архангай",
    child: [],
  },
  {
    id: 3,
    name: "Баян-Өлгий",
    child: [],
  },
  {
    id: 4,
    name: "Баянхонгор",
    child: [],
  },
  {
    id: 5,
    name: "Булган",
    child: [],
  },
  {
    id: 6,
    name: "Говь-Алтай",
    child: [],
  },
  {
    id: 7,
    name: "Говьсүмбэр",
    child: [],
  },
  {
    id: 8,
    name: "Дархан-Уул",
    child: [],
  },
  {
    id: 9,
    name: "Дорноговь",
    child: [],
  },
  {
    id: 10,
    name: "Дорнод",
    child: [],
  },
  {
    id: 11,
    name: "Дундговь",
    child: [],
  },
  {
    id: 12,
    name: "Завхан",
    child: [],
  },
  {
    id: 13,
    name: "Орхон",
    child: [],
  },
  {
    id: 14,
    name: "Өвөрхангай",
    child: [],
  },
  {
    id: 15,
    name: "Өмнөговь",
    child: [],
  },
  {
    id: 16,
    name: "Сүхбаатар",
    child: [],
  },
  {
    id: 17,
    name: "Сэлэнгэ",
    child: [],
  },
  {
    id: 18,
    name: "Төв",
    child: [],
  },
  {
    id: 19,
    name: "Увс",
    child: [],
  },
  {
    id: 20,
    name: "Ховд",
    child: [],
  },
  {
    id: 21,
    name: "Хөвсгөл",
    child: [],
  },
  {
    id: 22,
    name: "Хэнтий",
    child: [],
  },
]

export const RenderValues: RenderValueType[] = [
  {
    label: "Орон сууц",
    value: "Орон сууц",
  },
  {
    label: "Оффис",
    value: "Оффис",
  },
  {
    label: "Газар",
    value: "Газар",
  },
  {
    label: "Дэлгүүр",
    value: "Дэлгүүр",
  },
  {
    label: "Хувийн сууц",
    value: "Хувийн сууц",
  },
  {
    label: "Барилга",
    value: "Барилга",
  },
  {
    label: "Агуулах",
    value: "warehouse",
  },
  {
    label: "Нийтийн байр",
    value: "Нийтийн байр",
  },
  {
    label: "Зогсоол",
    value: "Зогсоол",
  },
]
export const RenderNumbers: RenderValueType[] = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: 4,
    value: 4,
  },
  {
    label: "5+",
    value: 5,
  },
]
export const RenderStatus: RenderValueType[] = [
  {
    label: "Тун удахгүй",
    value: "soon",
  },
  {
    label: "Шинэ",
    value: "new",
  },
  {
    label: "Хуучин",
    value: "old",
  },
]

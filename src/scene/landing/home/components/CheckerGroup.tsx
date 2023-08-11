import { Field } from 'formik'
import { Button, Checkbox } from '@mui/material'

/**Icon imports*/
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'

interface CheckerGroupType {
  isImg: boolean;
  isStartIcon: boolean;
  isBuy: boolean;
  name: string;
  isNumber: boolean;
  isStatus: boolean;
}
interface RenderValueType {
  label: string | number;
  value: string | number;
}

const CustomCheckIcon = <CheckCircleIcon />
const CustomUncheckedIcon = <RadioButtonUncheckedIcon />

export const RenderValues: RenderValueType[] = [
  {
    label: 'Орон сууц',
    value: 'apartment',
  },
  {
    label: 'Оффис',
    value: 'office',
  },
  {
    label: 'Газар',
    value: 'place',
  },
  {
    label: 'Дэлгүүр',
    value: 'shop',
  },
  {
    label: 'Хувийн сууц',
    value: 'house',
  },
  {
    label: 'Барилга',
    value: 'building',
  },
  {
    label: 'Агуулах',
    value: 'warehouse',
  },
  {
    label: 'Нийтийн байр',
    value: 'dormitory',
  },
  {
    label: 'Зогсоол',
    value: 'parking',
  },
]
const RendeNumbers: RenderValueType[] = [
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
    label: '5+',
    value: 5,
  },
]
const RenderStatus: RenderValueType[] = [
  {
    label: 'Тун удахгүй',
    value: 'soon',
  },
  {
    label: 'Шинэ',
    value: 'new',
  },
  {
    label: 'Хуучин',
    value: 'old',
  },
]
export const CheckerGroup = (props: CheckerGroupType) => {
  // const [checked,setChecked]
  const { isStartIcon, isImg, isBuy, name, isNumber, isStatus } = props
  const values = isBuy
    ? RenderValues.slice(0, 6)
    : !isBuy && !isNumber && !isStatus
    ? RenderValues
    : isNumber
    ? RendeNumbers
    : isStatus
    ? RenderStatus
    : null
  return (
    <>
      {values.map((item: RenderValueType, index: number) => (
        <Button
          size="small"
          sx={{
            border: '1px solid',
            borderRadius: '15px',
            width: !isNumber ? 200 : 75,
            justifyContent: !isStatus ? 'space-between' : 'none',
          }}
          key={index}
        >
          {isImg ? (
            <img
              src="https://images.homes.com/listings/214/1007620603-872007331-original.jpg"
              width="40px"
              style={{ borderRadius: '20px' }}
            />
          ) : null}
          {isStartIcon ? null : item.label}
          <Field name={name} size="small">
            {({ field }) => (
              <Checkbox
                //checked={checked}
                {...field}
                value={item.value}
                icon={CustomUncheckedIcon}
                checkedIcon={CustomCheckIcon}
              />
            )}
          </Field>
          {isStartIcon ? item.label : null}
        </Button>
      ))}
    </>
  )
}

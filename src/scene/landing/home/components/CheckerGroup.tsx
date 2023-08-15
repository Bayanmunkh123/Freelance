import { Field } from 'formik'
import { Button, Checkbox } from '@mui/material'
import { RenderValues, RenderNumbers, RenderStatus } from 'src/@core/utils/initData'
import { RenderValueType } from 'src/@core/utils/types'
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

const CustomCheckIcon = <CheckCircleIcon />
const CustomUncheckedIcon = <RadioButtonUncheckedIcon />

export const CheckerGroup = (props: CheckerGroupType) => {
  // const [checked,setChecked]
  const { isStartIcon, isImg, isBuy, name, isNumber, isStatus } = props
  const values = isBuy
    ? RenderValues.slice(0, 6)
    : !isBuy && !isNumber && !isStatus
    ? RenderValues
    : isNumber
    ? RenderNumbers
    : isStatus
    ? RenderStatus
    : null
  return (
    <>
      {values?.map((item: RenderValueType, index: number) => (
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

import React from 'react'
import { useFormikContext, getIn } from 'formik'
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material'

import Icon from 'src/@core/components/icon'

export const FormTextField: React.FC<TextFieldProps> = props => {
  const formik = useFormikContext()

  // Formik Props
  const isTouched = getIn(formik.touched, props.name || '')
  const errorMessage = getIn(formik.errors, props.name || '')

  const { error, variant, helperText, type = 'text', ...rest } = props

  const [showPassword, setShowPassword] = React.useState(false)
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  return (
    <TextField
      variant={variant}
      type={type === 'password' ? (showPassword ? 'text' : 'password') : 'text'}
      error={error ?? Boolean(isTouched && errorMessage)}
      helperText={helperText ?? (isTouched && errorMessage ? errorMessage : undefined)}
      InputProps={{
        ...(type === 'password' && {
          endAdornment: (
            <>
              <InputAdornment position='end'>
                <IconButton
                  aria-label='toggle password visibility'
                  onClick={() => setShowPassword(show => !show)}
                  onMouseDown={handleMouseDownPassword}
                  edge='end'
                >
                  {showPassword ? <Icon icon='mdi:eye-off-outline' /> : <Icon icon='mdi:eye-outline' />}
                </IconButton>
              </InputAdornment>
            </>
          )
        })
      }}
      {...rest}
    />
  )
}

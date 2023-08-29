// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import {useRouter} from 'next/router'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import * as yup from 'yup'
import toast from 'react-hot-toast'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface State {
  showNewPassword: boolean
  showCurrentPassword: boolean
  showConfirmNewPassword: boolean
}

const defaultValues = {
  newPassword: '',
  currentPassword: '',
  confirmNewPassword: ''
}

const schema = yup.object().shape({
  currentPassword: yup.string().min(8).required(),
  newPassword: yup
    .string()
    .min(8)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must contain 8 characters, 1 uppercase, 1 lowercase, 1 number and 1 special case character'
    )
    .required(),
  confirmNewPassword: yup
    .string()
    .required()
    .oneOf([yup.ref('newPassword')], 'Passwords must match')
})

export const ChangePassword = () => {
  // ** States
  const [values, setValues] = useState<State>({
    showNewPassword: false,
    showCurrentPassword: false,
    showConfirmNewPassword: false
  })

  // ** Hooks
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues, resolver: yupResolver(schema) })
  

  const handleClickShowCurrentPassword = () => {
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword })
  }

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }
  const router = useRouter()

  const onPasswordFormSubmit = () => {
    toast.success('Password Changed Successfully')
    reset(defaultValues)
  }

  return (
    <Grid sx={{width: '100%', maxWidth: '50%', margin:'auto', marginBottom:'30%'}}>
    <Card>
    <Button  type='button' sx={{mt:3}} onClick={() => router.push('/landing/user')}>
    <Icon icon="material-symbols:chevron-left" /> Буцах
    </Button>
      <CardHeader title='Нууц үг солих' sx={{ textAlign: 'center' }} />
      <CardContent>
        <form onSubmit={handleSubmit(onPasswordFormSubmit)}>
          <Grid container spacing={6} alignItems={'center'} justifyContent={'center'} >
            <Grid item xs={12} sm={10} >
              <FormControl fullWidth>
                <InputLabel htmlFor='input-current-password' error={Boolean(errors.currentPassword)}>
                  Одоогийн нууц үг
                </InputLabel>
                <Controller
                  name='currentPassword'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <OutlinedInput
                      value={value}
                      label='Current Password'
                      onChange={onChange}
                      id='input-current-password'
                      error={Boolean(errors.currentPassword)}
                      type={values.showCurrentPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={handleClickShowCurrentPassword}
                          >
                            <Icon icon={values.showCurrentPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.currentPassword && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.currentPassword.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={6} alignItems={'center'} justifyContent={'center'} sx={{ mt:1}}>
            <Grid item xs={12} sm={10} sx={{display:'flex',flexDirection:'column'}}>
              <FormControl fullWidth>
                <InputLabel htmlFor='input-new-password' error={Boolean(errors.newPassword)}>
                  Шинэ нууц үг
                </InputLabel>
                <Controller
                  name='newPassword'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <OutlinedInput
                      value={value}
                      label='New Password'
                      onChange={onChange}
                      id='input-new-password'
                      error={Boolean(errors.newPassword)}
                      type={values.showNewPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onClick={handleClickShowNewPassword}
                            onMouseDown={e => e.preventDefault()}
                          >
                            <Icon icon={values.showNewPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.newPassword && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.newPassword.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={10} alignItems={'center'} justifyContent={'center'} sx={{ mt:1}}>
              <FormControl fullWidth>
                <InputLabel htmlFor='input-confirm-new-password' error={Boolean(errors.confirmNewPassword)}>
                  Шинэ нууц үг дахин оруулах
                </InputLabel>
                <Controller
                  name='confirmNewPassword'
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { value, onChange } }) => (
                    <OutlinedInput
                      value={value}
                      label='Confirm New Password'
                      onChange={onChange}
                      id='input-confirm-new-password'
                      error={Boolean(errors.confirmNewPassword)}
                      type={values.showConfirmNewPassword ? 'text' : 'password'}
                      endAdornment={
                        <InputAdornment position='end'>
                          <IconButton
                            edge='end'
                            onMouseDown={e => e.preventDefault()}
                            onClick={handleClickShowConfirmNewPassword}
                          >
                            <Icon icon={values.showConfirmNewPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  )}
                />
                {errors.confirmNewPassword && (
                  <FormHelperText sx={{ color: 'error.main' }}>{errors.confirmNewPassword.message}</FormHelperText>
                )}
              </FormControl>
            </Grid>
            
            <Grid item xs={12}  alignItems={'center'} justifyContent={'center'} sx={{ mt:1, display:'flex'}}>
              <Button variant='contained' type='submit' sx={{ mr: 3 }}>
                Хадгалах
              </Button>
              <Button type='reset' variant='outlined' color='secondary' onClick={() => reset()}>
                Арилгах
              </Button>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
    </Grid>
  )
}



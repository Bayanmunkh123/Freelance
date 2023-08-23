// ** React Imports
import { ChangeEvent, useState } from 'react'


// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import FormHelperText from '@mui/material/FormHelperText'
import { styled } from "@mui/material/styles"

// ** Icon Imports
import Icon from 'src/@core/components/icon'

interface State {
  password: string
  showPassword: boolean
}
interface Data {
        lastName: string
        firstName: string
        email: string | number | boolean
}
const ImgStyled = styled("img")(({ theme }) => ({
    width: 120,
    height: 120,
    marginRight: theme.spacing(5),
    borderRadius: theme.shape.borderRadius,
  }))
export const RegisterMain = () => {
    const initialData: Data = {
        lastName: "",
        firstName: "",
        email: "",
      }
    const handleFormChange = (field: keyof Data | 'password', value: Data[keyof Data]) => {
        if (field === 'password') {
            setValues({ ...values, password: value as string }); // Assuming password is a string
            setConfirmPassValues({ ...confirmPassValues, password: '' }); // Reset confirm password field

        } else {
            setFormData({ ...formData, [field]: value });
        }
    }
    const [formData, setFormData] = useState<Data>(initialData)
    // ** States
    const [values, setValues] = useState<State>({
        password: '',
        showPassword: false
    })
    const [confirmPassValues, setConfirmPassValues] = useState<State>({
        password: '',
        showPassword: false
    })

    const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [prop]: event.target.value })
    }

    const handleConfirmPassChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
        setConfirmPassValues({ ...confirmPassValues, [prop]: event.target.value })
    }
    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword })
    }

    const handleClickConfirmPassShow = () => {
        setConfirmPassValues({ ...confirmPassValues, showPassword: !confirmPassValues.showPassword })
    }
    const [imgSrc, setImgSrc] = useState<string>("/images/avatars/1.png")
  return (
        
        <form onSubmit={e => e.preventDefault()}>
        <ImgStyled src={imgSrc} alt="Profile Pic" />
          <Grid container spacing={5} >
            <Grid item xs={12}>
              <TextField 
              value={formData.lastName}
              onChange={(e) =>
                handleFormChange("lastName", e.target.value)
                }
              fullWidth label='Овог' />
            </Grid>
            <Grid item xs={12}>
              <TextField 
              value={formData.firstName}
              onChange={(e) =>
                handleFormChange("firstName", e.target.value)
                }
              fullWidth label='Бүтэн нэр' />
            </Grid>
            <Grid item xs={12}>
              <TextField
                value={formData.email}
                fullWidth
                onChange={(e) =>
                    handleFormChange("email", e.target.value)
                    }
                type='email'
                label='Имэйл'
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-basic-password'>Нууц үг</InputLabel>
                <OutlinedInput
                  label='Password'
                  value={values.password}
                  id='form-layouts-basic-password'
                  onChange={handleChange('password')}
                  type={values.showPassword ? 'text' : 'password'}
                  aria-describedby='form-layouts-basic-password-helper'
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <Icon icon={values.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id='form-layouts-basic-password-helper'>
                  8-аас дээш үсэг болон тоо,тэмдэгт ашиглана уу
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}  sx={{marginTop:'-1.5%'}}>
              <FormControl fullWidth>
                <InputLabel htmlFor='form-layouts-confirm-password'>Нууц үг давтах</InputLabel>
                <OutlinedInput
                  label='Confirm Password'
                  value={confirmPassValues.password}
                  id='form-layouts-confirm-password'
                  onChange={handleConfirmPassChange('password')}
                  aria-describedby='form-layouts-confirm-password-helper'
                  type={confirmPassValues.showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickConfirmPassShow}
                        onMouseDown={e => e.preventDefault()}
                        aria-label='toggle password visibility'
                      >
                        <Icon icon={confirmPassValues.showPassword ? 'mdi:eye-outline' : 'mdi:eye-off-outline'} />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <FormHelperText id='form-layouts-confirm-password-helper'>
                  Дээрх нууц үгээ дахин оруулна уу
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={5}>
              
                <Button variant='contained' sx={{mr:3}}>
                  Хадгалах
                </Button>
                <Button
                    type="reset"
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      setFormData(initialData);
                      setValues({ ...values, password: '' }); // Reset password field
                      setConfirmPassValues({ ...confirmPassValues, password: '' }); // Reset confirm password field
                  }}                      
                    >
                    Устгах
                </Button>
                
                <Link href="/landing/user/changePassword" style={{textDecoration: 'none'}}>
                <Button
                variant="outlined"
                sx={{color:'grey', borderColor:'GrayText',mt:5,display:'flex',textDecoration:'none'}}
                >
                    Нууц үг солих
                </Button>
                </Link>
                <Link href="/landing/user/forgotPassword" style={{textDecoration: 'none'}}>
                <Button
                 variant="outlined"
                 sx={{ color: 'grey', borderColor:'GrayText',mt:3 }}>
                    Нууц үг сэргээх
                </Button>
                </Link>
            </Grid>
          </Grid>
        </form>
  )
}

export default RegisterMain

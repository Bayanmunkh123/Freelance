import Drawer from '@mui/material/Drawer'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'

import IconButton from '@mui/material/IconButton'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'

import Icon from 'src/@core/components/icon'

import { OrganizationUserRoleEnum, useCreateUserMutation, useOrganizationsQuery } from 'src/generated'

import { Formik, Form, Field } from 'formik'
import { validationAddUserSchema } from 'src/validators/auth/auth.validator'
import { TextField } from 'formik-mui'

import { Stack } from '@mui/material'
import { OrgRoles } from 'src/utils/constants'
import { useRouter } from 'next/router'

interface SidebarAddUserType {
  open: boolean
  toggle: () => void
}
interface UserAddInput {
  firstName: string
  lastName: string
  email: string
  organization: string
  orgRole: string
}

const Header = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(3, 4),
  justifyContent: 'space-between',
  backgroundColor: theme.palette.background.default
}))

const SidebarAddUser = (props: SidebarAddUserType) => {
  const router = useRouter()
  const { open, toggle } = props

  const [onCreateUser] = useCreateUserMutation({
    onCompleted: data => {
      if (data.createUser?.id) window.location.reload()
    }
  })

  const { data: OrgList } = useOrganizationsQuery({
    onError: error => {
      alert(error)
    }
  })

  const submitHandler = (data: UserAddInput) => {
    console.log('onSubmit === values', data)

    onCreateUser({
      variables: {
        input: {
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          orgRole: data.orgRole as OrganizationUserRoleEnum,
          organizationId: '879094b3-f68e-4bda-8139-b5ebf599e84b'
        }
      }
    })
  }

  const handleClose = () => {
    toggle()

    // reset()
  }

  return (
    <Drawer
      open={open}
      anchor='right'
      variant='temporary'
      onClose={handleClose}
      ModalProps={{ keepMounted: true }}
      sx={{ '& .MuiDrawer-paper': { width: { xs: 300, sm: 400 } } }}
    >
      <Header>
        <Typography variant='h6'>Хэрэглэгч нэмэх</Typography>
        <IconButton size='small' onClick={handleClose} sx={{ color: 'text.primary' }}>
          <Icon icon='mdi:close' fontSize={20} />
        </IconButton>
      </Header>
      <Box sx={{ p: 5 }}>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', organization: '', orgRole: '' }}
          validationSchema={validationAddUserSchema}
          onSubmit={(values: UserAddInput, formikHelpers) => {
            console.log(values)

            submitHandler(values)
            formikHelpers.setSubmitting(false)
          }}
        >
          {formikProps => (
            <Form>
              <Stack spacing={6}>
                <Field component={TextField} name='firstName' type='text' label='Нэр' size='big' />
                <Field component={TextField} name='lastName' type='text' label='Овог' size='big' />
                <Field component={TextField} name='email' type='text' label='И-мейл' size='big' />
                <FormControl fullWidth>
                  <InputLabel id='org-select'>Байгуулга сонгох</InputLabel>
                  <Select
                    value={formikProps.values.organization}
                    id='select-org'
                    label='Байгуулга сонгох'
                    labelId='org-select'
                    onChange={formikProps.handleChange('organization')}

                    // inputProps={{ placeholder: 'Байгуулга сонгох' }}
                  >
                    {OrgList?.organizations?.data?.map(org => (
                      <MenuItem key={org.id} value={org.id}>
                        {org.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <FormControl fullWidth sx={{ mb: 6 }}>
                  <InputLabel id='role-select'>Role сонгох</InputLabel>
                  <Select
                    fullWidth
                    value={formikProps.values.orgRole}
                    id='select-role'
                    label='Role сонгох'
                    labelId='role-select'
                    onChange={formikProps.handleChange('orgRole')}
                    inputProps={{ placeholder: 'Role сонгох' }}
                  >
                    {OrgRoles.map(role => (
                      <MenuItem key={role.id} value={role.name}>
                        {role.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <Button type='submit' size='large' variant='contained' sx={{ mr: 3 }}>
                  Нэмэх
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Box>
    </Drawer>
  )
}

export default SidebarAddUser

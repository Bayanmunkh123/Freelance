// ** React Imports
import { useState, ElementType, ChangeEvent, ReactElement, SyntheticEvent, useEffect } from 'react'

// ** Next Import
import { useRouter } from 'next/router'
import Link from 'next/link';


// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Button, { ButtonProps } from '@mui/material/Button'
import TabContext from '@mui/lab/TabContext'
import TabPanel from '@mui/lab/TabPanel'
import MuiTabList, { TabListProps } from '@mui/lab/TabList'
import Tab from '@mui/material/Tab'
import useMediaQuery from '@mui/material/useMediaQuery'
import { styled, Theme } from '@mui/material/styles'
import {RegisterAccount} from './components/RegisterAccount'
import RegisterOrder  from './components/RegisterOrder'
import RegisterMain from './components/RegisterMain'

// ** Third Party Imports
import { useForm, Controller } from 'react-hook-form'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import React from 'react'
import { positions } from '@mui/system';


interface Data {
  email: string
  state: string
  address: string
  country: string
  lastName: string
  currency: string
  language: string
  timezone: string
  registerId: number | string
  organization: string
  number: number 
  zipCode: number | string
  firstLetter: string
  secondLetter: string
  workSector: string
  duration: Date
  income: number | string
  visaCategory: number | string
  workYear: number
}
interface CountryType {
  code: string
  label: string
  phone: string
}

const initialData: Data = {
  email: '',
  state: '',
  address: '',
  country: '',
  lastName: '',
  currency: '',
  language: '',
  timezone: '',
  registerId: '',
  organization: '',
  number: 0,
  zipCode: '',
  firstLetter: '',
  secondLetter: '',
  workSector: '',
  duration: new Date(0),
  income: '',
  visaCategory: '',
  workYear: 0
}

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(5),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)<ButtonProps & { component?: ElementType; htmlFor?: string }>(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))


const ResetButtonStyled = styled(Button)<ButtonProps>(({ theme }) => ({
  marginLeft: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

const TabList = styled(MuiTabList)<TabListProps>(({ theme }) => ({
  '& .MuiTabs-indicator': {
    display: 'none'
  },
  '& .Mui-selected': {
    backgroundColor: theme.palette.primary.main,
    color: `${theme.palette.common.white} !important`
  },
  '& .MuiTab-root': {
    minWidth: 65,
    minHeight: 38,
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('md')]: {
      minWidth: 130
    }
  }
}))

const UserScene = () => {
  // ** State
  const [open, setOpen] = useState<boolean>(false)
  const [inputValue, setInputValue] = useState<string>('')
  const [userInput, setUserInput] = useState<string>('yes')
  const [formData, setFormData] = useState<Data>(initialData)
  const [imgSrc, setImgSrc] = useState<string>('/images/avatars/1.png')
  const [secondDialogOpen, setSecondDialogOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('1')
  const [activeTab, setActiveTab] = useState<string>('account')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // ** Hooks
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ defaultValues: { checkbox: false } })

  const router = useRouter()
  const hideText = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue)
    setIsLoading(true)
    router.push(`/user${value.toLowerCase()}`).then(() => setIsLoading(false))
  }
  const handleClose = () => setOpen(false)

  const handleSecondDialogClose = () => setSecondDialogOpen(false)

  const onSubmit = () => setOpen(true)

  const handleConfirmation = (value: string) => {
    handleClose()
    setUserInput(value)
    setSecondDialogOpen(true)
  }

  const handleInputImageChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)
      reader.readAsDataURL(files[0])

      if (reader.result !== null) {
        setInputValue(reader.result as string)
      }
    }
  }
  const handleInputImageReset = () => {
    setInputValue('')
    setImgSrc('/images/avatars/1.png')
  }

  const handleFormChange = (field: keyof Data, value: Data[keyof Data]) => {
    setFormData({ ...formData, [field]: value })
  }

  return (
    
    <Grid item xs={8} container spacing={6}  justifyContent={"center"} alignItems={"center"} >
      <TabContext value={activeTab}>
          <Grid container spacing={6} alignItems={"center"} justifyContent={"center"} >
            <Grid item xs={8} my="20px">
              <TabList
                variant='scrollable'
                scrollButtons='auto'
                onChange={(_event, type) => {
                    setActiveTab(type)
                    console.log(type)
                }}
                aria-label='customized tabs example'
              >
                <Tab
                  value='account'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                      <Icon icon='mdi:account-outline' />
                      {!hideText && 'Хэрэглэгчийн бүртгэл'}
                    </Box>
                  }
                />
                <Tab
                  value='order'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                      <Icon icon='mdi:bookmark-outline' />
                      {!hideText && 'Захиалгын бүртгэл'}
                    </Box>
                  }
                />
                <Tab
                  value='main'
                  label={
                    <Box sx={{ display: 'flex', alignItems: 'center', ...(!hideText && { '& svg': { mr: 2 } }) }}>
                      <Icon icon='mdi:account-plus-outline' />
                      {!hideText && 'Үндсэн бүртгэл'}
                    </Box>
                  }
                />
                  
              </TabList>
            </Grid>
            <Card >    
              <CardContent >
                <TabPanel value='account' sx={{ p: 0 }}>
                <RegisterAccount />
                </TabPanel>
                <TabPanel value='order' sx={{ p: 0 }}>
                <RegisterOrder />
                </TabPanel>
                <TabPanel value='main' sx={{ p: 0 }}>
                <RegisterMain />
                </TabPanel>
              </CardContent>
            </Card>
          </Grid> 
        </TabContext>
      </Grid>
  )
}
export default UserScene

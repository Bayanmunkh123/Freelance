// ** React Imports
import React, { forwardRef, Fragment, MouseEvent, ReactElement, Ref, useState } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'

import Slide, { SlideProps } from '@mui/material/Slide'

import {
  Box,
  Card,
  CardContent,
  Checkbox,
  DialogContent,
  Divider,
  FormControlLabel,
  IconButton,
  Stack,
  Tab,
  Typography
} from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'

import { Formik, Form, Field } from 'formik'
import { TextField } from 'formik-mui'

import * as yup from 'yup'

// ** Icon Imports
import Icon from 'src/@core/components/icon'
import { LoginEmailInput, LoginPhoneInput, useLoginMutation } from 'src/generated'
import LoginPhone from './components/LoginPhone'
import Login from './components/Login'
const Transition = forwardRef(function Transition(
  props: SlideProps & { children?: ReactElement<any, any> },
  ref: Ref<unknown>
) {
  return <Slide direction='down' ref={ref} {...props} />
})

export type AuthDialogProps = {
  open: boolean
  setOpen: (value: boolean) => void
}

export const AuthDialog = (props: AuthDialogProps) => {
  const { open, setOpen } = props
  const handleClose = () => setOpen(false)

  return (
    <Fragment>
      <Dialog open={open} keepMounted onClose={handleClose} TransitionComponent={Transition}>
        <Login />
      </Dialog>
    </Fragment>
  )
}

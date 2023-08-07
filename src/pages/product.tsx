import * as React from 'react'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import IconButton from '@mui/material/IconButton'

// ** Icon Imports
import ProductList from 'src/scene/landing/home/product/ProductList'
const Product = () => {
  return (
    <>
     <ProductList />
    </>
  )
}

export default Product
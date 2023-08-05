import React, { useState } from 'react'
import { Box, Card, CardContent, Tab, Typography } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import FilterBuy from './FilterBuy'
import { FilterRent } from './FilterRent'
export const FilterDialog = () => {
  const [actionType, setActiontype] = useState('buy')
  return (
    <Card sx={{ zIndex: 1, width: '460px' }}>
      <CardContent
        sx={{ p: (theme) => `${theme.spacing(13, 7, 6.5)} !important` }}
      >
        <Typography
          variant="h6"
          sx={{
            ml: 2,
            lineHeight: 1,
            fontWeight: 700,
            fontSize: '1.5rem !important',
          }}
        >
          Бүх шүүлтүүр
        </Typography>
        <TabContext value={actionType}>
          <Box sx={{ mb: '20px' }}>
            <TabList
              onChange={(_event, type) => {
                console.log(type)
                setActiontype(type)
              }}
              aria-label="filter product"
            >
              <Tab label="Худалдан авах" value="buy" />
              <Tab label="Түрээслэх" value="rent" />
            </TabList>
          </Box>
          <TabPanel value="buy">
            <FilterBuy />
          </TabPanel>
          <TabPanel value="rent">
            <FilterRent />
          </TabPanel>
        </TabContext>
      </CardContent>
    </Card>
  )
}

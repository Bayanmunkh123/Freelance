import React, { useState } from 'react'
import { Grid, Tab, Typography, DialogContent } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { FilterBuy } from './FilterBuy'
import { FilterRent } from './FilterRent'

export const FilterDialog = () => {
  const [actionType, setActiontype] = useState('buy')
  return (
    <DialogContent>
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
        <Grid sx={{ mb: '20px' }}>
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
        </Grid>
        <TabPanel
          value="buy"
          sx={{
            '& .formBuy': {
              display: 'flex',
              flexDirection: 'column',
              rowGap: 4,
            },
          }}
        >
          <FilterBuy />
        </TabPanel>
        <TabPanel value="rent">
          <FilterRent />
        </TabPanel>
      </TabContext>
    </DialogContent>
  )
}

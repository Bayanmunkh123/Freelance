// ** MUI Imports
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import Select, { SelectChangeEvent } from "@mui/material/Select"

// ** Icon Imports
import Icon from "src/@core/components/icon"
import { RoleType } from "src/context/types"
import { OrgRoles } from "src/utils/constants"
import { useState } from "react"
import { IconButton } from "@mui/material"

interface TableHeaderProps {
  // plan: string
  roleList: string | undefined
  searchValue: string
  handleFilter: (val: string) => void
  handleRoleChange: (e: SelectChangeEvent) => void
  toggle: (event: any) => void
  setSearchValue: (e: string) => void
  clearSearch: (e: string) => void
}

export const RoleTableHeader = (props: TableHeaderProps) => {
  const {
    roleList,
    searchValue,
    handleRoleChange,
    handleFilter,
    setSearchValue,
    clearSearch,
  } = props
  return (
    <Box
      sx={{
        p: 5,
        pb: 3,
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Button
        sx={{ mr: 4, mb: 2 }}
        color="secondary"
        variant="outlined"
        startIcon={<Icon icon="mdi:export-variant" />}
      >
        Export
      </Button>
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
        <TextField
          size="small"
          value={searchValue}
          placeholder="Search User"
          sx={{ mr: 6, mb: 2 }}
          InputProps={{
            startAdornment: (
              <Box sx={{ mr: 2, display: "flex" }}>
                <IconButton
                  size="small"
                  title="Search"
                  aria-label="Search"
                  onClick={() => handleFilter(searchValue)}
                >
                  <Icon icon="mdi:magnify" fontSize={20} />
                </IconButton>
              </Box>
            ),
            endAdornment: (
              <IconButton
                size="small"
                title="Clear"
                aria-label="Clear"
                onClick={() => clearSearch}
              >
                <Icon icon="mdi:close" fontSize={20} />
              </IconButton>
            ),
          }}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
        />
        <FormControl fullWidth>
          <InputLabel id="role-select">Role сонгох</InputLabel>
          <Select
            fullWidth
            value={roleList as string}
            id="select-role"
            label="Select Role"
            labelId="role-select"
            onChange={handleRoleChange}
            inputProps={{ placeholder: "Select Role" }}
          >
            {OrgRoles.map((role, key) => {
              return (
                <MenuItem key={key} value={role.name}>
                  {role.name}
                </MenuItem>
              )
            })}
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

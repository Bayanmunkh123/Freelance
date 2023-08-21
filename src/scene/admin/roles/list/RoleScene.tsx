// ** Next Imports
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import PageHeader from "src/@core/components/page-header"
import { RoleCardList } from "./components/RoleCardList"
import { RoleListTable } from "./components/RoleTableList"

export const RoleScene = () => {
  return (
    <Grid container spacing={6}>
      <PageHeader
        title={<Typography variant="h5">Гишүүдийн жагсаалт</Typography>}
        subtitle={
          <Typography variant="body2">
            Жагсаалтууд
          </Typography>
        }
      />
      <Grid item xs={12} sx={{ mb: 5 }}>
        <RoleCardList />
      </Grid>
      <PageHeader
        title={
          <Typography variant="h5">Нийт хэрэглэгч болон бүртгүүлсэн гишүүд</Typography>
        }
        subtitle={
          <Typography variant="body2">
            Админ хайх.
          </Typography>
        }
      />
      <Grid item xs={12}>
        <RoleListTable />
      </Grid>
    </Grid>
  )
}

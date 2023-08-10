import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material"
interface myCompanyDataType {
  description: string
  email: string
  webUrl: string
  location: string
  phoneNumber: number
}

const data: myCompanyDataType = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt sed do eiusmod tempor incididunt ut labore et dolore magna aliquaLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
  email: "myCompany@gmail.com",
  webUrl: "djlskjdkl.com",
  location: "Ulaanbaatar",
  phoneNumber: 123456789,
}
export const MainInfo = () => {
  return (
    <Card>
      <Typography>Тухай</Typography>
      <Typography>{data.description}</Typography>
      <List>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="И-мэйл" secondary={data.email} />
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Утасны дугаар" secondary={data.phoneNumber} />
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Вэб хуудас" secondary={data.webUrl} />
        </ListItem>
        <ListItem>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary="Хаяг" secondary={data.location} />
        </ListItem>
      </List>
    </Card>
  )
}

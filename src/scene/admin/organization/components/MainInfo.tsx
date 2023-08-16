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
    "Американ дэнжийн урд угсармалын 3 өрөө байр яаралтай хямд зарна. 3 давхартХуучнаар 38м2 одоогийн 68м2Обойгоо солиод ороход болно. 97-р сургууль, плеханов, 33-р сургууль, шилдэг, могте роса, орос 14-р сургуулиудтай маш ойрхон ",
  email: "myCompany@gmail.com",
  webUrl: "djlskjdkl.com",
  location: "Ulaanbaatar",
  phoneNumber: 123456789,
}
export const MainInfo = () => {
  return (
    <Card>
      <Typography>Тухай</Typography>
      <Typography>{data?.description}</Typography>
      <List>
        <ListItem>
          <ListItemIcon />
          <ListItemText primary="И-мэйл" secondary={data?.email} />
        </ListItem>
        <ListItem>
          <ListItemIcon />
          <ListItemText primary="Утасны дугаар" secondary={data?.phoneNumber} />
        </ListItem>
        <ListItem>
          <ListItemIcon />
          <ListItemText primary="Вэб хуудас" secondary={data?.webUrl} />
        </ListItem>
        <ListItem>
          <ListItemIcon />
          <ListItemText primary="Хаяг" secondary={data.location} />
        </ListItem>
      </List>
    </Card>
  )
}

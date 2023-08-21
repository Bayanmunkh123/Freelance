import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"

import Icon from "src/@core/components/icon"


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
    <Card >
      <Typography>Тухай</Typography>
      <Typography padding={'10px'} >{data?.description}</Typography>
      <List sx={{'& .MuiListItemText-root':{pl: '10px'}}}>

        <ListItem >
        <Icon icon="mdi:email" fontSize={20} />
          <ListItemText primary="И-мэйл" secondary={data?.email}  />
        </ListItem>
        <ListItem>
        <Icon icon="mdi:phone" fontSize={20} />
          <ListItemText primary="Утасны дугаар" secondary={data?.phoneNumber} />
        </ListItem>
        <ListItem>
        <Icon icon="mdi:page-layout-body" fontSize={20} />
          <ListItemText primary="Вэб хуудас" secondary={data?.webUrl} />
        </ListItem>
        <ListItem>
        <Icon icon="mdi:location" fontSize={20} />
          <ListItemText primary="Хаяг" secondary={data.location} />
        </ListItem>
        
      </List>
    </Card>
  )
}

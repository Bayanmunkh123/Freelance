import * as React from "react"

// ** MUI Imports
import Button from "@mui/material/Button"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import ImageList from "@mui/material/ImageList"
import Stack from "@mui/material/Stack"
import ImageListItem from "@mui/material/ImageListItem"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { ListData } from "src/@core/utils/initData"
import { DetailedBox } from "./DetailedBox"
import Grid from "@mui/material/Grid"
import { DetailHeader } from "../../home/components/Header"
import { ConstructionStatusEnum, useProductLandingQuery } from "src/generated"

// ** Icon Imports
import Icon from "src/@core/components/icon"
import { IconButton } from "@mui/material"

export const ProductDetail = ({ id }: { id: string }) => {
  const { data } = useProductLandingQuery({
    variables: {input: {id}},
  });
  console.log(data)
  const [expanded, setExpanded] = React.useState(false)
  const [label, setLabel] = React.useState("Дэлгэрэнгүй харах")
  const handleChange = (bool: boolean) => {
    bool ? setLabel("Хураах") : setLabel("Дэлгэрэнгүй харах")
    setExpanded(bool)
  }
  const date = data?.product?.releaseDate
  const parsedDate = date ?  new Date(date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]
  return (
    <Grid container spacing={2} maxWidth={1300} px="50px" rowGap="15px">
      <DetailHeader />
      <Stack direction="column">
        <Typography variant="h6" fontWeight="bold">
          {data?.product?.name}
        </Typography>
        <Stack direction="row" columnGap="20px" alignItems="center">
          <Typography variant="h6" fontWeight="bold">
            {data?.product?.price}₮
          </Typography>
           {data?.product?.constStatus !== ConstructionStatusEnum.DEFAULT ?
          <Typography
            sx={{
              border: (theme) => `1px solid ${theme.palette.primary.main}`,
              borderRadius: "8px",
              p: "8px 30px",
            }}
          >
        {data?.product?.constStatus === ConstructionStatusEnum.NEWBUILDING ? 'Шинэ' : data?.product?.constStatus === ConstructionStatusEnum.OLD ? 'Хуучин' : data?.product?.constStatus === ConstructionStatusEnum.SOON ? 'Тун удахгүй' : ' '}
          </Typography> : null}
        </Stack>
        <Typography>
          {data?.product?.address1 && data?.product?.district
            ? data.product.address1.concat(" ").concat( data.product.district).concat(" дүүрэг")
            : null}
        </Typography>
      </Stack>
      <Grid container justifyContent='center'>
        <img
          src={data?.product?.images ? data?.product?.images : 'https://images.homes.com/listings/214/1007620603-872007331-original.jpg'
            }
          style={{ borderRadius: "10px", width: 500 }}
        />
        <ImageList
          sx={{
            width: 500,
            height: 450,
            borderRadius: "10px",
          }}
          cols={2}
          rowHeight={164}
        >
            <ImageListItem >
              <img src={data?.product?.ProductRooms?.bathRoom ? data?.product?.ProductRooms?.bathRoom : 'https://images.homes.com/listings/214/1007620603-872007331-original.jpg'} loading="lazy" />
            </ImageListItem>
            <ImageListItem >
              <img src={data?.product?.ProductRooms?.bedRoom ? data?.product?.ProductRooms?.bedRoom : 'https://images.homes.com/listings/214/1007620603-872007331-original.jpg'} loading="lazy" />
            </ImageListItem>
            <ImageListItem >
              <img src={data?.product?.ProductRooms?.kitchenRoom ? data?.product?.ProductRooms?.kitchenRoom : 'https://images.homes.com/listings/214/1007620603-872007331-original.jpg'} loading="lazy" />
            </ImageListItem>
            <ImageListItem >
              <img src={data?.product?.ProductRooms?.livingRoom ? data?.product?.ProductRooms?.livingRoom : 'https://images.homes.com/listings/214/1007620603-872007331-original.jpg'} loading="lazy" />
            </ImageListItem>
        </ImageList>
      </Grid>
      <Divider sx={{ width: "100%" }} />
      <Grid container columnGap="20px">
        <DetailedBox
          title="Нийт өрөө- "
          subTitle={`${data?.product?.roomNumber}`}
          icon="material-symbols:meeting-room-outline"
        />
        <DetailedBox
          title="Угаалгын өрөө- "
          subTitle={`${data?.product?.ProductRooms?.bathNumber}`}
          icon="fa:bathtub"
        />
        <DetailedBox
          title="Унтлагын өрөө- "
          subTitle={`${data?.product?.ProductRooms?.bedNumber}`}
          icon="icon-park-solid:sleep-two"
        />
        <DetailedBox
          title="Гал тогооны өрөө- "
          subTitle={`${data?.product?.ProductRooms?.kitchenNumber}`}
          icon="fa6-solid:kitchen-set"
        />
        <DetailedBox
          title="Зочны өрөө- "
          subTitle={`${data?.product?.ProductRooms?.livingNumber}`}
          icon="mdi:living-room-outline"
        />
      </Grid>
      <Grid container columnGap="20px">
        <DetailedBox
          title="Нийт метр квадрат- "
          subTitle={`${data?.product?.sqr}`}
          icon="ic:baseline-compare-arrows"
        />
        <DetailedBox
          title="Нийт давхар- "
          subTitle={`${data?.product?.floors}`}
          icon="mdi:building"
        />
        <DetailedBox
          title="Давхар- "
          subTitle={`${data?.product?.floorNumber}`}
          icon="fa6-solid:layer-group"
        />
        <DetailedBox
          title="Баригдсан он- "
          subTitle={`${parsedDate}`}
          icon="ph:calendar-check-fill"
        />
        <DetailedBox
          title="Зогсоол- "
          subTitle={`${ListData[0].parking}`}
          icon="material-symbols:directions-car"
        />
      </Grid>
      <Accordion expanded={expanded} onChange={() => handleChange(!expanded)} sx={{width: '100%'}}>
        <AccordionSummary expandIcon={<Icon icon="ep:arrow-down-bold" />}>
          <Grid container justifyContent="space-between">
            <Typography variant="h6" fontWeight="bold">
              Дэлгэрэнгүй мэдээлэл
            </Typography>
            <Typography fontWeight="medium">{label}</Typography>
          </Grid>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{data?.product?.description}</Typography>
        </AccordionDetails>
      </Accordion>
      <Typography variant="h6" fontWeight="bold">
        Байршил
      </Typography>
      <Grid container>
        <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1" />
      </Grid>

      <Typography variant="h6" fontWeight="bold">
        Онцлог
      </Typography>
      <Grid container columnGap="20px" rowGap="20px">
        {ListData[0].highlights.map((item) => (
          <Button
            key={item}
            size="small"
            sx={{
              width: 200,
              borderRadius: '15px',
              fontSize: '12px',
              color: (theme) => theme.palette.grey[600],
              '& .MuiSvgIcon-root': {
                color: (theme) => theme.palette.primary.main,
              },
              '& .MuiButtonBase-root': {
                borderRadius: '30px',
                backgroundColor: (theme) => theme.palette.primary.light,
              },
              boxShadow: (theme) =>
                `1px 1px 1px 1px ${theme.palette.grey[300]}`,
            }}
          >
            <IconButton>
              <Icon icon={"mdi:check-circle"} />
            </IconButton>
            {item}
          </Button>
        ))}
      </Grid>
      <Button
        sx={{
          backgroundColor: "primary.main",
          color: (theme) => theme.palette.customColors.lightBg,
          px: "30px",
          //alignSelf: 'flex-end'
          //left: "80%",
        }}
      >
        Худалдан авах
      </Button>
    </Grid>
  )
}

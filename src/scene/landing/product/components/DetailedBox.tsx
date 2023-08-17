import { Box, IconButton, Typography } from '@mui/material'
/**Icon imports */
import Icon from "src/@core/components/icon"
interface DetailedBoxType {
  title: string;
  subTitle: string;
  icon: string;
}
export const DetailedBox = (props: DetailedBoxType) => {
  const { title, subTitle, icon } = props
  return (
    <Box
      sx={{
        py: 1.25,
        display: 'flex',
        alignItems: 'center',
        '& svg': { color: 'primary.main' },
        '& .MuiButtonBase-root': {
          borderRadius: '30px',
          backgroundColor: (theme) => theme.palette.primary.light,
        },
        columnGap: '20px',
      }}
    >
      <IconButton><Icon icon={icon} /></IconButton>

      <Typography variant="body2">
        {title} {subTitle}
      </Typography>
    </Box>
  )
}

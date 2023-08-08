import { IconButton, Typography } from '@mui/material'
import IconSvg from 'src/layouts/components/IconSvg'
import { useRouter } from 'next/router'
interface ButtonType {
  name: string;
  title: string;
}
export const HomeButton = (props: ButtonType) => {
  const { name, title } = props
  const router = useRouter()
  return (
    <IconButton onClick={() => router.push('/product')}>
      {IconSvg(name)}
      <Typography>{title}</Typography>
    </IconButton>
  )
}

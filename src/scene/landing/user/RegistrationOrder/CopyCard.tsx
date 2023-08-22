// ** React Imports
import { Fragment, useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography, { TypographyProps } from '@mui/material/Typography'
import Card from "@mui/material/Card"
import Grid from "@mui/material/Grid"
import CardContent from '@mui/material/CardContent'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'

interface FileProp {
  name: string
  type: string
  size: number
}

// Styled component for the upload image inside the dropzone area
const Img = styled('img')(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    marginRight: theme.spacing(10)
  },
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4)
  },
  [theme.breakpoints.down('sm')]: {
    width: 250
  }
}))

// Styled component for the heading inside the dropzone area
const HeadingTypography = styled(Typography)<TypographyProps>(({ theme }) => ({
  marginBottom: theme.spacing(5),
  [theme.breakpoints.down('sm')]: {
    marginBottom: theme.spacing(4)
  }
}))

const CopyCard = () => {
  // ** State
  const [files, setFiles] = useState<File[]>([])
  const [imgSrc, setImgSrc] = useState<string>('/images/Group.png')

  // ** Hooks
  const { getRootProps, getInputProps } = useDropzone({
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })
  const renderFilePreview = (file: FileProp) => {
    if (file.type.startsWith('image')) {
      return <img width={38} height={38} alt={file.name} src={URL.createObjectURL(file as any)} />
    } else {
      return <Icon icon='mdi:file-document-outline' />
    }
  }

  const handleRemoveFile = (file: FileProp) => {
    const uploadedFiles = files
    const filtered = uploadedFiles.filter((i: FileProp) => i.name !== file.name)
    setFiles([...filtered])
  }

  const fileList = files.map((file: FileProp) => (
    <ListItem key={file.name}>
      <div className='file-details'>
        <div className='file-preview'>{renderFilePreview(file)}</div>
        <div>
          <Typography className='file-name'>{file.name}</Typography>
          <Typography className='file-size' variant='body2'>
            {Math.round(file.size / 100) / 10 > 1000
              ? `${(Math.round(file.size / 100) / 10000).toFixed(1)} mb`
              : `${(Math.round(file.size / 100) / 10).toFixed(1)} kb`}
          </Typography>
        </div>
      </div>
      <IconButton onClick={() => handleRemoveFile(file)}>
        <Icon icon='mdi:close' fontSize={20} />
      </IconButton>
    </ListItem>
  ))

  const handleRemoveAllFiles = () => {
    setFiles([])
  }

  const ImgStyled = styled('img')(({ theme }) => ({
    width: 217.54,
    height: 216,
    marginRight: theme.spacing(5),
    borderRadius: theme.shape.borderRadius
  }))
  
  return (
    <Grid container spacing={6} direction="column" justifyContent="center" alignContent={"center"} padding="50px" rowGap="50px" >
      
            <Typography color='textSecondary'
        sx={{
          '& a': {
            color: 'primary.main',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute', 
            top: 0, 
            left: 0, 
            marginTop: '5rem', 

          },
        }}
        >           
              <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', justifyContent: 'start', color: 'primary.main' }}>
                <Typography  sx={{color: 'primary.main', textDecoration: 'none'}}><Icon icon="material-symbols:chevron-right" />Иргэний үнэмлэхний хуулбар</Typography>
                <Typography><Icon icon="material-symbols:chevron-right" style={{display:'flex'}}/>Оршин суугаа газрын тодорхойлолт</Typography>
                <Typography><Icon icon="material-symbols:chevron-right" />Ажлын газрын тодорхойлолт</Typography>
                <Typography><Icon icon="material-symbols:chevron-right" />Гадаадад байгаа бол визний хуулбар</Typography>
                <Typography><Icon icon="material-symbols:chevron-right" />Гадаадад байгаа бол гадаад паспортны хуулбар</Typography>
                <Typography><Icon icon="material-symbols:chevron-right" />Дансны хуулга</Typography>
              </div>     
            </Typography> 

                    <div style={{ display: 'flex', justifyContent: 'center'}}>
      
        <Card sx={{boxShadow: 'none' }}>
          <CardContent sx={{textAlign:'center'}}>
          <HeadingTypography variant='h5'>Иргэний үнэмлэхний хуулбар</HeadingTypography>
          <ImgStyled src={imgSrc} alt='Group Pic' />
            <Fragment>
              <div {...getRootProps({ className: 'dropzone' })}>
                <input {...getInputProps()} />
                  <Box sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center'] }}>
                    <Typography>Баримт бичгүүдийн зургын чанар хангасан PDF файлаар хэрэглэгч та бүрэн оруулна уу. </Typography>
                    <Typography color='textSecondary' sx={{ '& a': { color: 'primary.main', textDecoration: 'none' } }}>
                      Файлыг чирж эсвэл{' '}
                      <Link href='/' onClick={e => e.preventDefault()}>
                        энд
                      </Link>{' '}
                      дарж оруулна уу
                    </Typography>
                  </Box>                    
              </div >
              {files.length ? (
                <Fragment>
                  <List>{fileList}</List>
                  <div className='buttons'>
                    <Button variant='contained'>Файл оруулах</Button>
                    <Button color='error' variant='outlined' onClick={handleRemoveAllFiles}>
                      Бүгдийг нь устгах
                    </Button>
                  </div>
                </Fragment>
              ) : null}
                
                  <div style={{ marginTop: '100px'}}> {/* This div will push the button to the bottom */}
                  
                 </div>            
              </Fragment>
          </CardContent>
        </Card>
      
      </div>
    </Grid>
    
  )
}

export default CopyCard

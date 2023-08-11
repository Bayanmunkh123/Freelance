// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import { styled } from '@mui/material/styles'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
import { ProductInputType } from '../utils/ListData'
interface FileProp {
  name: string;
  type: string;
  size: number;
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

const FileUploaderSingle = () => {
  // ** State
  const [files, setFiles] = useState<File[]>([])

  // ** Hook
  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    onDrop: (acceptedFiles: File[]) => {
      setFiles(acceptedFiles.map((file: File) => Object.assign(file)))
    }
  })

  const img = files.map((file: FileProp) => (
    <img key={file.name}  alt={file.name} className='single-file-image' src={URL.createObjectURL(file as any)} />
  ))

  return (
    <Box {...getRootProps({ className: 'dropzone' })} sx={files.length ? { height: 450 } : {height: 200,  p: '40px', border: (theme)=> `1px solid ${theme.palette.grey[400]}`, borderRadius: "20px"}}>
      <input name='images' type="file" {...getInputProps()} />
      {files.length ? (
        img
      ) : (
          <Box  sx={{ display: 'flex', flexDirection: 'column', textAlign: ['center', 'center', 'inherit'], }}>
            <HeadingTypography variant='h6'>Төслийн үндсэн зураг оруулах</HeadingTypography>
              <Link href='/' onClick={e => e.preventDefault()}>
                <AddPhotoAlternateIcon sx={{color: (theme) => theme.palette.primary.main, fontSize: '40px'}} />
              </Link>{' '}
          </Box>
      )}
    </Box>
  )
}

export default FileUploaderSingle

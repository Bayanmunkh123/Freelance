
import * as React from 'react';
// ** React Imports
import { Fragment, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import ListItem from '@mui/material/ListItem'
import { styled } from '@mui/material/styles'
import IconButton from '@mui/material/IconButton'
import Typography, { TypographyProps } from '@mui/material/Typography'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Third Party Imports
import { useDropzone } from 'react-dropzone'
import CopyCard from '../RegistrationOrder/CopyCard'
import CopyPassport from '../RegistrationOrder/CopyPassport'
import CopyVisa from '../RegistrationOrder/CopyVisa'
import DescJob from '../RegistrationOrder/DescJob'
import DescResidence from '../RegistrationOrder/DescResidence'
import Statement from '../RegistrationOrder/Statement'
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

const RegisterOrder = () => {
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
  const steps = [
    'Иргэний үнэмлэхний хуулбар', 
    'Оршин суугаа газрын тодорхойлолт', 
    'Ажлын газрын тодорхойлолт', 
    'Гадаадад байгаа бол визний хуулбар',
    'Гадаадад байгаа бол гадаад паспортны хуулбар',
    'Дансны хуулга' ];

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <CopyCard />;
    case 1:
      return <DescResidence />;
    case 2:
      return <DescJob />;
    case 3:
      return <CopyVisa />;
    case 4:
      return <CopyPassport />;
    case 5:
      return <Statement />;
    default:
      throw new Error('Unknown step');
  }
}

const [activeStep, setActiveStep] = React.useState(0);

const handleNext = () => {
  setActiveStep(activeStep + 1);
};

const handleBack = () => {
  setActiveStep(activeStep - 1);
};

  return (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box justifyContent={'center'} sx={{ display: 'flex', justifyContent: 'center',  marginTop: -40 }}>
                      {activeStep !== 0 && (
                        <Button onClick={handleBack} sx={{ mt: 6, ml: 1 }}>
                          <Icon icon="material-symbols:chevron-left" />Буцах
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 6, ml: 1 }}
                      >
                        <Icon icon="material-symbols:chevron-right"/>{activeStep === steps.length - 1 ? 'Дуусгах' : 'Дараах'}
                        
                      </Button>
              </Box>
            </React.Fragment>
  )
}

export default RegisterOrder

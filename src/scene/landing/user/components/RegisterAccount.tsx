// ** React Imports
import { useState, ElementType, ChangeEvent } from "react"

// ** Next Import
import { useRouter } from "next/router"

// ** MUI Imports
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Divider from "@mui/material/Divider"
import MenuItem from "@mui/material/MenuItem"
import TextField from "@mui/material/TextField"
import Typography from "@mui/material/Typography"
import InputLabel from "@mui/material/InputLabel"
import FormControl from "@mui/material/FormControl"
import CardContent from "@mui/material/CardContent"
import Button, { ButtonProps } from "@mui/material/Button"
import Select from "@mui/material/Select"
import { styled } from "@mui/material/styles"

// ** Third Party Imports
import { useForm, Controller } from "react-hook-form"
import { countries } from "src/@fake-db/autocomplete"
import Autocomplete from "@mui/material/Autocomplete"
import { useMutation } from "@apollo/client"
import { UserWhereInput, useLandingUserQuery } from "src/generated"
import { UPDATE_USER } from "../utils/mutations"
import { UserUpdateInput } from "src/generated"

// ** Icon Imports
import Icon from "src/@core/components/icon"
import React from "react"

interface Data {
  state: string
  address: string
  country: string
  timezone: string
  registerId: number | string
  number: number
  firstLetter: string
  secondLetter: string
  workSector: string
  duration: number | string
  income: number | string
  visaCategory: number | string
  workYear: number
}
interface CountryType {
  code: string
  label: string
  phone: string
}

const ImgStyled = styled("img")(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(5),
  borderRadius: theme.shape.borderRadius,
}))

const ButtonStyled = styled(Button)<
  ButtonProps & { component?: ElementType; htmlFor?: string }
>(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    textAlign: "center",
  },
}))

export const RegisterAccount = ({ userId }: { userId: string }) => {
  const { data } = useLandingUserQuery({
    variables: { where: { id: userId } },
  })
  console.log(data)
  const initialData: Data = {
    state: "",
    address: "",
    country: "",
    timezone: "",
    registerId: "",
    number: 0,
    firstLetter: "",
    secondLetter: "",
    workSector: "",
    duration: "",
    income: "",
    visaCategory: "",
    workYear: 0,
  }
  const [inputValue, setInputValue] = useState<string>("")
  const [formData, setFormData] = useState<Data>(initialData)
  const [imgSrc, setImgSrc] = useState<string>("/images/avatars/1.png")
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: { checkbox: false } })

  const router = useRouter()

  const handleInputImageChange = (file: ChangeEvent) => {
    const reader = new FileReader()
    const { files } = file.target as HTMLInputElement
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result as string)
      reader.readAsDataURL(files[0])

      if (reader.result !== null) {
        setInputValue(reader.result as string)
      }
    }
  }

  const handleFormChange = (field: keyof Data, value: Data[keyof Data]) => {
    setFormData({ ...formData, [field]: value })
  }

  return (

    <Grid sx={{width: '100%', maxWidth: '100%', margin: '0'}}>
    <form>
      
      <CardContent sx={{ pt: 0 }}>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <ImgStyled src={imgSrc} alt="Profile Pic" />
          <div>
            <ButtonStyled
              component="label"
              variant="contained"
              htmlFor="account-settings-upload-image"
            >
              Зураг нэмэх
              <input
                hidden
                type="file"
                value={inputValue}
                accept="image/png, image/jpeg"
                onChange={handleInputImageChange}
                id="account-settings-upload-image"
              />
            </ButtonStyled>
            <Typography sx={{ mt: 5, color: "text.disabled" }}>
              Зөвхөн JPG,PNG өргөтгөлтэй зураг оруулна уу.
            </Typography>
          </div>
        </Box>
      </CardContent>
      <Divider />
      <CardContent>
        <Grid container spacing={6}>
          {/* Регистрийн дугаар */}
          <Grid
            item
            xs={12}
            sm={6}
            sx={{ display: "flex", flexDirection: "row" }}
          >
            <Grid
              item
              xs={4}
              sm={3}
              sx={{ display: "flex", flexDirection: "row" }}
            >
              <FormControl fullWidth>
                <Select
                  label="Регистрийн дугаар"
                  value={formData.firstLetter}
                  onChange={(e) =>
                    handleFormChange("firstLetter", e.target.value)
                  }
                >
                  <MenuItem value="А">А</MenuItem>
                  <MenuItem value="Б">Б</MenuItem>
                  <MenuItem value="В">В</MenuItem>
                  <MenuItem value="Г">Г</MenuItem>
                  <MenuItem value="Д">Д</MenuItem>
                  <MenuItem value="Е">Е</MenuItem>
                  <MenuItem value="Ё">Ё</MenuItem>
                  <MenuItem value="Ж">Ж</MenuItem>
                  <MenuItem value="З">З</MenuItem>
                  <MenuItem value="И">И</MenuItem>
                  <MenuItem value="Й">Й</MenuItem>
                  <MenuItem value="К">К</MenuItem>
                  <MenuItem value="Л">Л</MenuItem>
                  <MenuItem value="М">М</MenuItem>
                  <MenuItem value="Н">Н</MenuItem>
                  <MenuItem value="О">О</MenuItem>
                  <MenuItem value="Ө">Ө</MenuItem>
                  <MenuItem value="П">П</MenuItem>
                  <MenuItem value="Р">Р</MenuItem>
                  <MenuItem value="С">С</MenuItem>
                  <MenuItem value="Т">Т</MenuItem>
                  <MenuItem value="У">У</MenuItem>
                  <MenuItem value="Ү">Ү</MenuItem>
                  <MenuItem value="Ф">Ф</MenuItem>
                  <MenuItem value="Х">Х</MenuItem>
                  <MenuItem value="Ц">Ц</MenuItem>
                  <MenuItem value="Ч">Ч</MenuItem>
                  <MenuItem value="Ш">Ш</MenuItem>
                  <MenuItem value="Щ">Щ</MenuItem>
                  <MenuItem value="Ъ">Ъ</MenuItem>
                  <MenuItem value="Ь">Ь</MenuItem>
                  <MenuItem value="Ы">Ы</MenuItem>
                  <MenuItem value="Э">Э</MenuItem>
                  <MenuItem value="Ю">Ю</MenuItem>
                  <MenuItem value="Я">Я</MenuItem>
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <Select
                  label="Регистрийн дугаар"
                  value={formData.secondLetter}
                  onChange={(e) =>
                    handleFormChange("secondLetter", e.target.value)
                  }
                >
                  <MenuItem value="A">А</MenuItem>
                  <MenuItem value="Б">Б</MenuItem>
                  <MenuItem value="В">В</MenuItem>
                  <MenuItem value="Г">Г</MenuItem>
                  <MenuItem value="Д">Д</MenuItem>
                  <MenuItem value="Е">Е</MenuItem>
                  <MenuItem value="Ё">Ё</MenuItem>
                  <MenuItem value="Ж">Ж</MenuItem>
                  <MenuItem value="З">З</MenuItem>
                  <MenuItem value="И">И</MenuItem>
                  <MenuItem value="Й">Й</MenuItem>
                  <MenuItem value="К">К</MenuItem>
                  <MenuItem value="Л">Л</MenuItem>
                  <MenuItem value="М">М</MenuItem>
                  <MenuItem value="Н">Н</MenuItem>
                  <MenuItem value="О">О</MenuItem>
                  <MenuItem value="Ө">Ө</MenuItem>
                  <MenuItem value="П">П</MenuItem>
                  <MenuItem value="Р">Р</MenuItem>
                  <MenuItem value="С">С</MenuItem>
                  <MenuItem value="Т">Т</MenuItem>
                  <MenuItem value="У">У</MenuItem>
                  <MenuItem value="Ү">Ү</MenuItem>
                  <MenuItem value="Ф">Ф</MenuItem>
                  <MenuItem value="Х">Х</MenuItem>
                  <MenuItem value="Ц">Ц</MenuItem>
                  <MenuItem value="Ч">Ч</MenuItem>
                  <MenuItem value="Ш">Ш</MenuItem>
                  <MenuItem value="Щ">Щ</MenuItem>
                  <MenuItem value="Ъ">Ъ</MenuItem>
                  <MenuItem value="Ь">Ь</MenuItem>
                  <MenuItem value="Ы">Ы</MenuItem>
                  <MenuItem value="Э">Э</MenuItem>
                  <MenuItem value="Ю">Ю</MenuItem>
                  <MenuItem value="Я">Я</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <TextField
              fullWidth
              label="Регистрийн дугаар"
              value={formData.registerId}
              onChange={(e) => handleFormChange("registerId", e.target.value)}
            />
            </Grid>
          {/* Оршин суугаа улс */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <Autocomplete
                autoHighlight
                id="autocomplete-country-select"
                options={countries as CountryType[]}
                getOptionLabel={(option) => option.label || ""}
                value={countries.find((country) => country.label === formData.country) || null}
                onChange={(event, value) => handleFormChange("country", value?.label || "")}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 4, flexShrink: 0 } }}
                    {...props}
                  >
                    <img
                      alt=""
                      width="20"
                      loading="lazy"
                      src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                      srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                    />
                    {option.label} ({option.code}) +{option.phone}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}

                    label="Оршин суугаа улс"
                    inputProps={{
                      ...params.inputProps,
                    }}
                  />
                )}
              />
            </FormControl>
          </Grid>

          {/* Оршин суугаа хаяг */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Оршин суугаа хаяг"
              placeholder="Улаанбаатар хот, Баянзүрх дүүрэг, 2-р Хороо"
              value={formData.address}
              onChange={(e) => handleFormChange("address", e.target.value)}
            />
          </Grid>

          {/* Ажиллаж буй салбар */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth sx={{ "& .MuiOutlinedInput-root": { borderRadius: 1, borderColor: "#yourBorderColor", borderWidth: 2 } }}
              label="Ажиллаж буй салбар"
              value={formData.workSector}
              onChange={(e) => handleFormChange("workSector", e.target.value)}
            />
          </Grid>

          {/* Оршин суугаа хугацаа */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth >
              <InputLabel>Оршин суугаа хугацаа</InputLabel>
              <Select
                
                label="duration"
                value={formData.duration}
                onChange={(e) => handleFormChange("duration", e.target.value)}
              >
                <MenuItem value="1">1 жил</MenuItem>
                <MenuItem value="2">2 жил</MenuItem>
                <MenuItem value="3">3 жил</MenuItem>
                <MenuItem value="4">4 жил</MenuItem>
                <MenuItem value="5">5 жил</MenuItem>
                <MenuItem value="6">6 жил</MenuItem>
                <MenuItem value="7">7 жил</MenuItem>
                <MenuItem value="8">8 жил</MenuItem>
                <MenuItem value="9">9 жил</MenuItem>
                <MenuItem value="10">10-аас дээш жил</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Өрхийн сарын орлого */}
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Өрхийн сарын орлого</InputLabel>
              <Select
                label="income"
                value={formData.income}
                onChange={(e) => handleFormChange("income", e.target.value)}
              >
                <MenuItem value=""></MenuItem>
                <MenuItem value="500000-1000000">500'000₮-1'000'000₮</MenuItem>
                <MenuItem value="1000001-200000">
                  1'000'001₮-2'000'000₮
                </MenuItem>
                <MenuItem value="2000001-300000">
                  2'000'001₮-3'000'000₮
                </MenuItem>
                <MenuItem value="3000001-400000">
                  3'000'001₮-4'000'000₮
                </MenuItem>
                <MenuItem value="4000001-500000">
                  4'000'001₮-5'000'000₮
                </MenuItem>
                <MenuItem value="5000000+">5'000'000₮+</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          {/* Визний ангилал */}
          <Grid item xs={24} sm={12}>
            <FormControl fullWidth>
              <InputLabel>Гадаадад байгаа бол визний ангилал</InputLabel>
              <Select
                label="visaCategory"
                value={formData.visaCategory}
                onChange={(e) =>
                  handleFormChange("visaCategory", e.target.value)
                }
              >
                <MenuItem value="A1">A1</MenuItem>
                <MenuItem value="A1-1">A1-1</MenuItem>
                <MenuItem value="A2">A2</MenuItem>
                <MenuItem value="A2-1">A2-1</MenuItem>
                <MenuItem value="A3-1">A3-1</MenuItem>
                <MenuItem value="B1">B1</MenuItem>
                <MenuItem value="B1-1">B1-1</MenuItem>
                <MenuItem value="B2">B2</MenuItem>
                <MenuItem value="B2-1">B2-1</MenuItem>
                <MenuItem value="B3">B3-1</MenuItem>
                <MenuItem value="C1">C1</MenuItem>
                <MenuItem value="C1-1">C1-1</MenuItem>
                <MenuItem value="C2">C2</MenuItem>
                <MenuItem value="C2-1">C2-1</MenuItem>
                <MenuItem value="C3">C3</MenuItem>
                <MenuItem value="C4">C4</MenuItem>
                <MenuItem value="C4-1">C4-1</MenuItem>
                <MenuItem value="C5">C5</MenuItem>
                <MenuItem value="C5-1">C5-1</MenuItem>
                <MenuItem value="C6">C6</MenuItem>
                <MenuItem value="C6-1">C6-1</MenuItem>
                <MenuItem value="C7">C7</MenuItem>
                <MenuItem value="C7-1">C7-1</MenuItem>
                <MenuItem value="C8">C8</MenuItem>
                <MenuItem value="C8-1">C8-1</MenuItem>
                <MenuItem value="C9">C9</MenuItem>
                <MenuItem value="C9-1">C9-1</MenuItem>
                <MenuItem value="C10">C10</MenuItem>
                <MenuItem value="C11">C11</MenuItem>
                <MenuItem value="E1">E1</MenuItem>
                <MenuItem value="E2">E2</MenuItem>
                <MenuItem value="E2-1">E2-1</MenuItem>
                <MenuItem value="E3">E3</MenuItem>
                <MenuItem value="E4">E4</MenuItem>
                <MenuItem value="E5">E5</MenuItem>
                <MenuItem value="E5-1">E5-1</MenuItem>
                <MenuItem value="F1">F1</MenuItem>
                <MenuItem value="F1-1">F1-1</MenuItem>
                <MenuItem value="F2">F2</MenuItem>
                <MenuItem value="F2-1">F2-1</MenuItem>
                <MenuItem value="F3">F3</MenuItem>
                <MenuItem value="F3-1">F3-1</MenuItem>
                <MenuItem value="G">G</MenuItem>
                <MenuItem value="G-1">G-1</MenuItem>
                <MenuItem value="H1">H1</MenuItem>
                <MenuItem value="H1-1">H1-1</MenuItem>
                <MenuItem value="H2">H2</MenuItem>
                <MenuItem value="H2-1">H2-1</MenuItem>
                <MenuItem value="H3">H3</MenuItem>
                <MenuItem value="J">J</MenuItem>
                <MenuItem value="J-1">J-1</MenuItem>
                <MenuItem value="K1">K1</MenuItem>
                <MenuItem value="K2">K2</MenuItem>
                <MenuItem value="K3">K3</MenuItem>
                <MenuItem value="K4">K4</MenuItem>
                <MenuItem value="K5">K5</MenuItem>
                <MenuItem value="K6">K6</MenuItem>
                <MenuItem value="K7">K7</MenuItem>
                <MenuItem value="K8">K8</MenuItem>
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <Button variant="contained" sx={{ mr: 3 }}>
              Хадгалах
            </Button>
            <Button
              type="reset"
              variant="outlined"
              color="secondary"
              onClick={() => {
                setFormData(initialData);
            }}            
            >
              Устгах
            </Button>
          </Grid>
        </Grid>
      </CardContent>
      
    </form>
    </Grid>
  )
}

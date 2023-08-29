import { ActionTypeEnum, BannerStatusEnum, ConstructionStatusEnum, ProductInput } from "src/generated"
import { FormInitial } from "./components/FormInitial"

export const CreateProduct = () =>{
  const initialValues = {
    images: '',
    actionType: ActionTypeEnum.PURCHASE,
    name: '',
    city: '',
    district: '',
    address1: '',
    sqr: 0,
    priceSqr: 0,
    releaseDate: new Date(),
    floors: 1,
    floorNumber: 1,
    roomNumber: 1,
    constStatus: ConstructionStatusEnum.NEWBUILDING,
    bannerStatus: BannerStatusEnum.HIGHLIGTH,
    description: '',
    price: 0,
    organizationId: '',
    bathNumber: 1,
    bathRoom:'',
    bedNumber: 1,
    bedRoom: '',
    kitchenNumber: 1,
    kitchenRoom: '',
    livingNumber: 1,
    livingRoom: '',
    viewWindow: '',
  } as ProductInput
  return <FormInitial actionType="create" initialValues={initialValues} id={null}/>
}



import { useRouter } from "next/router";
import { ProductDetail } from "src/scene/landing/product/components/ProductDetail";

const Product = () => {
    const router = useRouter()
    console.log(router)
    const _query = router.query
    const _id = _query?.id as string 
    return <ProductDetail id={_id} />
}
export default Product
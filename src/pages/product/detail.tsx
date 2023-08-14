import { useRouter } from "next/router";
import { ProductDetail } from "src/scene/landing/product/components/ProductDetail";

const Product = () => {
    const router = useRouter()
    const {id } = router.query
    //console.log("id",id)
    return <ProductDetail id={id} />
}
export default Product
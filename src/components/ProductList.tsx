import { ReactElement } from "react";
import useCart from "../hooks/useCart";
import useProducts from "../hooks/useProducts";

const ProductList = () => {
  const { dispatch, REDUCER_ACTIONS, cart } = useCart()
  const {products} = useProducts()

  let pageContent: ReactElement | ReactElement[] = <p>Loading...</p>

  if (products?.length) {
    pageContent = products.map(product => {
      const inCart: boolean = cart.some(item => item.sku === product.sku)

      return (
        
      )
    })
  }
  return ( 
    <div>Product List</div>
   );
}
 
export default ProductList;
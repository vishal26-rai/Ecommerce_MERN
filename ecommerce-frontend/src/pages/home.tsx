import { Link } from "react-router-dom"
import ProductCard from "../components/product-card"
import { CartItem } from "../types/types"; // Adjust the import path as necessary
import { useLatestProductsQuery } from "../redux/api/productAPI";

const home = () => {

  const {data} = useLatestProductsQuery("")

  const addToCartHandler = (cartItem: CartItem): string | undefined => {
    // Implement the handler logic here
    return undefined;
  };
  return (
    <div className="home">
      <section></section>
      <h1>Latest Products
        <Link to = "/search" className="findmore">
        More</Link>
      </h1>
      <main>
        {data?.products.map((i) => (
          <ProductCard
            key={i._id}
            productId={i._id}
            price={i.price}
            name={i.name}
            photo={i.photo}
            stock={i.stock}
            handler={addToCartHandler}
          />
        ))}
      </main>
    </div>
  )
}

export default home
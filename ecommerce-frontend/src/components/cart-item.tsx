import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
// import { server } from "../redux/store";
// import { CartItem } from "../types/types";

type CartItemProps = {
  // cartItem: CartItem;
  // incrementHandler: (cartItem: CartItem) => void;
  // decrementHandler: (cartItem: CartItem) => void;
  // removeHandler: (id: string) => void;
  cartItem:any;
};

const CartItem = ({
  cartItem,
  // incrementHandler,
  // decrementHandler,
  // removeHandler,
}: CartItemProps) => {
  const { photo, productId, name, price, quantity } = cartItem;

  return (
    <div className="cart-item">
      <img src={photo} alt={name} />
      <article>
        <Link to={`/product/${productId}`}>{name}</Link>
        <span>₹{price}</span>
      </article>

      <div>
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>

      <button>
        <FaTrash />
      </button>
    </div>
  );
};

export default CartItem;
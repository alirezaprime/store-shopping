import { Link } from "react-router-dom";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingBagCheck } from "react-icons/tb";
import { shortenText } from "../helper/helper";
import { MdDeleteOutline } from "react-icons/md";

import { productQuantity } from "../helper/helper";

import styles from "./Card.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  increase,
  decrease,
} from "../features/cart/cartSlice";
// import { useCart } from "../context/CartContext";

function Card({ data }) {
  const { id, title, image, price } = data;
  // const [state, dispatch] = useCart();
  const state = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  // console.log(store);

  const quantity = productQuantity(state, id);
  // console.log(quantity);
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <h3>{shortenText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          {quantity === 1 && (
            <button onClick={() => dispatch(removeItem(data))}>
              <MdDeleteOutline />
            </button>
          )}

          {quantity > 1 && (
            <button onClick={() => dispatch(decrease(data))}>-</button>
          )}
          {!!quantity && <span>{quantity}</span>}
          {quantity === 0 ? (
            <button onClick={() => dispatch(addItem(data))}>
              <TbShoppingBagCheck />
            </button>
          ) : (
            <button onClick={() => dispatch(increase(data))}>+</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

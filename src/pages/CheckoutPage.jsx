import { useDispatch, useSelector } from "react-redux";
import BasketCard from "../components/BasketCard";
// import { useCart } from "../context/CartContext";
import BasketSidebar from "../components/BasketSidebar";

import styles from "./CheckoutPage.module.css";

function CheckoutPage() {
  const state = useSelector((store) => store.state);
  // const [state, dispatch] = useCart();

  // console.log(state);

  // if (!state.itemsCounter) {
  //   return (
  //     <div className={styles.container}>
  //       <p>Empty</p>
  //     </div>
  //   );
  // }
  return (
    <div className={styles.container}>
      <BasketSidebar state={state} clickHandler={clickHandler} />
      <div className={styles.products}>
        {state.selectedItems.map((product) => (
          <BasketCard
            key={product.id}
            data={product}
            clickHandler={clickHandler}
          />
        ))}
      </div>
    </div>
  );
}

export default CheckoutPage;

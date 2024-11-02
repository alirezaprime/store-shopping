import { Link, useParams } from "react-router-dom";
import { SiOpenproject } from "react-icons/si";
import { IoMdPricetag } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect } from "react";
import fetchProducts from "../features/product/productSlice";

// import { useProductDetails } from "../context/ProductContext";
import Loader from "../components/Loader";

import styles from "./DetailsPage.module.css";
import { useDispatch, useSelector } from "react-redux";

function DetailsPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  const productDetails = useSelector((store) =>
    store.product.products.find((item) => item.id === +id)
  );

  if (!productDetails) return <Loader />;
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p className={styles.description}>{productDetails.description}</p>
        <p className={styles.category}>
          <SiOpenproject />
          {productDetails.category}
        </p>
        <div>
          <span className={styles.price}>
            <IoMdPricetag />
            {productDetails.price} $
          </span>
          <Link to="/products">
            <FaArrowLeft />
            <span>Back To Shop</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;

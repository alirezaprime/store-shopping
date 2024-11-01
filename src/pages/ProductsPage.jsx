import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { useProducts } from "../context/ProductContext";

import Card from "../components/Card";
import Loader from "../components/Loader";

import Styles from "./ProductsPage.module.css";
import {
  filterProducts,
  getInitialQuery,
  searchProducts,
} from "../helper/helper";
import SearchBox from "../components/SearchBox";
import SideBar from "../components/SideBar";

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  // const products = useProducts();
  const products = [];

  useEffect(() => {
    setDisplayed(products);
    //////این تیکه رو بردی توی فایل هلپرز و اونجا به صورت فانکشن نوشتی ////////
    // const query = {};                                                         //
    // const category = searchParams.get("gategory");                            //
    // const search = searchParams.get("search");                                //
    // if (category) query.category = category;                                  //
    // if (search) query.search = search;                                        //
    /////////////فانکشن مربوطه اش هست : getInitialQuery///////////////////////////
    setQuery(getInitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  // console.log(products);

  //این کد ها هم برای اختصار این کامپوننت به کامپوننت SideBar.js منتقل شده/////////////
  // const categoryHandler = (event) => {                                                //
  //   const { tagName } = event.target;                                                 //
  //   const category = event.target.innerText.toLowerCase();                            //
  //   // setQuery((query) => ({ ...query, category: category }));                       //
  //                                                                                     //
  //   if (tagName !== "LI") return;                                                     //
  //   setQuery((query) => createQueryObject(query, { category: category }));            //
  //   // console.log(category);                                                         //
  // };                                                                                  //
  /////////////////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      {/* <div> // برای این تیکه از کد هام برای اختصار چون کامپوننت ام بزرگ شده یک کامپوننت دیگه ایجاد کردم و کد های کامنت شده ی این قسمت رو به اونجا انتقالش دادم که اسمش هم هست SearchBox.jsx
        <input
          type="text"
          placeholder="Search ..."
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
        />
        <button onClick={searchHandler}>
          <ImSearch />
        </button>
      </div> */}
      <div className={Styles.container}>
        <div className={Styles.products}>
          {!displayed.length && <Loader />}
          {displayed.map((p) => (
            <Card key={p.id} data={p} />
            // <p key={p.id}>{p.title}</p>
          ))}
        </div>
        <SideBar query={query} setQuery={setQuery} />
        {/* <div>
          <div>
            <FaListUl />
            <p>categories</p>
            <ul onClick={categoryHandler}>
              <li>All</li>
              <li>Electronics</li>
              <li>Jewelery</li>
              <li>Men's Clothing</li>
              <li>Women's Clothing</li>
            </ul>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ProductsPage;

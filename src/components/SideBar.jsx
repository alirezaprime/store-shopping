import { FaListUl } from "react-icons/fa";
import { createQueryObject } from "../helper/helper";

import styles from "./SideBar.module.css";
import { categories } from "../constants/list";

function SideBar({ query, setQuery }) {
  const categoryHandler = (event) => {
    const { tagName } = event.target;
    const category = event.target.innerText.toLowerCase();
    // setQuery((query) => ({ ...query, category: category }));

    if (tagName !== "LI") return;
    setQuery((query) => createQueryObject(query, { category: category }));
    // console.log(category);
  };
  return (
    <div className={styles.sidebar}>
      <div>
        <FaListUl />
        <p>categories</p>
      </div>
      <ul onClick={categoryHandler}>
        {/*////////////////////به کد های این تیکه دقت داشته باش که میاد و میگه اگه مقدار کتگوری توی کویری  امون برابر بود با مقداری که اینجا هر ایتم داره بیا و بهش کلاس سلکتد رو بده این کار درواقع باعث تمیز تر شدن کد هامون میشه */}
        {categories.map((item) => (
          <li
            key={item.id}
            className={
              item.type.toLowerCase() === query.category
                ? styles.selected
                : null
            }
          >
            {item.type}
          </li>
        ))}
        {/*////////////////////به کد های این تیکه دقت داشته باش که میاد و میگه اگه مقدار کتگوری توی کویری  امون برابر بود با مقداری که اینجا هر ایتم داره بیا و بهش کلاس سلکتد رو بده این کار درواقع باعث تمیز تر شدن کد هامون میشه */}
      </ul>
    </div>
  );
}

export default SideBar;

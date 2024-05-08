import React from "react";
import styles from "./home.module.css";
import Button from "../../ui/buttons/Button";

import FooterPage from "../footer/FooterPage";

import OurBrand from "../ourBrand/OurBrand";

const Home = () => {
  return (
    <div className={styles.home}>
      {/* firstPage */}
      <div className={styles.page_first}>
        <div className={styles.page_inner}>
          <div className={styles.page_inner__left}>
            <div className={styles.p_i__Ltop}>
              <span>
                The furniture brand for the future, with timeless designs
              </span>
              <Button>View collection</Button>
            </div>
            <div className={styles.p_i__Lbottom}>
              <p>
                A new era in eco friendly furniture with Avelon, the French
                luxury retail brand with nice fonts, tasteful colors and a
                beautiful way to display things digitally using modern web
                technologies.
              </p>
            </div>
          </div>
          <div className={styles.page_inner__rigth}>
            <img
              src="https://s3-alpha-sig.figma.com/img/318c/9b7a/b01e6c4660bc72629bd073b338a795ca?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iSfb~QcwI1f1-ODL4ETOWE4x02byb3NOgb5Z3---e760Y1IOLH1PZaY3Irb5WrcFeXHV6HaYdoODWhy9-rXPfCRYZls9gkNLpUHSZENS9pLfuPv6ziYvmZKUWKM17lgZ3zLhVHBrHQCXu3m64SZsYwKesUp02BvzGd0lMUeLLsdof69ZzXE4iwqDTxZOIYbUs1OTcoJR8DfP~sHU82UBIbUZM~8IfYbpO7Ev13YKs~v6dJFGG5t2cqbAkyj1UsWWjlSv-HDjzCBuYPhH0mOkMeYcnQZmPNh11f7oE8-6Zvz4lrQua-9qgxYQ2T7~4x9kG4AJagT3ceXa3kv4TaTmAQ__"
              alt=""
            />
          </div>
        </div>
      </div>
      <div>

       

        {/* secondPage  */}
        <OurBrand />
        <FooterPage />
      </div>
    </div>
  );
};

export default Home;

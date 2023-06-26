import React, { useEffect, useState } from "react";
import { axiosEcommerce } from "../utils/configAxios";
import Product from "../components/layout/Home/Product";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([])
  const [productName, setProductName] = useState("")
  const [currentCategory, setCurrentCategory] = useState("")

  const productsByName = products.filter((product) => product.title.toLowerCase().includes(productName))
  console.log(productsByName);

  const handleSubmit = (e)=> {
    e.preventDefault()
    const currentProductName = e.target.productName.value
    setProductName(currentProductName.toLowerCase())
  }

  const handleClickCategory = (e) => {
    const category = e.target.dataset.category
    setCurrentCategory(category)
  }

  useEffect(() => {
    axiosEcommerce
      .get("/categories")
      .then(({ data }) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axiosEcommerce
      .get("/products")
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div>
          <input id="productName" type="text" />
          <button>
            <i className="bx bx-search"></i>
          </button>
        </div>
        <section>
          <h4>Category</h4>
          <ul className="text-black">
            <li data-category='0' onClick={handleClickCategory} className="cursor-pointer">All</li>
            {categories.map((category) => (
              <li data-category={category.id} onClick={handleClickCategory} className="cursor-pointer" key={category.id}>{category.name}</li>
            ))}
          </ul>
        </section>
        <section className="grid gap-10 p-2">
          {
            productsByName.map((product) => (
              <Product key={product.id} product={product}/>
            ))
          }
        </section>
      </form>
    </section>
  );
};

export default Home;

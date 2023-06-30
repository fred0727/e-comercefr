import React, { useEffect, useState } from "react";
import { axiosEcommerce } from "../utils/configAxios";
import Product from "../components/layout/Home/Product";
import Footer from "../components/layout/Footer";
import { FiFilter } from "react-icons/fi";
import Filters from "../components/Filters/Filters";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState("");
  const [currentCategory, setCurrentCategory] = useState("");
  const [isShowFilters, setIsShowFilters] = useState(false);
  const [filterPrice, setFilterPrice] = useState("");

  const productsByName = products.filter((product) =>
    product.title.toLowerCase().includes(productName)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentProductName = e.target.productName.value;
    setProductName(currentProductName.toLowerCase());
  };

  const handleClickCategory = (e) => {
    const category = e.target.dataset.category;
    setCurrentCategory(category);
  };

  const handleChangeShowFilters = () => {
    setIsShowFilters(!isShowFilters);
  };

  useEffect(() => {
    axiosEcommerce
      .get("/categories")
      .then(({ data }) => setCategories(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    axiosEcommerce
      .get(`/products?categoryId=${currentCategory}`)
      .then(({ data }) => setProducts(data))
      .catch((err) => console.log(err));
  }, [currentCategory]);

  useEffect(() => {
    setFilterPrice("");
  }, [currentCategory, productName]);

  return (
    <div className="">
      <section
        className="fixed top-0 bg-white h-screen w-[300px] py-20 px-4 hidden lg:flex"
      >
        <Filters
          isShowFilters={isShowFilters}
          handleChangeShowFilters={handleChangeShowFilters}
          handleClickCategory={handleClickCategory}
          categories={categories}
          products={products}
          setFilterPrice={setFilterPrice}
        />
      </section>
      <section className="px-6 pt-16 min-h-screen mb-[90px] md:max-w-[650px] mx-auto lg:ml-[300px] lg:max-w-full lg:pt-24">
        <form onSubmit={handleSubmit} className=" w-full flex flex-col mb-8 lg:max-w-[750px] lg:mx-auto">
          <div className="flex pt-8 pb-4 items-center">
            <input
              id="productName"
              type="text"
              placeholder="What are you looking for?"
              className="w-full h-full border-[1px] -border--light-gray py-3 outline-none px-4 text-sm lg:text-lg"
            />
            <button className="flex justify-center items-center w-[60px] -bg--primary py-2 outline-none border-0 m-0 lg:h-[49px]">
              <i className="bx bx-search text-xl text-white"></i>
            </button>
          </div>
          <section className="w-full flex justify-end -text--text-gray lg:hidden">
            <div
              className="flex gap-2 items-center"
              onClick={handleChangeShowFilters}
            >
              <FiFilter className="text-xl" />
              <span className="text-md">Filters</span>
            </div>
          </section>
        </form>

        <section className="grid gap-10 p-2 lg:grid-cols-[repeat(auto-fill,_300px)] lg:gap-4 lg:justify-center">
          {filterPrice
            ? filterPrice.map((product) => (
                <Product key={product.id} product={product} />
              ))
            : productsByName.map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </section>
      </section>
      <section
        className={`fixed top-0 bg-white h-screen ${
          isShowFilters ? "right-0" : "-right-full"
        } w-[300px] transition-all duration-500 py-4 px-4 shadow-2xl shadow-black/30 z-20`}
      >
        <Filters
          isShowFilters={isShowFilters}
          handleChangeShowFilters={handleChangeShowFilters}
          handleClickCategory={handleClickCategory}
          categories={categories}
          products={products}
          setFilterPrice={setFilterPrice}
        />
      </section>
      <div className="lg:absolute w-full">
      <Footer />

      </div>
    </div>
  );
};

export default Home;

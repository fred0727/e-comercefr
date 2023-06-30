import React, { useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const Filters = ({
  handleChangeShowFilters,
  handleClickCategory,
  categories,
  products,
  setFilterPrice,
}) => {
  const [isShowFilterPrice, setIsShowFilterPrice] = useState(true);
  const [isShowCategory, setIsShowCategory] = useState(true);

  const handleShowFilterPrice = () => setIsShowFilterPrice(!isShowFilterPrice);
  const handleShowFilterCategory = () => setIsShowCategory(!isShowCategory);

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = Number(e.target.fromPrice.value);
    const to = Number(e.target.toPrice.value);
    const message = document.getElementById("messageFilter");
    if (from > to) {
      message.innerHTML = "From cannot be less than To";
    } else {
      const productsFilter = products.filter((product) => {
        if (Number(product.price) > from && Number(product.price) <= to) {
          return product;
        }
      });
      if (productsFilter.length == 0) {
        message.innerHTML = "No products found";
      } else {
        setFilterPrice(productsFilter);
        setTimeout(() => {
          e.target.reset();
        }, 3000);
      }
    }
    setTimeout(() => {
      message.innerHTML = "";
    }, 3000);
  };

  return (
    <div>
      <div className="flex justify-end pb-5">
        <AiFillCloseCircle
          className="text-2xl -text--primary cursor-pointer lg:hidden"
          onClick={handleChangeShowFilters}
        />
      </div>
      <h3 className="font-medium text-xl lg:hidden">Filters</h3>
      <h4
        className="font-medium text-xl border-b-[1px] flex justify-between items-center mt-4 pb-2"
        onClick={handleShowFilterPrice}
      >
        Price
        {isShowFilterPrice ? <FiChevronDown /> : <FiChevronUp />}
      </h4>
      <form
        onSubmit={handleSubmit}
        className={`${
          isShowFilterPrice ? "visible h-[200px]" : "invisible h-[0px] py-0"
        } p-2 py-4 flex flex-col gap-3 transition-all duration-500 overflow-hidden`}
      >
        <div className="flex justify-between gap-3 items-center">
          <label htmlFor="fromPrice" className="font-light">
            From
          </label>
          <input
            type="number"
            id="fromPrice"
            className="border-[1px] w-[200px] py-1 outline-none px-2"
            required
            step={0.01}
          />
        </div>
        <div className="flex justify-between gap-3 items-center">
          <label htmlFor="toPrice" className="font-light">
            To
          </label>
          <input
            type="number"
            id="toPrice"
            className="border-[1px] w-[200px] py-1 outline-none px-2"
            required
            step={0.01}
          />
        </div>
        <div className="flex justify-end">
          <button className="-bg--primary py-2 px-3 rounded-md text-white text-md outline-none">
            Filter price
          </button>
        </div>
        <div className="-text--primary" id="messageFilter"></div>
      </form>
      <h4
        className="font-medium text-xl border-b-[1px] flex justify-between mt-4 items-center pb-2"
        onClick={handleShowFilterCategory}
      >
        Category
        {isShowCategory ? <FiChevronDown /> : <FiChevronUp />}
      </h4>
      <section
        className={`${
          isShowCategory ? "visible h-[200px]" : "invisible h-[0px] py-0"
        } p-2 py-4 flex flex-col gap-3 transition-all duration-500 overflow-hidden`}
      >
        <ul className="-text--dark-gray px-4 pt-4 flex flex-col gap-2">
          <li
            data-category=""
            onClick={handleClickCategory}
            className="cursor-pointer"
          >
            All
          </li>
          {categories.map((category) => (
            <li
              data-category={category.id}
              onClick={handleClickCategory}
              className="cursor-pointer"
              key={category.id}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Filters;

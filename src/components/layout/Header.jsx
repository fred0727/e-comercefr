import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  changeIsShowCart,
  getCartProducts,
} from "../../store/slices/cart.slice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [quantityproducts, setQuantityproducts] = useState(0);

  const { token } = useSelector((store) => store.userInfo);

  const { products } = useSelector((store) => store.cart);

  const dispatch = useDispatch();

  const handleClickShowCart = () => {
    dispatch(changeIsShowCart());
  };

  useEffect(() => {
    if (token) {
      dispatch(getCartProducts());
      setQuantityproducts(products.length);
    }
  }, [token, products]);

  return (
    <header className="fixed bg-white w-full flex justify-between items-center py-4 px-4 z-10 lg:shadow-md lg:py-0 lg:h-[68px]">
      <Link
        to="/"
        className="-text--primary font-bold text-2xl lg:text-3xl lg:pl-4"
      >
        e-commerce
      </Link>
      <nav className="flex justify-center items-center gap-5 lg:w-[600px]">
        <Link
          to="/login"
          className="flex justify-center items-center lg:border-l-[1px] lg:w-full lg:h-[68px]"
        >
          <i className="bx bx-user -text--text-gray text-[24px] lg:text-[28px]"></i>
        </Link>
        <Link
          to="/purchases"
          className="flex justify-center items-center  lg:border-l-[1px] lg:w-full lg:h-[68px]"
        >
          <i className="bx bx-box -text--text-gray text-[24px] lg:text-[28px]"></i>
        </Link>
        <button
          onClick={handleClickShowCart}
          className="flex justify-center items-center  lg:border-l-[1px] lg:w-full lg:h-[68px]"
        >
          <i className="bx bx-cart -text--text-gray text-[25px] lg:text-[28px] relative">
            <div
              className={`absolute flex justify-center items-center -top-2 -right-2 text-xs text-white -bg--primary rounded-full w-[20px] h-[20px] ${token ? "visible" : "hidden"}`}
            >
              {quantityproducts}
            </div>
          </i>
        </button>
      </nav>
    </header>
  );
};

export default Header;

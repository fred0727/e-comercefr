import React from "react";
import { Link } from "react-router-dom";
import { changeIsShowCart } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();

  const handleClickShowCart = () => {
    dispatch(changeIsShowCart())
  };

  return (
    <header className="fixed bg-white w-full flex justify-between items-center py-4 px-4 z-10 lg:shadow-md lg:py-0 lg:h-[68px]">
      <Link to="/" className="-text--primary font-bold text-2xl lg:text-3xl lg:pl-4">e-commerce</Link>
      <nav className="flex justify-center items-center gap-5 lg:w-[600px]">
        <Link to="/login" className="flex justify-center items-center border-l-[1px] lg:w-full lg:h-[68px]">
          <i className="bx bx-user -text--text-gray text-[24px] lg:text-[28px]"></i>
        </Link>
        <Link to="/purchases"  className="flex justify-center items-center border-l-[1px] lg:w-full lg:h-[68px]"> 
          <i className="bx bx-box -text--text-gray text-[24px] lg:text-[28px]"></i>
        </Link>
        <button onClick={handleClickShowCart}  className="flex justify-center items-center border-l-[1px] lg:w-full lg:h-[68px]">
          <i className="bx bx-cart -text--text-gray text-[25px] lg:text-[28px]"></i>
        </button>
      </nav>
    </header>
  );
};

export default Header;

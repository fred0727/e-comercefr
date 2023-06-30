import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addProductCart } from "../../../store/slices/cart.slice";
import { messageAddExists } from "../../../utils/message";

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const {products} = useSelector(store => store.cart);

  const {token} = useSelector(store => store.userInfo);

  const handleClickAddProduct = (e) => {
    e.preventDefault();
    const existsProduct = products.some(item => item.product.id == product.id)
    if (existsProduct && token) {
      messageAddExists()
    }else{
      const productToAdd = { quantity: 1, productId: product.id };
      dispatch(addProductCart(productToAdd));
    }
  };

  return (
    <Link
      to={`/products/${product.id}`}
      className="border-[1px] -border--light-gray rounded-md"
    >
      <div className="h-[200px] p-4 relative group border-b-2">
        <img
          src={product.images[0].url}
          alt=""
          className="w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-500"
        />
        <div className=" absolute top-0 left-0 w-full h- h-full p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <img
            src={product.images[1].url}
            alt=""
            className="w-full h-full object-contain"
          />
        </div>
      </div>
      <section className="p-4">
        <h5 className="-text--text-gray">{product.brand}</h5>
        <h4 className="-text--dark-gray pl-3 font-bold truncate pb-4">{product.title}</h4>
        <div className="flex justify-between">
          <div className="flex flex-col">
            <span className="-text--text-gray">Price</span>
            <span className="-text--dark-gray pl-3 font-bold">$ {product.price}</span>
          </div>
          <button onClick={handleClickAddProduct} className="-bg--primary w-[50px] rounded-full flex justify-center items-center">
            <i className="bx bx-cart text-2xl text-white"></i>
          </button>
        </div>
      </section>
    </Link>
  );
};

export default Product;

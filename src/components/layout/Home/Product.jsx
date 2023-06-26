import React from "react";

const Product = ({ product }) => {
  return (
    <article>
      <div className="h-[200px] p-4 relative group">
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
      <section>
        <h5>{product.brand}</h5>
        <h4>{product.title}</h4>
        <span>Price</span>
        <span>$ {product.price}</span>
        <button>
          <i class="bx bx-cart"></i>
        </button>
      </section>
    </article>
  );
};

export default Product;

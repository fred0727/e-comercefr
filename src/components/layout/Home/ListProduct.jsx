import React from "react";
import Product from "./Product";

const ListProduct = ({ products }) => {
  return (
    <section className="grid gap-10 p-2 grid-cols-[repeat(auto-fill,_275px)] md:grid-cols-[repeat(auto-fill,_325px)] lg:grid-cols-[repeat(auto-fill,_275px)] justify-center md:justify-between lg:mb-5">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
};

export default ListProduct;

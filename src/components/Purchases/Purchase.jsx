import React from "react";
import { formatDDMMYYYY } from "../../utils/date";

const Purchase = ({ purchase }) => {
  const totalPrice = (purchase.product.price * purchase.quantity).toFixed(2);

  return (
    <article className="flex gap-2 text-sm items-center w-full justify-between border-b-[1px] pb-2 md:w-[650px] md:justify-between lg:w-full lg:py-6">
      {/* Section left */}
      <section className="flex items-center gap-2">
        <div className="h-[50px] aspect-square lg:h-[75px]">
          <img
            src={purchase.product.images[2].url}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
        <span className="font-normal lg:text-lg lg:pl-4">{purchase.product.title}</span>
      </section>
      {/* Section Right */}
      <section className="flex flex-col justify-end items-end gap-1 font-semibold px-4 md:flex-row md:gap-6">
        <span className="-text--text-gray font-light lg:text-lg">
          {formatDDMMYYYY(purchase.createdAt)}
        </span>
        <span className="py-1 border-[1px] border-gray-400 w-[32px] text-center text-xs lg:text-lg">
          {purchase.quantity}
        </span>
        <span className="flex flex-row lg:text-lg">$ {totalPrice}</span>
      </section>
    </article>
  );
};

export default Purchase;

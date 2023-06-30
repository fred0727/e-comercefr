import React, { useEffect, useState } from "react";
import { axiosEcommerce, getConfig } from "../utils/configAxios";
import Purchase from "../components/Purchases/Purchase";
import Footer from "../components/layout/Footer";
import { Link } from "react-router-dom";

const Purchases = () => {
  const [purchasesHistory, setPurchasesHistory] = useState([]);

  useEffect(() => {
    axiosEcommerce
      .get(`/purchases/`, getConfig())
      .then(({ data }) => {
        const orderPurchases = data.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
        setPurchasesHistory(orderPurchases);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section className="max-w-[700px] mx-auto pt-20 min-h-screen px-4 lg:max-w-[1000px] lg:pt-24">
        <section className="flex text-xs gap-3 items-center pb-5 lg:pb-8">
          <Link to="/" className="text-lg -text--dark-gray">
            Home
          </Link>
          <div className="h-[6px] aspect-square rounded-full bg-red-600"></div>
          <span className="font-bold truncate w-[200px] text-lg -text--dark-gray">
            purchases
          </span>
        </section>
        <h3 className="-text--dark-gray font-bold text-2xl pb-5">My Purchases</h3>
        <section className="grid gap-8 px-2">
          {purchasesHistory.map((purchase) => (
            <Purchase key={purchase.id} purchase={purchase} />
          ))}
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default Purchases;

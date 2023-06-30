import { useDispatch, useSelector } from "react-redux";
import { AiFillCloseCircle } from "react-icons/ai";
import {
  changeIsShowCart,
  checkoutCart,
  getCartProducts,
} from "../../store/slices/cart.slice";
import { useEffect } from "react";
import CartProduct from "./CartProduct";

const Cart = () => {
  const { isShowCart, products } = useSelector((store) => store.cart);
  const { token } = useSelector((store) => store.userInfo);

  const dispatch = useDispatch();

  const handleClickChangeShowCart = () => dispatch(changeIsShowCart());

  const handleCLickCheckout = () => {
    dispatch(checkoutCart());
  };

  const totalPriceCheckout = products.reduce(
    (acc, product) => acc + product.quantity * product.product.price,
    0
  );

  useEffect(() => {
    if (token && isShowCart) {
      dispatch(getCartProducts());
    }
  }, [isShowCart]);

  return (
    <section
      className={`fixed top-0 pt-20 bg-white h-screen ${
        isShowCart && token ? "right-0" : "-right-full"
      } w-[320px] transition-all duration-300 p-2 shadow-2xl shadow-black/30  grid grid-rows-[auto_1fr_auto]`}
    >
      <AiFillCloseCircle
        className="absolute top-3 right-3 text-xl text-red-500 cursor-pointer"
        onClick={handleClickChangeShowCart}
      />
      <h3 className="font-bold text-xl px-4">Shooping Cart</h3>
      {/* Productos del carrito */}
      <section className="grid gap-6 content-start py-4 overflow-y-auto">
        {products.map((cartProduct) => (
          <CartProduct key={cartProduct.id} cartProduct={cartProduct} />
        ))}
      </section>

      {/* Seccion precio total */}
      <section className="border-t-[1px] border-gray-400 p-4 grid grid-cols-2 gap-4">
        <span className="font-bold">Total</span>
        <span className="text-end font-semibold">
          $ {totalPriceCheckout.toFixed(2)}
        </span>
        <span
          onClick={handleCLickCheckout}
          className="col-span-2 block w-full py-2 bg-red-500 text-white hover:bg-red-600 transition-colors text-center cursor-pointer"
        >
          Checkout
        </span>
      </section>
    </section>
  );
};

export default Cart;

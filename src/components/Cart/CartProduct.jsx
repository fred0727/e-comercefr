import { RiDeleteBin6Line } from "react-icons/ri";
import { BiMinus, BiPlus } from "react-icons/bi";
import { deleteProductCart, updateProductCart } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const CartProduct = ({ cartProduct }) => {

  const [quantityProduct, setQuantityProduct] = useState(cartProduct.quantity)

  const dispatch = useDispatch();

  const totalPrice = (cartProduct.quantity * cartProduct.product.price).toFixed(
    2
  );

  const handleClickDelete = () => {
    dispatch(deleteProductCart(cartProduct.id))
  }

  const handleClickProductMinus = () => {
    const totalAdd = quantityProduct - 1
    if(quantityProduct > 1){
      setQuantityProduct(totalAdd)
      const productToAdd = { quantity: totalAdd, productId: cartProduct.id };
      dispatch(updateProductCart(productToAdd));
    }
  };
  
  const handleClickProductPlus = () => {
    const totalAdd = quantityProduct + 1
    setQuantityProduct(totalAdd)
    const productToAdd = { quantity: totalAdd, productId: cartProduct.id };
    dispatch(updateProductCart(productToAdd));
  };

  return (
    <article className="grid p-1 grid-cols-[auto_1fr_auto] grid-rows-[1fr_auto] gap-y-2">
      <div className="h-[90px] aspect-square p-2">
        <img
          src={cartProduct.product.images[0].url}
          alt=""
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <span className="text-sm line-clamp-2">{cartProduct.product.title}</span>
        <article className="mt-2">
          <div className="flex border-[1px] -border--light-gray justify-center max-w-max">
            <button className="p-1 px-3" onClick={handleClickProductMinus}><BiMinus/></button>
            <div className="p-1 px-4 border-l-[1px] border-r-[1px]">{quantityProduct}</div>
            <button className="p-1 px-3 " onClick={handleClickProductPlus}><BiPlus/></button>
          </div>
        </article>
      </div>
      <div className="flex justify-end self-start pr-2">
        <RiDeleteBin6Line className="cursor-pointer -text--primary" onClick={handleClickDelete}/>
      </div>
      <span className="col-span-2 text-end text-sm -text--text-gray">Total:</span>
      <span className="px-2 text-sm">$ {totalPrice}</span>
    </article>
  );
};

export default CartProduct;

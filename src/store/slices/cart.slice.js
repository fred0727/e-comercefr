import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce, getConfig } from "../../utils/configAxios";
import { messageAddCart, messageAddError, successCheckOutCart, successDeleteProduct } from "../../utils/message";

const initialState = {
  products: [],
  isShowCart: false,
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    changeIsShowCart: (state) => {
      state.isShowCart = !state.isShowCart;
    },
    setProducts: (state, action) => {
      const newProducts = action.payload;
      state.products = newProducts;
    },
  },
});

export const { changeIsShowCart, setProducts } = cartSlice.actions;

export const getCartProducts = () => (dispatch) => {
  axiosEcommerce
    .get(`/cart`, getConfig())
    .then(({ data }) => dispatch(setProducts(data)))
    .catch((err) => console.log(err));
};

export const addProductCart = (data) => (dispatch) => {
  axiosEcommerce
    .post("/cart", data, getConfig())
    .then(() => {
      dispatch(getCartProducts());
      messageAddCart();
    })
    .catch((err) => {
      messageAddError()
      console.log(err)
    });
};

export const deleteProductCart = (productId) => (dispatch) => {
  axiosEcommerce
    .delete(`/cart/${productId}`, getConfig())
    .then(() => {
      dispatch(getCartProducts())
      successDeleteProduct()
    })
    .catch((err) => console.log(err));
};

export const checkoutCart = () => (dispatch) => {
  axiosEcommerce
    .post("/purchases", {}, getConfig())
    .then(() => {
      dispatch(getCartProducts())
      successCheckOutCart()
      setTimeout(() => {
        window.location.href = '/purchases'; 
      }, 3000);
    })
    .catch((err) => console.log(err));
};

export const updateProductCart = (data) => (dispatch) => {
  axiosEcommerce
    .put(`/cart/${data.productId}`, { quantity: data.quantity }, getConfig())
    .then(() => dispatch(getCartProducts()))
    .catch((err) => console.log(err));
};

export default cartSlice.reducer;

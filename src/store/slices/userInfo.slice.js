import { createSlice } from "@reduxjs/toolkit";
import { axiosEcommerce } from "../../utils/configAxios";
import { messageErrorLog, messageErrorSignUp, successfulRegistration } from "../../utils/message";

const initialState = {
  token: "",
  user: null,
};

const userInfoSlice = createSlice({
  initialState: JSON.parse(localStorage.getItem("userInfo")) ?? initialState,
  name: "userInfo",
  reducers: {
    setUserInfo: (state, action) => {
      const responseLogin = action.payload;
      const newState = {
        ...state,
        ...responseLogin,
      };
      localStorage.setItem("userInfo", JSON.stringify(newState));
      return newState;
    },
    logOut: (state) => {
      const newState = { ...state, ...initialState };
      localStorage.setItem("userInfo", JSON.stringify(newState));
      return newState;
    },
  },
});

export const { setUserInfo, logOut } = userInfoSlice.actions;

export const loginUser = (dataForm) => (dispatch) => {
  axiosEcommerce
    .post("/users/login", dataForm)
    .then(({ data }) => dispatch(setUserInfo(data)))
    .catch((err) => messageErrorLog());
};

export const createUser = (dataForm) => (dispatch) => {
  axiosEcommerce
    .post("/users", dataForm)
    .then(() => {
      successfulRegistration();
      setTimeout(() => {
        window.location.href = '/login'; 
      }, 2500);
    })
    .catch((err) => messageErrorSignUp());
};

export default userInfoSlice.reducer;

import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { logOut, loginUser } from "../store/slices/userInfo.slice";
import { Link } from "react-router-dom";

const Login = () => {
  const { token, user } = useSelector((store) => store.userInfo);

  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(loginUser(data));
  };

  const handleClickLogout = () => {
    dispatch(logOut());
  };

  return (
    <section className="bg-gray-200 grid place-content-center px-4 min-h-screen">
      {token ? (
        <section className="bg-white rounded-xl p-4 w-[260px] grid gap-6 text-center">
          <i className="bx bxs-user-circle text-center text-8xl "></i>
          <span className="font-bold">
            {user.firstName} {user.lastName}
          </span>
          <button
            onClick={handleClickLogout}
            className="rounded-md block w-full py-2 bg-red-500 text-white hover:bg-red-600 transition-colors"
          >
            Logout
          </button>
        </section>
      ) : (
        <form
          onSubmit={handleSubmit(submit)}
          className="bg-white rounded-lg p-4 max-w-[350px]"
        >
          <h3 className="font-semibold text-xl">
            Welcome! Enter you email and password to continue
          </h3>
          <section className="bg-blue-100 p-4 rounded-md py-2 my-4">
            <h5 className="text-center font-bold mb-4">Test data</h5>
            <div className="flex items-center gap-2">
              <i className="bx bx-envelope text-xl"></i>
              <span>john@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 clas">
              <i className="bx bx-lock text-xl"></i>
              <span>john1234</span>
            </div>
          </section>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="email">
              Email
            </label>
            <input
              className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
              type="text"
              id="email"
              {...register("email")}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm" htmlFor="password">
              Password
            </label>
            <input
              className="border-[1px] border-gray-300 outline-none p-2 rounded-sm"
              type="password"
              id="password"
              {...register("password")}
            />
          </div>

          <button className="block w-full my-4 py-2 bg-red-500 text-white hover:bg-red-600 transition-colors">
            Login
          </button>
          <p className="text-sm">
            Don`t have an account?{" "}
            <Link to="/register">
              <span className="text-blue-400">Sign up</span>
            </Link>
          </p>
        </form>
      )}
    </section>
  );
};

export default Login;

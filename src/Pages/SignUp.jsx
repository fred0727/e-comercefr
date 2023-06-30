import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { createUser } from "../store/slices/userInfo.slice";

const SignUp = () => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const submit = (data) => {
    dispatch(createUser(data));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
      <div className="md:max-w-[500px] bg-white p-4 pb-8 rounded-md">
        <h2 className="-text--text-gray text-2xl text-center mt-4">Register</h2>
        <form
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-4 px-4 mt-6"
        >
          <div>
            <label htmlFor="firstName" className="-text--dark-gray">
              First Name <span className="-text--primary">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full border-[1px] rounded-md py-1 outline-none px-2"
              required
              {...register("firstName")}
            />
          </div>
          <div>
            <label htmlFor="lastName" className="-text--dark-gray">
              Last Name <span className="-text--primary">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full border-[1px] rounded-md py-1 outline-none px-2"
              required
              {...register("lastName")}
            />
          </div>
          <div>
            <label htmlFor="email" className="-text--dark-gray">
              Email <span className="-text--primary">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-[1px] rounded-md py-1 outline-none px-2"
              required
              {...register("email")}
            />
          </div>
          <div>
            <label htmlFor="password" className="-text--dark-gray">
              Password <span className="-text--primary">*</span>
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-[1px] rounded-md py-1 outline-none px-2"
              required
              {...register("password")}
            />
          </div>
          <div>
            <label htmlFor="phone" className="-text--dark-gray">
              Phone <span className="-text--primary">*</span>
            </label>
            <input
              type="number"
              id="phone"
              className="w-full border-[1px] rounded-md py-1 outline-none px-2"
              required
              {...register("phone")}
            />
          </div>
          <button className="w-full -bg--primary rounded-md py-2 text-white text-xl">
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

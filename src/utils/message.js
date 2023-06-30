import Swal from "sweetalert2";

export const messageErrorLog = () => {
  Swal.fire({
    title: "Error!",
    text: "Incorrect credentials!",
    icon: "error",
    confirmButtonText: "Ok",
    timer: 2000,
  });
};

export const messageErrorSignUp = () => {
  Swal.fire({
    title: "Error!",
    text: "Check the entered data",
    icon: "error",
    confirmButtonText: "Ok",
    timer: 3000,
  });
};

export const successfulRegistration = () => {
  Swal.fire({
    title: "Successful!",
    text: "Successful registration",
    icon: "success",
    confirmButtonText: "Ok",
    timer: 3000,
  });
};

export const messageAddCart = () => {
  Swal.fire({
    position: "top-start",
    icon: "success",
    title: "Product added successfully",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const messageAddError = () => {
  Swal.fire({
    position: "top-start",
    icon: "warning",
    title: "Product not added, please log in.",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const messageAddExists = () => {
  Swal.fire({
    position: "top-start",
    icon: "warning",
    title: "Product already added to cart",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const successDeleteProduct = () => {
  Swal.fire({
    position: "top-start",
    icon: "success",
    title: "Product successfully removed",
    showConfirmButton: false,
    timer: 1500,
  });
};

export const successCheckOutCart = () => {
  Swal.fire({
    position: "top-start",
    icon: "success",
    title: "Purchase made correctly",
    showConfirmButton: false,
    timer: 2000,
  });
};
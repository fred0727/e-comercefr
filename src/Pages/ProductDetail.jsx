import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosEcommerce } from "../utils/configAxios";
import { BiChevronLeft, BiChevronRight, BiMinus, BiPlus } from "react-icons/bi";
import ListProduct from "../components/layout/Home/ListProduct";
import { addProductCart } from "../store/slices/cart.slice";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/layout/Footer";
import { messageAddExists } from "../utils/message";

const sliderStyles = {
  1: "-ml-[0%]",
  2: "-ml-[100%]",
  3: "-ml-[200%]",
};

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [imageToShow, setImageToShow] = useState(1);

  const { id } = useParams();

  const { products } = useSelector((store) => store.cart);
  const {token} = useSelector(store => store.userInfo);

  const dispatch = useDispatch();

  const handleClickPlus = () => setQuantity(quantity + 1);

  const handleClickLess = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleClickPreviousImage = () => {
    if (imageToShow > 1) {
      setImageToShow(imageToShow - 1);
    }
  };

  const handleClickNextImage = () => {
    if (imageToShow < 3) {
      setImageToShow(imageToShow + 1);
    }
  };

  const handleClickAddProduct = () => {
    const existsProduct = products.some(
      (item) => item.product.id == product.id
    );
    if (existsProduct && token) {
      messageAddExists();
    } else {
      const productToAdd = { quantity, productId: product.id };
      dispatch(addProductCart(productToAdd));
    }
  };

  useEffect(() => {
    axiosEcommerce
      .get(`/products/${id}`)
      .then(({ data }) => setProduct(data))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    if (product) {
      axiosEcommerce
        .get(`/products?categoryId=${product.categoryId}`)
        .then(({ data }) => {
          const productsFiltered = data.filter(
            (item) => item.id !== product.id
          );
          setSimilarProducts(productsFiltered);
        })
        .catch((err) => console.log(err));
    }
  }, [product]);

  return (
    <div>
      <section className="p-2 max-w-[1000px] mx-auto mt-16 px-4 lg:mt-24 lg:max-w-[1200px]">
        <section className="flex text-xs gap-3 items-center">
          <Link to="/" className="text-lg -text--dark-gray">
            Home
          </Link>
          <div className="h-[6px] aspect-square rounded-full bg-red-600"></div>
          <span className="font-bold truncate w-[200px] text-lg -text--dark-gray">
            {product?.title}
          </span>
        </section>
        <section className="grid gap-6 sm:grid-cols-2 items-center mt-6">
          {/* Slider */}
          <article className="overflow-hidden relative">
            <section
              className={`flex w-[300%] ${sliderStyles[imageToShow]} transition-all duration-500`}
            >
              <div className="h-[300px] w-[calc(100%_/_3)] px-12">
                <img
                  className="w-full h-full object-contain"
                  src={product?.images[0].url}
                  alt=""
                />
              </div>
              <div className="h-[300px] w-[calc(100%_/_3)] px-12">
                <img
                  className="w-full h-full object-contain"
                  src={product?.images[1].url}
                  alt=""
                />
              </div>
              <div className="h-[300px] w-[calc(100%_/_3)] px-12">
                <img
                  className="w-full h-full object-contain"
                  src={product?.images[2].url}
                  alt=""
                />
              </div>
            </section>
            <button
              onClick={handleClickPreviousImage}
              className="absolute top-1/2 left-0 text-4xl  rounded-full text-white -bg--primary -translate-y-1/2"
            >
              {" "}
              <BiChevronLeft />{" "}
            </button>
            <button
              onClick={handleClickNextImage}
              className="absolute top-1/2 right-0 text-4xl rounded-full text-white -bg--primary -translate-y-1/2"
            >
              {" "}
              <BiChevronRight />{" "}
            </button>
          </article>
          {/* Detalle del producto */}
          <article className="grid gap-6">
            <div>
              <h4 className="-text--text-gray text-xl">{product?.brand}</h4>
              <span className="font-semibold block -text--dark-gray text-2xl ml-2">
                {product?.title}
              </span>
            </div>
            <section className="grid grid-cols-2">
              <article>
                <h4 className="-text--text-gray text-md">Price</h4>
                <span className="font-semibold block text-lg ml-2 -text--dark-gray">
                  $ {product?.price}
                </span>
              </article>
              <article>
                <h5 className="text-md -text--text-gray">Quantity</h5>
                <div className="flex border-[1px] justify-center max-w-max">
                  <button
                    className="p-1 px-3 border-[1px]"
                    onClick={handleClickLess}
                  >
                    <BiMinus className="-text--dark-gray" />
                  </button>
                  <div className="p-1 px-4 border-[1px]">{quantity}</div>
                  <button
                    className="p-1 px-3 border-[1px]"
                    onClick={handleClickPlus}
                  >
                    <BiPlus className="-text--dark-gray" />
                  </button>
                </div>
              </article>
            </section>
            <button
              onClick={handleClickAddProduct}
              className="block w-full my-4 py-3 -bg--primary text-white hover:bg-red-600 transition-colors text-lg"
            >
              Add to cart <i className="bx bx-cart"></i>
            </button>
            <p>{product?.description}</p>
          </article>
        </section>
        <section>
          <h3 className="-text--primary font-bold text-lg py-4">
            Discover similar items
          </h3>
          <ListProduct products={similarProducts} />
        </section>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetail;

import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ProductDetail from "./Pages/ProductDetail";
import Purchases from "./Pages/Purchases";
import Header from "./components/layout/Header";
import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import Cart from "./components/Cart/Cart";
import SignUp from "./Pages/SignUp";

function App() {

  return (
    <main className="grid grid-rows-[auto_1fr] min-h-screen font-['Yantramanav']">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/purchases" element={<Purchases />} />
        </Route>
      </Routes>
      <Cart/>
    </main>
  );
}

export default App;

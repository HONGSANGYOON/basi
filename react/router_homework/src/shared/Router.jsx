import Main from "../pages/Main";
import Products from "../pages/Products";
import Product from "../pages/Product";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../common/Layout";
import Login from "../pages/login";
import Membership from "../pages/membership";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 머리글과 꼬리글 고정을 위한 레이아웃 설정 */}
        <Route element={<Layout />}>
          {/* 페이지별 경로 */}
          <Route path="/" element={<Main />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/membership" element={<Membership />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

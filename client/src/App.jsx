import React from "react";
import { Routes, Route } from "react-router-dom";

// --- Public Components & Pages ---
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import TrackOrder from "./components/TrackOrder";

// Public Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogTips from "./pages/BlogTips";
import BlogIdeas from "./pages/BlogIdeas";
import BlogDetail from "./pages/BlogDetail";
import Sofa from "./pages/Sofa";
import Bed from "./pages/Bed";
import Chair from "./pages/Chair";
import Table from "./pages/Table";
import Storage from "./pages/Storage";
import Dining from "./pages/Dining";
import Returns from "./pages/Returns";
import Shipping from "./pages/Shipping";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import ForgotPassword from "./pages/ForgotPassword";
import StoreLocator from "./pages/StoreLocator";
import GiftCards from "./pages/GiftCards";

// --- Admin Components & Pages (Aapke folder structure ke hisaab se) ---
import Layout from "./Admin/components/Layout";
import Dashboard from "./Admin/pages/Dashboard";
import Product from "./Admin/pages/Product";
import AddProduct from "./Admin/pages/AddProduct";
import Customers from "./Admin/pages/Customers";
import CustomerProfile from "./Admin/pages/CustomerProfile";
import Orders from "./Admin/pages/Orders";
import OrderDetails from "./Admin/pages/OrderDetails";
import Payments from "./Admin/pages/Payments";
import Settings from "./Admin/pages/Settings";
import EditProduct from "./Admin/pages/EditProduct";
import MyProfile from "./Admin/pages/MyProfile";
import ChangePassword from "./Admin/pages/ChangePassword";
// import AdminProduct from "./Admin/pages/AdminProduct"; // Agar aage banayein

const App = () => (
  <Routes>
    
    {/* ============================================= */}
    {/* 1. PUBLIC ROUTES (Navbar + Footer ke saath)  */}
    {/* ============================================= */}
    <Route
      path="/*"
      element={
        <div className="min-h-screen flex flex-col bg-[#FAF7F2]">
          <ScrollToTop />
          <Navbar />
          <main className="flex-1 pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/shop/sofa" element={<Sofa />} />
              <Route path="/shop/bed" element={<Bed />} />
              <Route path="/shop/chair" element={<Chair />} />
              <Route path="/shop/table" element={<Table />} />
              <Route path="/shop/storage" element={<Storage />} />
              <Route path="/shop/dining" element={<Dining />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/tips" element={<BlogTips />} />
              <Route path="/blog/ideas" element={<BlogIdeas />} />
              <Route path="/blog/:id" element={<BlogDetail />} />
              <Route path="/contact" element={<Contacts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/track-order" element={<TrackOrder />} />
              <Route path="/returns" element={<Returns />} />
              <Route path="/shipping" element={<Shipping />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/stores" element={<StoreLocator />} />
              <Route path="/gift-cards" element={<GiftCards />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      }
    />

    {/* ============================================= */}
    {/* 2. ADMIN ROUTES (Sidebar + Topbar ke saath)  */}
    {/* ============================================= */}
    <Route path="/admin" element={<Layout />}>
      {/* /admin par Dashboard render hoga */}
      <Route index element={<Dashboard />} />
      
      {/* Future routes yahan add karenge, jaise: */}
      <Route path="products" element={<Product />} />
       <Route path="products/add" element={<AddProduct/>} />
        <Route path="products/edit/:id" element={<EditProduct />} />
       <Route path="customers" element={<Customers/>} />
       <Route path="customers/:id" element={<CustomerProfile/>} />
       <Route path="orders" element={<Orders/>} />
        <Route path="orders/:id" element={<OrderDetails />} />
        <Route path="payment" element={<Payments/>} />
        <Route path="setting" element={<Settings />} />
        <Route path="profile" element={<MyProfile/>} />
         <Route path="profile/change-password" element={<ChangePassword />} />
    </Route>

  </Routes>
);

export default App;
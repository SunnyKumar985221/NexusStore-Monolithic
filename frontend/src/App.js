import React, { useEffect, useState } from "react";
import "./Assests/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { loadSeller, loadUser } from "./redux/actions/user";
import { fetchUser } from "./redux/reducers/usertk.js";
import { fetchSeller } from "./redux/reducers/sellertk.js";

// Home Route 
import HomePage from "./pages/HomePage";

// User Route 
import Login from "./pages/Login";
import Singup from "./pages/SignupPage";
import ActivationPage from "./pages/ActivationPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import SellerProtectedRoute from "./components/Protected/SellerProtectedRoute";

// Seller Route
import ShopCreatePage from "./pages/Shop/ShopCreate.jsx";
import SellerActivationPage from "./pages/SellerActivationPage";
import ShopDashboardPage from "./pages/Shop/ShopDashboardPage";
import ShopHomePage from "./pages/Shop/ShopHomePage";
import ShopCreateProduct from "./pages/Shop/ShopCreateProduct";

import {
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  ProductDetailsPage,
  // ShopCreatePage,
  // SellerActivationPage,
  ShopLoginPage,
  OrderDetailsPage,
  TrackOrderPage,
  UserInbox,
} from "./routes/Routes.js";

import {
  // ShopDashboardPage,
  // ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopPreviewPage,
  ShopAllOrders,
  ShopOrderDetails,
  ShopAllRefunds,
  ShopSettingsPage,
  ShopWithDrawMoneyPage,
  ShopInboxPage,
} from "./routes/ShopRoutes";
import {
  AdminDashboardPage,
  AdminDashboardUsers,
  AdminDashboardSellers,
  AdminDashboardOrders,
  AdminDashboardProducts,
  AdminDashboardEvents,
  AdminDashboardWithdraw
} from "./routes/AdminRoutes";



// import ShopHomePage
// import ProtectedRoute from "./components/ProtectedRoutes/Protectedroute";
import ProtectedAdminRoute from "./routes/ProtectedAdminRoute";
// import { ShopHomePage } from "./ShopRoutes.js";
// import SellerProtectedRoute from "./routes/SellerProtectedRoute";

import { AllProducts } from "./redux/reducers/allproducttk";
import { getAllEvents } from "./redux/actions/event";
// import axios from "axios";
// import { server } from "./server";
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchSeller());
    dispatch(AllProducts());
  }, []);



  // const [stripeApikey, setStripeApiKey] = useState("");
  // async function getStripeApikey() {
  //   const { data } = await axios.get(`${server}/payment/stripeapikey`);
  //   setStripeApiKey(data.stripeApikey);
  // }
  // Store.dispatch(getAllEvents());
  // getStripeApikey();
  // dispatch(loadUser());


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* user Routes  */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Singup />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />

        {/* user ProtectedRoutes  */}
        <Route element={<ProtectedRoute />}>
          <Route path="profile" element={<ProfilePage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="inbox" element={<UserInbox />} />
          <Route path="user/order/:id" element={<OrderDetailsPage />} />
          <Route path="user/track/order/:id" element={<TrackOrderPage />} />
        </Route>


        {/* Seller Routes  */}
        <Route path="/shop-create" element={<ShopCreatePage />} />
        <Route path="/shop-login" element={<ShopLoginPage />} />
        <Route path="/seller/activation/:activation_token" element={<SellerActivationPage />} />

        {/* Seller ProtectedRoutes  */}
        <Route path='/' element={<SellerProtectedRoute />}>
          <Route path="dashboard" element={<ShopHomePage />} />
          <Route path="shop/:id" element={<CheckoutPage />} />
          <Route path="dashboard-create-product" element={<ShopCreateProduct />} />
          <Route path="settings" element={<ShopSettingsPage />} />
          <Route path="dashboard-orders" element={<ShopAllOrders />} />
          <Route path="dashboard-refunds" element={<ShopAllRefunds />} />
          <Route path="order/:id" element={<ShopOrderDetails />} />
          <Route path="dashboard-products" element={<ShopAllProducts />} />
          <Route path="dashboard-create-event" element={<ShopCreateEvents />} />
          <Route path="dashboard-events" element={<ShopAllEvents />} />
          <Route path="dashboard-coupouns" element={<ShopAllCoupouns />} />
          <Route path="dashboard-withdraw-money" element={<ShopWithDrawMoneyPage />} />
          <Route path="dashboard-messages" element={<ShopInboxPage />} />
        </Route>

        <Route path="/products" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/best-selling" element={<BestSellingPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/order/success" element={<OrderSuccessPage />} />
        <Route path="/shop/preview/:id" element={<ShopPreviewPage />} />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardPage />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-users"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardUsers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-sellers"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardSellers />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-orders"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardOrders />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-products"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardProducts />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-events"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardEvents />
            </ProtectedAdminRoute>
          }
        />
        <Route
          path="/admin-withdraw-request"
          element={
            <ProtectedAdminRoute>
              <AdminDashboardWithdraw />
            </ProtectedAdminRoute>
          }
        />
      </Routes>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      {/* {stripeApikey && (
        <Elements stripe={loadStripe(stripeApikey)}>
          <Routes>
            <Route
              path="/payment"
              element={
                <ProtectedRoute>
                  <PaymentPage />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Elements>
      )} */}
    </BrowserRouter>
  );
};

export default App;

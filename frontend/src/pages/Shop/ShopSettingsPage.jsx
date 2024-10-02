import React from "react";
import Footer from "../../components/Layout/Footer";
import ShopSettings from "../../components/Shop/ShopSettings";
import DashboardHeader from "../../components/Shop/Layout/DashboardHeader";
import DashboardSideBar from "../../components/Shop/Layout/DashboardSideBar";
import '../../Assests/css/shop.css';


const ShopSettingsPage = () => {
  return (
    <div>
      <DashboardHeader />
      <div class='middle'>
        <DashboardSideBar active={11} />
        <ShopSettings />
      </div>
    </div>
  );
};

export default ShopSettingsPage;

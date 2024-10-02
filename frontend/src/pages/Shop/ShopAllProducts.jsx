import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllProducts from "../../components/Shop/AllProducts";
import '../../Assests/css/shop.css';
const ShopAllProducts = () => {
  return (
    <div>
      <DashboardHeader />
      <div class='middle'>
        <DashboardSideBar active={3} />
        <AllProducts />
      </div>
    </div>
  )
}

export default ShopAllProducts
import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import CreateProduct from "../../components/Shop/CreateProduct";
import '../../Assests/css/shop.css';

const ShopCreateProduct = () => {
  return (
    <div>
      <DashboardHeader />
      <div class='middle'>
        <DashboardSideBar active={4} />
        <CreateProduct />
      </div>
    </div>
  )
}

export default ShopCreateProduct
import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar'
import AllEvents from "../../components/Shop/AllEvents";
import '../../Assests/css/shop.css';

const ShopAllEvents = () => {
  return (
    <div>
      <DashboardHeader />
      <div class='middle'>
        <DashboardSideBar active={5} />
        <AllEvents />
      </div>
    </div>
  )
}

export default ShopAllEvents
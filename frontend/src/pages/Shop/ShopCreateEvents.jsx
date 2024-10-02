import React from 'react'
import DashboardHeader from '../../components/Shop/Layout/DashboardHeader'
import CreateEvent from "../../components/Shop/CreateEvent";
import DashboardSideBar from '../../components/Shop/Layout/DashboardSideBar';

const ShopCreateEvents = () => {
  return (
    <div>
      <DashboardHeader />
      <div class='middle'>
        <DashboardSideBar active={6} />
        <CreateEvent />
      </div>
    </div>
  )
}

export default ShopCreateEvents
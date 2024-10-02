import { AiOutlineFolderAdd, AiOutlineGift, RxDashboard, HiOutlineReceiptRefund, FiPackage, BiMessageSquareDetail, FiShoppingBag, MdOutlineLocalOffer, VscNewFile, CiMoneyBill, CiSettings } from '../../../Assests/icons/icons';
import '../../../Assests/css/shop.css';
import { NavLink } from "react-router-dom";


const DashboardSideBar = ({ active }) => {
  return (
    <>
      <div className="w-full h-[90vh] bg-white shadow-sm overflow-y-scroll sticky top-0 left-0 z-10">
        {/* single item */}
        <div className="w-full flex items-center p-4">
          <NavLink to="/dashboard" className="w-full flex items-center">
            <RxDashboard
              size={30}
              color={`${active === 1 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 1 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Dashboard
            </h5>
          </NavLink>
        </div>

        <div className="w-full flex items-center p-4">
          <NavLink to="/dashboard-orders" className="w-full flex items-center">
            <FiShoppingBag
              size={30}
              color={`${active === 2 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 2 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              All Orders
            </h5>
          </NavLink>
        </div>

        <div className="w-full flex items-center p-4">
          <NavLink to="/dashboard-products" className="w-full flex items-center">
            <FiPackage size={30} color={`${active === 3 ? "crimson" : "#555"}`} />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 3 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              All Products
            </h5>
          </NavLink>
        </div>

        <div className="w-full flex items-center p-4">
          <NavLink
            to="/dashboard-create-product"
            className="w-full flex items-center"
          >
            <AiOutlineFolderAdd
              size={30}
              color={`${active === 4 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 4 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Create Product
            </h5>
          </NavLink>
        </div>

        <div className="w-full flex items-center p-4">
          <NavLink to="/dashboard-events" className="w-full flex items-center">
            <MdOutlineLocalOffer
              size={30}
              color={`${active === 5 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 5 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              All Events
            </h5>
          </NavLink>
        </div>

        <div className="w-full flex items-center p-4">
          <NavLink to="/dashboard-create-event" className="w-full flex items-center">
            <VscNewFile
              size={30}
              color={`${active === 6 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 6 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Create Event
            </h5>
          </NavLink>
        </div>

        <div className="w-full flex items-center p-4">
          <NavLink
            to="/dashboard-withdraw-money"
            className="w-full flex items-center"
          >
            <CiMoneyBill
              size={30}
              color={`${active === 7 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 7 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Withdraw Money
            </h5>
          </NavLink>
        </div>

        <div className="w-full flex items-center p-4">
          <NavLink to="/dashboard-messages" className="w-full flex items-center">
            <BiMessageSquareDetail
              size={30}
              color={`${active === 8 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 8 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Shop Inbox
            </h5>
          </NavLink>
        </div>

        <div className="w-full flex items-center p-4">
          <NavLink to="/dashboard-coupouns" className="w-full flex items-center">
            <AiOutlineGift
              size={30}
              color={`${active === 9 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 9 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Discount Codes
            </h5>
          </NavLink>
        </div>

        <div className="w-full flex items-center p-4">
          <NavLink to="/dashboard-refunds" className="w-full flex items-center">
            <HiOutlineReceiptRefund
              size={30}
              color={`${active === 10 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 10 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Refunds
            </h5>
          </NavLink>
        </div>

        <div className="w-full flex items-center p-4">
          <NavLink to="/settings" className="w-full flex items-center">
            <CiSettings
              size={30}
              color={`${active === 11 ? "crimson" : "#555"}`}
            />
            <h5
              className={`hidden 800px:block pl-2 text-[18px] font-[400] ${active === 11 ? "text-[crimson]" : "text-[#555]"
                }`}
            >
              Settings
            </h5>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default DashboardSideBar;

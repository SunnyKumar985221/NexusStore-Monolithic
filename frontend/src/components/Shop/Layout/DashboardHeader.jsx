import { AiOutlineGift, MdOutlineLocalOffer, FiPackage, FiShoppingBag, BiMessageSquareDetail } from '../../../Assests/icons/icons';
import '../../../Assests/css/shop.css';
import Logo from '../../../Assests/images/logo2.png';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";



const DashboardHeader = () => {
  const { user } = useSelector((state) => state.seller);
  return (
    <>
      <div class='shopHeader'>
        <NavLink to="/dashboard"> <img src={Logo} alt="" /> </NavLink>
        <NavLink to="/dashboard/cupouns" className="800px:block hidden"> <AiOutlineGift size={30} className="mx-5 cursor-pointer" /> </NavLink>
        <NavLink to="/dashboard-events" className="800px:block hidden"> <MdOutlineLocalOffer size={30} className="mx-5 cursor-pointer" /> </NavLink>
        <NavLink to="/dashboard-products" className="800px:block hidden"> <FiShoppingBag size={30} className="mx-5 cursor-pointer" /></NavLink>
        <NavLink to="/dashboard-orders" className="800px:block hidden"> <FiPackage size={30} className="mx-5 cursor-pointer" /> </NavLink>
        <NavLink to="/dashboard-messages" className="800px:block hidden"><BiMessageSquareDetail size={30} className="mx-5 cursor-pointer" /></NavLink>
        <NavLink to={`/shop/${user._id}`}> <img src={`http://localhost:8000/${user.avatar}`} alt="" className="w-[50px] h-[50px] rounded-full object-cover" /> </NavLink>
      </div>
    </>
  );
};

export default DashboardHeader;

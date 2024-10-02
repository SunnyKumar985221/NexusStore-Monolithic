import { BsShop, RxCross1, AiOutlineHeart, BiSmile, BiCartAdd, BiSolidStopwatch, BiBadgeCheck, AiOutlineSearch, IoIosArrowForward, AiOutlineShoppingCart, IoIosArrowDown, BiMenuAltLeft, CgProfile, TbChristmasTree } from '../../Assests/icons/icons';
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { useSelector } from "react-redux";
import { backend_url } from "../../server";
import Cart from "../cart/Cart";
import Wishlist from "../Wishlist/Wishlist";

import headerOffer from '../../Assests/images/headerOffer.png';
import logo from '../../Assests/images/logo.png';
import whatsapp from '../../Assests/images/whatsapp.png';
import support from '../../Assests/images/support.png';

import styles from "../../styles/styles";
import '../../Assests/css/header.css';
import { categoriesData, productData } from "../../static/data";


const Header = ({ activeHeading }) => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  const [openWishlist, setOpenWishlist] = useState(false);

  const { isSeller } = useSelector((state) => state.seller);
  const { wishlist } = useSelector((state) => state.wishlist);
  const { cart } = useSelector((state) => state.cart);
  const { allProducts } = useSelector((state) => state.products);
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts =
      productData &&
      productData.filter((item) =>
        item.name.toLowerCase().includes(term.toLowerCase())
      );

    if (term === null || term === "") {
      setSearchData(false);
    } else {
      setSearchData(filteredProducts);
    }
  };
  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      {/* Upper Header */}
      <div className="hidden 800px:h-[50px] 800px:my-[20px] 800px:flex items-center justify-between">
        {/* Logo  */}
        <div className='w-[250px] h-[80px]'><NavLink to="/"><img src={logo} alt="logo" className='logo' /></NavLink></div>

        {/* search box */}
        <div className="w-[50%] relative"> <input type="text" placeholder="Search Product..." value={searchTerm} onInput={handleSearchChange} className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md" />
          <AiOutlineSearch size={30} className="absolute right-2 top-1.5 cursor-pointer" />

          {searchData && searchData.length !== 0 ? (
            <div className="absolute min-h-[30vh] bg-slate-50 shadow-sm-2 z-[9] p-4">
              {searchData &&
                searchData.map((i, index) => {
                  return (
                    <Link to={`/product/${i.id}`}>
                      <div className="w-full flex items-start-py-3">
                        <img
                          // src={`${backend_url}${i.images[0]}`}
                          src={i.image_Url[0].url}
                          alt=""
                          className="w-[40px] h-[40px] mr-[10px]"
                        />
                        <h1>{i.name}</h1>
                      </div>
                    </Link>
                  );
                })}
            </div>
          ) : null}
        </div>

        {/* best seller button  */}
        <div className="seller-button">
          <NavLink to={`${isSeller ? "/dashboard" : "/shop-login"}`}>
            <h1 className="text-[#fff] flex items-center">
              <BsShop size={25} className='p-1' />{isSeller ? "Seller Dashboard" : "Become Seller"}{" "}
              <IoIosArrowForward className="ml-1" />
            </h1>
          </NavLink>
        </div>

        {/* {Special Offer } */}
        <div className="offer-header">
          <span className="w-[180px] h-full"><img src={headerOffer} alt="headerOffer" /></span>
          <div>
            <span><BiBadgeCheck size={20} />Special Offer</span>
            <span><BiSolidStopwatch size={20} />Time Limit</span>
            <span><BiCartAdd size={20} />Most Bought</span>
            <span><BiSmile size={20} />Deal of the Day</span>
          </div>
        </div>
      </div>
      {/* ========================================================================================= */}

      {/* Whats app logo  */}
      <NavLink to='https://wa.me/032-423-1314' target='_blank' rel='noopener noreferrer'>
        <img src={whatsapp} className='whatsapp' alt='contact' />
      </NavLink>

      {/* support app logo  */}
      <NavLink>
        <img src={support} className='support' alt='support' />
      </NavLink>




      {/* ==================================  Promo Slider =================================== */}
      <div className='promoSlider-Container'>
        <span>Flat 400 off on 1999 | Use Code: NEXUS1999 | Free Shipping on all Orders</span>
      </div>
      {/* ========================================================================================= */}


      {/* ==================================   Menu bar     ===================================== */}
      <div className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null} transition hidden 800px:flex items-center justify-between w-full bg-[#5643b3] h-[70px]`} >
        <div className={`${styles.section} relative ${styles.noramlFlex} justify-between`}>

          {/* categories */}
          <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block dropdownMenu">
            <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
            <button className={`h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md`}> All Categories</button>
            <IoIosArrowDown size={20} className="absolute right-2 top-4 cursor-pointer" />
            <span className='dropdownSubMenu'><DropDown categoriesData={categoriesData} /></span>
          </div>


          {/* navitems */}
          <div className={`${styles.noramlFlex}`}>
            <Navbar active={activeHeading} />
          </div>

          {/* Wishlist icon  */}
          <div className="flex">
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]" onClick={() => setOpenWishlist(true)} >
                <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {wishlist && wishlist.length}
                </span>
              </div>
            </div>

            {/* cart icon  */}
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]" onClick={() => setOpenCart(true)} >
                <AiOutlineShoppingCart size={30} color="rgb(255 255 255 / 83%)" />
                <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                  {cart && cart.length}
                </span>
              </div>
            </div>

            {/* Profile icon  */}
            <div className={`${styles.noramlFlex}`}>
              <div className="relative cursor-pointer mr-[15px]">
                {isAuthenticated ? (
                  <Link to="/profile">
                    <img src={`${backend_url}${user?.avatar}`} className="w-[35px] h-[35px] rounded-full" alt="" />
                  </Link>
                ) : (
                  <Link to="/login">
                    <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
                  </Link>
                )}
              </div>
            </div>

            {/* cart side popup */}
            {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

            {/* wishlist side popup */}
            {openWishlist ? (<Wishlist setOpenWishlist={setOpenWishlist} />) : null}
          </div>
        </div>
      </div>

      {/* mobile header */}
      <div
        className={`${active === true ? "shadow-sm fixed top-0 left-0 z-10" : null
          }
      w-full h-[60px] bg-[#fff] z-50 top-0 left-0 shadow-sm 800px:hidden`}
      >
        <div className="w-full flex items-center justify-between">
          <div>
            <BiMenuAltLeft
              size={40}
              className="ml-4"
              onClick={() => setOpen(true)}
            />
          </div>
          <div>
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt=""
                className="mt-3 cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <div
              className="relative mr-[20px]"
              onClick={() => setOpenCart(true)}
            >
              <AiOutlineShoppingCart size={30} />
              <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                {cart && cart.length}
              </span>
            </div>
          </div>
          {/* cart popup */}
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}

          {/* wishlist popup */}
          {openWishlist ? <Wishlist setOpenWishlist={setOpenWishlist} /> : null}
        </div>

        {/* header sidebar */}
        {open && (
          <div
            className={`fixed w-full bg-[#0000005f] z-20 h-full top-0 left-0`}
          >
            <div className="fixed w-[70%] bg-[#fff] h-screen top-0 left-0 z-10 overflow-y-scroll">
              <div className="w-full justify-between flex pr-3">
                <div>
                  <div
                    className="relative mr-[15px]"
                    onClick={() => setOpenWishlist(true) || setOpen(false)}
                  >
                    <AiOutlineHeart size={30} className="mt-5 ml-3" />
                    <span class="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 top right p-0 m-0 text-white font-mono text-[12px]  leading-tight text-center">
                      {wishlist && wishlist.length}
                    </span>
                  </div>
                </div>
                <RxCross1
                  size={30}
                  className="ml-4 mt-5"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="my-8 w-[92%] m-auto h-[40px relative]">
                <input
                  type="search"
                  placeholder="Search Product..."
                  className="h-[40px] w-full px-2 border-[#3957db] border-[2px] rounded-md"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                {searchData && (
                  <div className="absolute bg-[#fff] z-10 shadow w-full left-0 p-3">
                    {searchData.map((i) => {
                      const d = i.name;

                      const Product_name = d.replace(/\s+/g, "-");
                      return (
                        <Link to={`/product/${Product_name}`}>
                          <div className="flex items-center">
                            <img
                              src={i.image_Url[0].url}
                              alt=""
                              className="w-[50px] mr-2"
                            />
                            <h5>{i.name}</h5>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              <Navbar active={activeHeading} />
              <div className={`${styles.button} ml-4 !rounded-[4px]`}>
                <Link to="/shop-login">
                  <h1 className="text-[#fff] flex items-center">
                    Become Seller <IoIosArrowForward className="ml-1" />
                  </h1>
                </Link>
              </div>
              <br />
              <br />
              <br />

              <div className="flex w-full justify-center">
                {isAuthenticated ? (
                  <div>
                    <Link to="/profile">
                      <img
                        src={`${backend_url}${user.avatar}`}
                        alt=""
                        className="w-[60px] h-[60px] rounded-full border-[3px] border-[#0eae88]"
                      />
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="text-[18px] pr-[10px] text-[#000000b7]"
                    >
                      Login /
                    </Link>
                    <Link
                      to="/sign-up"
                      className="text-[18px] text-[#000000b7]"
                    >
                      Sign up
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;

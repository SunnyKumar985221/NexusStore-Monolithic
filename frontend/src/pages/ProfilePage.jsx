import React, { useEffect, useState } from "react";
import Header from "../components/Layout/Header";
import Loader from "../components/Layout/Loader";
import ProfileSideBar from "../components/Profile/ProfileSidebar";
import ProfileContent from "../components/Profile/ProfileContent";
import { useSelector } from "react-redux";
import '../Assests/css/userprofile.css'

const ProfilePage = () => {
  const { loading } = useSelector((state) => state.user);
  const [active, setActive] = useState(1);

  return (
    <div>
      {loading ? (<Loader />) : (
        <>
          <Header />
          <div className="Maincontainer">
            <div className="sidebar">
              <ProfileSideBar active={active} setActive={setActive} />
            </div>
            <div className="pagearea">
              <ProfileContent active={active} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;

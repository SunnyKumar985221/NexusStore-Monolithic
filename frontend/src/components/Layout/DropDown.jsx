import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/styles";
import '../../Assests/css/header.css';

const DropDown = ({ categoriesData }) => {
  const navigate = useNavigate();
  const submitHandle = (i) => {
    navigate(`/products?category=${i.title}`);
    window.location.reload();
  };
  return (
    <div className="scrollbeauty h-[250px] overflow-y-scroll pb-4 w-[270px] bg-[#fff] absolute z-30 rounded-b-md shadow-sm">
      {categoriesData &&
        categoriesData.map((i, index) => (
          <div key={index} className={`menulist ${styles.noramlFlex}`} onClick={() => submitHandle(i)} >
            <img src={i.image_Url} style={{ width: "25px", height: "25px", objectFit: "contain", marginLeft: "10px", userSelect: "none", }} alt="img" />
            <h3 className="m-3 cursor-pointer select-none">{i.title}</h3>
          </div>
        ))}
    </div>
  );
};

export default DropDown;

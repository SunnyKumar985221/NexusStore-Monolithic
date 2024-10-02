import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { backend_url, server } from "../../server";
import { AiOutlineCamera } from "react-icons/ai";
import styles from "../../styles/styles";
import axios from "axios";
import { toast } from "react-toastify";

import storedummy from '../../Assests/images/storedummy.jpg';
import storecover from '../../Assests/images/storecover.jpg';

const ShopSettings = () => {
  const { user } = useSelector((state) => state.seller);
  const [avatar, setAvatar] = useState();
  const [name, setName] = useState(user && user.name);
  const [ownername, setOwnername] = useState(user && user.ownername);
  const [description, setDescription] = useState(user && user.description ? user.description : "");
  const [address, setAddress] = useState(user && user.address);
  const [phoneNumber, setPhoneNumber] = useState(user && user.phoneNumber);
  const [zipCode, setZipcode] = useState(user && user.zipCode);


  const dispatch = useDispatch();
  const handleImage = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setAvatar(file);
    const formData = new FormData();
    formData.append("image", e.target.files[0]);
    await axios.put(`${server}/shop/update-shop-avatar`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      withCredentials: true,
    }).then((res) => {
      // dispatch(loaduser());
      toast.success("Avatar updated successfully!")
    }).catch((error) => {
      toast.error(error.response.data.message);
    })

  };

  const updateHandler = async (e) => {
    e.preventDefault();

    await axios.put(`${server}/shop/update-user-info`, {
      name,
      address,
      zipCode,
      phoneNumber,
      description,
    }, { withCredentials: true }).then((res) => {
      toast.success("Shop info updated succesfully!");
      // dispatch(loaduser());
    }).catch((error) => {
      toast.error(error.response.data.message);
    })
  };

  return (
    <>
      <div className="form-main-container">
        <div className="form-container">
          <div className="img-container">
            <img id="previewImage" src={avatar ? URL.createObjectURL(avatar) : `${storecover}`} alt="shop image" />
          </div>
          <div className="input-container">
            <div className="input-header"><span>Update Seller Information</span></div>
            <form onSubmit={updateHandler}>
              <div className="input-body">

                <div className="input-row">
                  <div className="input-box">
                    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder=" " />
                    <label>Shop Name</label>
                  </div>
                  <div className="input-box">
                    <input type="text" name="ownername" value={ownername} onChange={(e) => setOwnername(e.target.value)} placeholder=" " />
                    <label>Shop Owner Name</label>
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-box">
                    <input type="text" name="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder=" " />
                    <label>Contact Number</label>
                  </div>
                  <div className="input-box">
                    <input type="text" disabled value={user.email || null} placeholder=" " />
                    <label>Email</label>
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-box">
                    <input type="text" name="zipCode" value={zipCode} onChange={(e) => setZipcode(e.target.value)} placeholder=" " />
                    <label>Postal code</label>
                  </div>
                  <div className="input-box">
                    <input type="text" name="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder=" " />
                    <label>Address</label>
                  </div>
                </div>

                <div className="input-row">
                  <div className="input-box">
                    <textarea placeholder='' onChange={(e) => setDescription(e.target.value)}>{description}</textarea>
                    <label>Description</label>
                  </div>
                </div>
              </div>
              <div className="input-footer">
                <div id="profile-image">
                  <input type="file" name="file" id="imageInput" onChange={handleImage} />
                  <span>Update Store Image</span>
                </div>
                <div>
                  <button style={{ backgroundColor: '#71d34d' }} type="submit">Update</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>















      {/* 
      <div>
        <div className="relative">
          <img src={avatar ? URL.createObjectURL(avatar) : `${backend_url}/${user.avatar}`} alt="" className="w-[200px] h-[200px] rounded-full cursor-pointer" />
          <div className="w-[30px] h-[30px] bg-[#E3E9EE] rounded-full flex items-center justify-center cursor-pointer absolute bottom-[10px] right-[15px]">
            <input type="file" id="image" className="hidden" onChange={handleImage} />
            <label htmlFor="image"><AiOutlineCamera /></label>
          </div>
        </div>


        <form onSubmit={updateHandler} >
          <input type="name" placeholder={`${user.name}`} value={name} onChange={(e) => setName(e.target.value)} className={`${styles.input} !w-[95%] mb-4 800px:mb-0`} required />
          <input type="name" placeholder={`${user?.description ? user.description : "Enter your shop description"}`} value={description} onChange={(e) => setDescription(e.target.value)} className={`${styles.input} !w-[95%] mb-4 800px:mb-0`} />
          <input type="name" placeholder={user?.address} value={address} onChange={(e) => setAddress(e.target.value)} className={`${styles.input} !w-[95%] mb-4 800px:mb-0`} required />
          <input type="number" placeholder={user?.phoneNumber} value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className={`${styles.input} !w-[95%] mb-4 800px:mb-0`} required />
          <input type="number" placeholder={user?.zipCode} value={zipCode} onChange={(e) => setZipcode(e.target.value)} className={`${styles.input} !w-[95%] mb-4 800px:mb-0`} required />
          <input type="number" placeholder={user?.zipCode} value={zipCode} onChange={(e) => setZipcode(e.target.value)} className={`${styles.input} !w-[95%] mb-4 800px:mb-0`} required />
          <input type="submit" value="Update Shop" className={`${styles.input} !w-[95%] mb-4 800px:mb-0`} required readOnly />
        </form>
      </div> */}
    </>
  );
};

export default ShopSettings;

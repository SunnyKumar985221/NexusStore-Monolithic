import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { successAlert, errorAlert } from "../Alerts/alerts";
import '../../Assests/css/login.css'
import axios from "axios";
import { useDispatch } from "react-redux";
import { fetchSeller } from "../../redux/reducers/sellertk";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await axios.post(`http://localhost:8000/shop/login-shop`, { email, password }, { withCredentials: true });
      if (response) {
        successAlert('LogIn Successfully');
        navigate("/");
        dispatch(fetchSeller());
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login Failed";
      errorAlert(errorMessage);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="login">
        <div className="loginleft">
          <div className="logoname">NexusStore</div>
          <div className="tagline">Empower your global business with NexusStore – Your gateway to effortless buying and selling worldwide!</div>
        </div>
        <div className="loginright">
          <input className="inputlogin" name='email' onInput={e => setEmail(e.target.value)} placeholder="Email address or phone number" type="email" />
          <input className="inputpassword" name='password' onInput={e => setPassword(e.target.value)} placeholder="Password" type="password" />
          <div><button className="loginbutton" variant="contained">Log In</button></div>
          <div className="forgetpassword">Forgotten password?</div>
          <hr className="diff2" />
          <div><button className="register" variant="contained">
            <NavLink to="/shop-create">
              Register New Shop
            </NavLink></button></div>
        </div>
      </div>
    </form>
  );
};

export default Login;

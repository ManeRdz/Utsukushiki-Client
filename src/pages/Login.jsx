import "../styles/login.css";
import { loginUser } from "../db/Users";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { NavLink, Navigate } from "react-router-dom";
import { IconUserExclamation } from "@tabler/icons-react";
import { IconUserCheck } from "@tabler/icons-react";
import { IconKey } from "@tabler/icons-react";
import { IconKeyOff } from "@tabler/icons-react";

const Login = () => {
  const { user, setUser, darkMode, setSessionExpires } = useContext(Context);
  const [userInfo, setUserInfo] = useState({ userEmail: "", userPassword: "" });
  const [wrongInfo, setWrongInfo] = useState(false);
  const [emailIsFocused, setEmailIsFocused] = useState(false);
  const [passwordIsFocused, setPasswordIsFocused] = useState(false);
  if (user) {
    return <Navigate to="/" />;
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value,
    });
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    const { Authorize, data } = await loginUser(userInfo);
    if (Authorize) {
      Toastify({
        text: "Correctly logged in",
        className: "logged-noti",
        style: {
          background: "linear-gradient(to right, #008a02, #008a02)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
      setUser(data.userData);
      setSessionExpires(new Date(data.tokenExpires));
      setWrongInfo(false);
    } else if (!Authorize) {
      setWrongInfo(true);
      Toastify({
        text: "User Info is wrong, verify it and try again",
        className: "logged-noti",
        style: {
          background: "linear-gradient(to right, #df2821, #df2821)",
        },
        position: "center",
        duration: 5000,
      }).showToast();
    } else {
      Toastify({
        text: "An error occurred, try again!",
        className: "logged-noti",
        style: {
          background: "linear-gradient(to right, #df2821, #df2821)",
        },
        position: "center",
        duration: 5000,
      }).showToast();
    }
  };
  return (
    <section className="login-section">
      <div
        className={
          darkMode
            ? "login-form-container darkContentContainers"
            : "login-form-container"
        }
      >
        <div className="login-image-container">
          <div className="login-text-container">
            <h6 className="login-text-title">It's nice to have you back!</h6>
            <p className="login-text-p">
              In Utsukushiki we want our beloved clients feel great!
            </p>
            <p className="login-text-p">
              that's why we give you a warm welcome with the best and most
              beautiful products for your home!
            </p>
            <p className="login-text-p">
              <span>Please enter</span> your sign-in information to continue!
            </p>
          </div>
        </div>
        <form onSubmit={(e) => handleLogin(e)} className="login-form">
          <h6 className="login-title">Sign in</h6>
          <div className="login-email-input-container">
            <input
              required
              autoComplete="off"
              onChange={(e) => handleChange(e)}
              onFocus={() => setEmailIsFocused(true)}
              type="email"
              name="userEmail"
              className={`login-email-input ${wrongInfo ? "incorrect" : ""} ${
                darkMode ? "darkSignInputs" : ""
              }`}
            />
            <label
              className={
                emailIsFocused
                  ? "login-email-label focused-input"
                  : "login-email-label"
              }
            >
              Email
            </label>
            {wrongInfo ? (
              <IconUserExclamation className="login-wrong-email" />
            ) : (
              <IconUserCheck className="login-correct-email" />
            )}
          </div>
          <div className="login-password-input-container">
            <input
              required
              autoComplete="off"
              onChange={(e) => handleChange(e)}
              onFocus={() => setPasswordIsFocused(true)}
              type="password"
              name="userPassword"
              className={`login-password-input ${
                wrongInfo ? "incorrect" : ""
              } ${darkMode ? "darkSignInputs" : ""}`}
            />
            <label
              className={
                passwordIsFocused
                  ? "login-password-label focused-input"
                  : "login-password-label"
              }
            >
              Password
            </label>
            {wrongInfo ? (
              <IconKeyOff className="login-wrong-password" />
            ) : (
              <IconKey className="login-correct-password" />
            )}
          </div>
          <button className="sign-in-button">Sign in</button>
          <p className="dont-have-an-account">
            You don't have an account?{" "}
            <NavLink to="/register" className="dont-have-an-account-link">
              Click here
            </NavLink>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;

import "../styles/register.css";
import { IconUserExclamation } from "@tabler/icons-react";
import { IconUserCheck } from "@tabler/icons-react";
import { IconAtOff } from "@tabler/icons-react";
import { IconAt } from "@tabler/icons-react";
import { IconKey } from "@tabler/icons-react";
import { useContext, useState } from "react";
import { Context } from "../context/Context";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import { registerUser } from "../db/Users";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

const Register = () => {
  const { user, darkMode } = useContext(Context);
  const naveg = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userUsername: "",
    userEmail: "",
    userPassword: "",
  });
  const [emailIsWrong, setEmailIsWrong] = useState(false);
  const [usernameIsWrong, setUsernameIsWrong] = useState(false);
  const [usernameFocused, setUsernameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [badUsernameMessage, setBadUsernameMessage] = useState("");
  const [badEmailMessage, setBadEmailMessage] = useState("");
  if (user) {
    return <Navigate to="/" />;
  }
  const checkEmail = (email) => {
    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email.match(regexEmail)) {
      setEmailIsWrong(false);
    } else {
      setEmailIsWrong(true);
      setBadEmailMessage("Insert a valid email");
    }
  };
  const checkUserName = (username) => {
    const regexUserName = /^[a-zA-Z0-9_-Ññ]{1,15}$/;
    if (username.match(regexUserName)) {
      setUsernameIsWrong(false);
    } else {
      setUsernameIsWrong(true);
      setBadUsernameMessage(
        "Your username should only have letters, numbers, _, . and a maximum of 15 characters."
      );
    }
  };
  const handleFocus = (e) => {
    if (e.target.name == "userUsername") {
      setUsernameFocused(true);
    } else if (e.target.name == "userEmail") {
      setEmailFocused(true);
    } else {
      setPasswordFocused(true);
    }
  };
  const handleUserChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: name == "userEmail" ? value.toLowerCase() : value,
    });
  };
  const registerUserHandle = async () => {
    let { Registered, message } = await registerUser(userInfo);
    if (usernameIsWrong || emailIsWrong) {
      Toastify({
        text: "Correct the information, and try again",
        className: "logged-noti",
        style: {
          background: "linear-gradient(to right, #df2821, #df2821)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
    } else {
      if (Registered) {
        Toastify({
          text: message,
          className: "logged-noti",
          style: {
            background: "linear-gradient(to right, #008000, #008000)",
          },
          position: "center",
          duration: 2000,
        }).showToast();
        naveg("/login");
      } else if (!Registered) {
        Toastify({
          text: message,
          className: "logged-noti",
          style: {
            background: "linear-gradient(to right, #df2821, #df2821)",
          },
          position: "center",
          duration: 2000,
        }).showToast();
      } else {
        Toastify({
          text: message,
          className: "logged-noti",
          style: {
            background: "linear-gradient(to right, #008000, #008000)",
          },
          position: "center",
          duration: 2000,
        }).showToast();
      }
    }
  };
  return (
    <section className="register-section">
      <div className="register-container">
        <div className="register-text-half">
          <div className="register-text-half-box">
            <h6 className="register-text-half-title">
              Welcome to <span>Utsukushiki!</span>
            </h6>
            <p className="register-text-half-p">
              It seems like you're new here, and that's wonderful!
            </p>
            <p className="register-text-half-p">
              At Utsukushiki we're delighted to welcome new great customers like
              you!
            </p>
            <p className="register-text-half-p">
              To continue exploring our amazing products at the best prices,{" "}
              <span>please fill</span> out the registration form.
            </p>
          </div>
        </div>
        <div
          className={
            darkMode
              ? "register-form-half darkContentContainers"
              : "register-form-half"
          }
        >
          <form
            className="register-form"
            onSubmit={(e) => {
              e.preventDefault();
              registerUserHandle();
            }}
          >
            <h6 className="register-form-title">Sign Up</h6>
            <div className="username-input-box">
              <input
                required
                autoComplete="off"
                type="text"
                name="userUsername"
                onFocus={handleFocus}
                className={`login-password-input ${
                  usernameIsWrong ? "incorrect" : "correct"
                } ${darkMode ? "darkSignInputs" : ""}`}
                onChange={(e) => {
                  checkUserName(e.target.value);
                  handleUserChange(e);
                }}
              />
              <label
                className={
                  usernameFocused
                    ? "username-label focused-input"
                    : "username-label"
                }
              >
                Username
              </label>
              {usernameIsWrong ? (
                <IconUserExclamation className="username-incorrect" />
              ) : (
                <IconUserCheck className="username-correct" />
              )}
              <p
                className={
                  usernameIsWrong
                    ? "bad-input-message"
                    : "bad-input-message-hidden"
                }
              >
                {badUsernameMessage}
              </p>
            </div>
            <div className="email-input-box">
              <input
                required
                autoComplete="off"
                type="email"
                name="userEmail"
                onFocus={handleFocus}
                className={`login-password-input ${
                  emailIsWrong ? "incorrect" : "correct"
                } ${darkMode ? "darkSignInputs" : ""}`}
                onChange={(e) => {
                  checkEmail(e.target.value);
                  handleUserChange(e);
                }}
              />
              <label
                className={
                  emailFocused ? "r-email-label focused-input" : "r-email-label"
                }
              >
                Email
              </label>
              {emailIsWrong ? (
                <IconAtOff className="email-incorrect" />
              ) : (
                <IconAt className="email-correct" />
              )}

              <p
                className={
                  emailIsWrong
                    ? "bad-input-message"
                    : "bad-input-message bad-input-message-hidden"
                }
              >
                {badEmailMessage}
              </p>
            </div>
            <div className="password-input-box">
              <input
                required
                autoComplete="off"
                type="password"
                onFocus={handleFocus}
                name="userPassword"
                className={
                  darkMode
                    ? "register-password-input darkSignInputs"
                    : "register-password-input"
                }
                onChange={(e) => handleUserChange(e)}
              />
              <label
                className={
                  passwordFocused
                    ? "r-password-label focused-input"
                    : "r-password-label"
                }
              >
                Password
              </label>
              <IconKey className="password-correct" />
            </div>
            <button className="r-register-button">Sign Up</button>
            <p className="already-have-an-account">
              You already have an account?{" "}
              <NavLink to="/login" className="already-have-an-account-link">
                Click here.
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;

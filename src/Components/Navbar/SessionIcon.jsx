import { CiUser } from "react-icons/ci";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { logout } from "../../db/Users";
import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";
import { NavLink } from "react-router-dom";

const SessionIcon = ({ setPanelActive, setHamburgerActive }) => {
  const { darkMode, setUser, user, setSessionExpires } = useContext(Context);
  const handleLogout = async () => {
    let { LoggedOut, message } = await logout();
    if (LoggedOut) {
      setUser(null);
      setSessionExpires(null);
      Toastify({
        text: message,
        className: "logged-noti",
        style: {
          background: "linear-gradient(to right, #008a02, #00c200)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
    } else {
      Toastify({
        text: "Something went wrong",
        className: "logged-noti",
        style: {
          background: "linear-gradient(to right, #008a02, #00c200)",
        },
        position: "center",
        duration: 2000,
      }).showToast();
    }
  };
  const handleClick = () => {
    setHamburgerActive(false);
    setPanelActive(false);
    document.body.style.overflow = "auto";
  };
  return (
    <span className={darkMode ? "nav-links user darkLinks" : "nav-links user"}>
      <CiUser />
      <span
        className={
          darkMode
            ? "my-account-show-more darkContentContainers"
            : "my-account-show-more"
        }
      >
        <p className="username-account">{user.userUsername}</p>
        <p className="my-account-show-more-item">
          <NavLink
            className={
              darkMode ? "my-account-option darkLinks" : "my-account-option"
            }
          >
            My Shopping
          </NavLink>
        </p>
        <p className="my-account-show-more-item">
          <NavLink
            className={
              darkMode ? "my-account-option darkLinks" : "my-account-option"
            }
          >
            Favorites
          </NavLink>
        </p>
        <p className="my-account-show-more-item">
          <button
            className="logout-button"
            onClick={() => {
              handleLogout();
              handleClick();
            }}
          >
            Log out
          </button>
        </p>
      </span>
    </span>
  );
};

export default SessionIcon;

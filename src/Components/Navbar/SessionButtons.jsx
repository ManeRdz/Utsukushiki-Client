import { NavLink } from "react-router-dom";

const SessionButtons = ({ setPanelActive, setHamburgerActive }) => {
  const handleClick = () => {
    setPanelActive(false);
    setHamburgerActive(false);
    document.body.style.overflow = "auto";
  };
  return (
    <div className="session-buttons">
      <NavLink onClick={handleClick} to="/login" className="login-button">
        Sign in
      </NavLink>
      <NavLink onClick={handleClick} to="/register" className="register-button">
        Sign up
      </NavLink>
    </div>
  );
};

export default SessionButtons;

import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FaPhoneVolume, FaAlignRight } from "react-icons/fa6";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/portfolio"}
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/services"}
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/platforms"}
        >
          Platforms
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/about-us"}
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "active" : "")}
          to={"/blog"}
        >
          Blog
        </NavLink>
      </li>
    </>
  );

  const handleAddress = () => {
    console.log("hello");
  };
  return (
    <div className="navbar">
      <NavLink to={"/"}>
        <h1 className="logo">LOGO</h1>
      </NavLink>
      <ul>{menu}</ul>
      <div className="contact_details">
        <p>
          <span>
            <FaPhoneVolume /> Call Me:
          </span>{" "}
          +123 456 789
        </p>
        <div className="search_details">
          <FaAlignRight onClick={handleAddress} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

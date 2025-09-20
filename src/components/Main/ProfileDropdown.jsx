import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const ProfileDropdown = ({ buildCourseQuery, cart }) => {
  const [open, setOpen] = useState(false);
  const [username, setUsername] = useState("Guest");
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUsername(localStorage.getItem("user"));
    }

    // Cerrar dropdown si haces click fuera
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUsername("Guest");
    setOpen(false);
    window.location.href = "/signup";
  };

  return (
    <div className="profile-container" ref={dropdownRef}>
      <p className="profile-icon" onClick={() => setOpen(!open)}>
        {username[0]}
      </p>

      {open && (
        <div className="profile-dropdown">
          <p className="profile-name">{username}</p>
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
          <div className="hidden-div">
            <Link className="link-header" to="/">
              Home
            </Link>
            <Link
              className="link-header"
              to={`/checkout${buildCourseQuery(cart)}`}
            >
              Checkout
            </Link>
            <Link className="link-header" to="/login">
              About us
            </Link>
            <Link className="link-header" to="/share">
              Share Schedule
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;

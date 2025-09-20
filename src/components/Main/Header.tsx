import React, { useContext,useEffect, useState } from "react";
import "./Header.css"
import { Link } from "react-router-dom";
import SearchContext from "../../context/SearchContext";
import searchCourses from "../helpers/filter";
import coursesJSON from "../../data/courses.json";
import CartContext from "../../context/CartContext";
import ProfileDropdown from "./ProfileDropdown";
const Header = () => {
  const {search,setSearch}=useContext(SearchContext);
  const [username,setUsername]=useState("Guest");
  const {cart,setCart}=useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const handleOnSearch=(e)=>{
    const result=searchCourses(e,coursesJSON);
    console.log(result)
    setSearch(result)
  }
  useEffect(() => {
    if(localStorage.getItem("user")){
      const userName=localStorage.getItem("user");
      console.log(userName)
      setUsername(userName);
    }else{
      setUsername("Guest");
    }
  }, [])
  const buildCourseQuery = (courses) => {
    const params = new URLSearchParams();

    courses.forEach(course => {
      if (course.number !== undefined) {
        params.append("number", course.number);
      }
    });

   return `?${params.toString()}`;
};

  return (
    <div className="header-container">
      <Link to="/" 
      className="logo-container">
        <i className="fa-solid fa-cart-shopping logo"></i>
        <h2>PennCourseCart</h2>
      </Link>
      <div className="finder-container">
        <div className="search">
          <i className="fa-solid fa-magnifying-glass search__icon" aria-hidden="true"></i>
          <input
            type="text"
            className="search__input"
            placeholder="Search"
            aria-label="Search"
            onChange={(e)=>handleOnSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="links-container">
        <Link className="link-header" to="/">Home</Link>
        <Link className="link-header" to={`/checkout${buildCourseQuery(cart)}`}>Checkout</Link>
        <Link className="link-header" to="/share">Share Schedule</Link>
      </div>
      <ProfileDropdown 
      cart={cart}
      buildCourseQuery={buildCourseQuery}/>
    </div>
  );
};

export default Header;

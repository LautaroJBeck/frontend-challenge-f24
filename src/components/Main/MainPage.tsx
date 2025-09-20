import React from "react";
import Header from "./Header";
import Cart from "./Cart/Cart";
import Schedule from "./Schedule/Schedule";
import CoursesContainer from "./Courses/CoursesContainer";
import Course from "./Courses/Course";
import CartHandler from "./Cart/CartHandler";
import SignUpModal from "./SignUpModal/SignUpModal";
import '../Main/Cart/CourseDescription.css'
const MainPage = () => {
  return (
    <>
    {localStorage.getItem("user")?<>
          <Header />
      <div
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "0 3rem",
        }}
      >
        <div style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-evenly",
          marginTop: "2rem",
            gap: "16px"
        }}
        className="adjust-mediaqueries">
          <CoursesContainer/>
         <CartHandler/>
        </div>

      </div>
    </>:<>
    <SignUpModal/>
        <Header />
      <div
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "0 3rem",
        }}
      >
        <div className="adjust-mediaqueries" style={{
          display: "flex",
          alignItems: "start",
          justifyContent: "space-evenly",
          marginTop: "2rem",
          gap: "16px"
        }
        
        }>
          <CoursesContainer/>
         <CartHandler/> 
        </div>

      </div>
    </>}

    </>
  );
};

export default MainPage;

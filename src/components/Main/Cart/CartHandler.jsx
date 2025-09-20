import React, { useContext, useState } from "react";
import CourseDescription from "./CourseDescription";
import "./Cart.css";
import Cart from "./Cart";
import SelectedContext from "../../../context/SelectedContext";
const CartHandler = () => {
  const { showElement, setShowElement } = useContext(SelectedContext);
  return (
    <>
      <section className="cc-wrap">
        <div className="cc-wrap__header">
          <h3
            onClick={() =>
              setShowElement((prev) => ({
                ...prev,
                elementToShow: "description",
              }))
            }
            className={
              "cc-header__text" +
              (showElement.elementToShow === "description"
                ? " cc-header-active"
                : "")
            }
          >
            Description
          </h3>
          <h3
            onClick={() =>
              setShowElement((prev) => ({
                ...prev,
                elementToShow: "cart",
              }))
            }
            className={
              "cc-header__text" +
              (showElement.elementToShow === "cart" ? " cc-header-active" : "")
            }
          >
            Cart
          </h3>
        </div>
        {showElement.elementToShow === "description" ? (
          <CourseDescription />
        ) : (
          <Cart />
        )}
      </section>
    </>
  );
};

export default CartHandler;

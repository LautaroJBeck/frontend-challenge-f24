import React, { useContext } from "react";
import "./Cart.css";
import CartContext from "../../../context/CartContext";
const CourseInCart = ({ dept, number }) => {
  const rowClass = "incart-row"; /*+
    (selected ? " course-row--selected" : "") +
    (onClick ? " course-row--clickable" : "");*/
  const { cart, setCart } = useContext(CartContext);
  const handleRemoveFromCart = () => {
    const newCart = cart.filter((course) => !(course.number === number));
    setCart(newCart);
  };
  return (
    <li className={rowClass}>
      <div className="incart-row__left">
        <h4 className="incart-row__code">{`${dept}-${number}`}</h4>
        <i
          onClick={() => handleRemoveFromCart()}
          className="fa-solid fa-square-xmark incart-remove"
        ></i>
      </div>
    </li>
  );
};

export default CourseInCart;

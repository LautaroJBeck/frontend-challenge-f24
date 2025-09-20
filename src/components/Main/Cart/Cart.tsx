import React, { useContext } from "react";
import "./Cart.css";
import CourseInCart from "./CourseInCart";
import CartContext from "../../../context/CartContext";
const CartIcon = ({ filled }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 .001 3.999A2 2 0 0 0 17 18zM3 3h2l2.4 10.4A2 2 0 0 0 9.35 15h7.3a2 2 0 0 0 1.95-1.6L20 8H7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    {filled && <path d="M10 10h4M10 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>}
  </svg>
);

/**
 * Props you can pass (all optional/strings/booleans/functions):
 * code, previously, title, badges (array of { text, tone }),
 * onAdd, onNotify, added, notified, className, rightExtras (custom nodes)
 */
const Cart = ({
}) => {
	const {cart,setCart}=useContext(CartContext)
  return (
	<>
	{cart.length>0?	<div className="cc-main">
		<div className="courses-message">
			<h3>These are the courses you are enrolled in</h3>
		</div>
		<ul className="course-list">
				  {
					<>
					  {cart.length>0?cart.map((course) => (
						<CourseInCart
						  dept={course.dept}
						  number={course.number}
						/>
					  )):<></>}
					  {cart.length == 0 && <div>No courses found</div>}
					</>
				  }
		</ul>
	</div>:<div className="cc-main">
		<div className="courses-message">
			<h3>Your cart is empty</h3>	
			<p>Select one course, and click on the cart button to add it to your cart</p>
		<div/>
		</div>	
	</div>}

	</>
  );
};

export default Cart;

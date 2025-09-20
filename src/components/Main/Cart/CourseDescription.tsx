import React, { useContext, useEffect, useState } from 'react'
import "./CourseDescription.css";
import SelectedContext from '../../../context/SelectedContext';
import CartContext from '../../../context/CartContext';
const CartIcon = ({ filled }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 .001 3.999A2 2 0 0 0 17 18zM3 3h2l2.4 10.4A2 2 0 0 0 9.35 15h7.3a2 2 0 0 0 1.95-1.6L20 8H7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    {filled && <path d="M10 10h4M10 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>}
  </svg>
);
const CourseDescription = ({
  onAdd,
  added = false,
}) => {
  const { showElement, setShowElement } = useContext(SelectedContext);
  const {courseSelected}=showElement
	const {cart,setCart}=useContext(CartContext)
  const [showCartButton,setShowCartButton]=useState(true)
    useEffect(()=>{
      if(cart.find((c)=>c.number===courseSelected?.number)){
        setShowCartButton(false)
      }else{
        setShowCartButton(true)
      }
    },[cart,courseSelected])

  
const handleAddToCart = () => {
  if(cart.length>=7){
    alert("You can only add up to 7 courses to the cart.");
      return;
  } 
  console.log("courseSelected",courseSelected)
  console.log(cart)
  for(let car of cart){
   if(car.number==courseSelected.number){
    alert("Course already in cart");
    return;
  }
  }
  setCart([...cart, courseSelected])
  setShowElement({ ...courseSelected, elementToShow: "cart" });


};




  return (
    <>
    {courseSelected?<div className="cc-main">
		<div className="course-description-header">
		<div>        {<h1 className="cc-code">{`${courseSelected.dept}-${courseSelected.number}`}</h1>}
        {<h2 className="cc-title">{courseSelected.title}</h2>}</div>
		<div className="cc-actions">
      {showCartButton?        <button
          type="button"
          className={"cc-iconbtn" + (added ? " cc-iconbtn--active" : "")}
          aria-label={added ? "In cart" : "Add to cart"}
          onClick={()=>handleAddToCart()}
        >
          <CartIcon filled={added} />
        </button>:<></>}
      </div>
		</div>

		<p className="cc-description">{courseSelected.description}</p>
      </div> :<div className="cc-main">
        <div className="courses-message">
          <h2 className="co">No course selected</h2>
        </div>
        <p className="cc-description">Please select a course to see its description.</p>
      </div>}
   </>       
  )
}

export default CourseDescription
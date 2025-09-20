import React, { useContext, useEffect, useState } from "react";
import "./Course.css";
import SelectedContext from "../../../context/SelectedContext";
import CartContext from "../../../context/CartContext";

const Course = ({
  dept,
  number,
  description,
  title,
  selected = false,
}) => {
  const { setShowElement } = useContext(SelectedContext);
  const { cart } = useContext(CartContext);
  const [courseOnCart, setCourseOnCart] = useState(false);
  const [courseData,setCourseData]=useState({
    difficulty:null,
    quality:null
  })
  useEffect(() => {
    setCourseOnCart(Boolean(cart.find((c) => c.number === number)));
  }, [cart, number]);
    useEffect(() => {
      const asyncFunction=async()=>{
        try {
          const res=await fetch(`/api/base/2022A/courses/${dept.toUpperCase()}-${number}`)
          const json=await res.json()
          setCourseData({
          difficulty:json.difficulty,
          quality:json.instructor_quality
          })
        } catch (error) {
        }
      }
      asyncFunction()
    }, [])
  const handleOnClick = () => {
    setShowElement({
      courseSelected: { dept, number, description, title },
      elementToShow: "description",
    });
  };

  // format numbers like "2.9" — if missing, show a dash
  const fmt = (v) =>
    typeof v === "number" && !Number.isNaN(v) ? v.toFixed(1) : "—";

  return (
    <li className="course-row" onClick={handleOnClick}>
      <div className="course-row__left">
        <div className={courseOnCart ? "course-included" : "course-row__code"}>
          {dept}-{number}
        </div>
      </div>

      <div className="course-row__right" aria-label="metrics">
        <span className="pill pill--blue">{fmt(courseData.quality)}</span>
        <span className="pill pill--green">{fmt(courseData.difficulty)}</span>
      </div>
    </li>
  );
};

export default Course;

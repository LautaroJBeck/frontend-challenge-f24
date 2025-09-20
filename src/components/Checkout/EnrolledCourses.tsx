import React from "react";
import "./EnrolledCourses.css";

const EnrolledCourses = ({ courses }) => {
  return (
    <>
    {courses.length === 0 ? (
      <div className="enrolled-wrapper">
      <div className="enrolled-card">
        <h2 className="enrolled-title">
          No courses enrolled yet. Please add courses to your cart and proceed to checkout.
        </h2>
        </div>
      </div>
    ) : (    <div className="enrolled-wrapper">
      <div className="enrolled-card">
        <h2 className="enrolled-title">
          These are the courses you're enrolled in for this semester:
        </h2>
        <ul className="enrolled-list">
          {courses.map((c, idx) => (
            <li
              key={idx}
              className={`enrolled-item ${
                idx !== courses.length - 1 ? "with-border" : ""
              }`}
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </div>)}
    </>
  );
};

export default EnrolledCourses;

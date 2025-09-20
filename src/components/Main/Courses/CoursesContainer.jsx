import React, { useContext, useEffect, useState } from "react";
import "./Course.css";
import coursesList from "../../../data/courses.json";
import Course from "./Course";
import SearchContext from "../../../context/SearchContext";

const CourseContainer = ({
  title = "Available Courses",
  rightColLabels = { first: "QUAL", second: "DIFF" },
}) => {
  const [courses, setCourses] = useState([]);
  const { search, setSearch } = useContext(SearchContext);

  return (
    <>
      <section className="course-wrap">
        <header className="course-wrap__header">
          <h2 className="course-wrap__title">{title}</h2>
        </header>
        {search.length > 0 ? (
          <div className="course-card">
            <div className="course-card__head">
              <div className="course-card__head-left">COURSE</div>
              <div className="course-card__head-right">
                <span className="course-card__head-pilllabel">
                  {rightColLabels.first}
                </span>
                <span className="course-card__head-pilllabel">
                  {rightColLabels.second}
                </span>
              </div>
            </div>

            <ul className="course-list">
              {search.map((course) => (
                <Course
                  key={`${course.dept}-${course.number}`}
                  dept={course.dept}
                  title={course.title}
                  description={course.description}
                  number={course.number}
                  qual={course.qual} // ⬅ make sure your data has these fields
                  diff={course.diff}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="cc-main">
            <div className="courses-message">
              <h2 className="h2-nofound">No courses found</h2>
            </div>
            <p className="cc-description">
              Please introduce another description
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default CourseContainer;

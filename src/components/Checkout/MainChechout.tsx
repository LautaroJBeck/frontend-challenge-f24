import React from 'react'
import Header from '../Main/Header'
import { useSearchParams } from "react-router-dom";
import EnrolledCourses from './EnrolledCourses';
import courses from "../../data/courses.json";
const MainChechout = () => {
  const [searchParams] = useSearchParams();

  const coursesEnrolled = searchParams.getAll("number").map((num)=>{
    const course = courses.find(c => c.number.toString() === num);
    if(course){
    return `${course.dept}-${course.number}`
    }

  }
    );
  console.log(coursesEnrolled); // ["110", "120"]
  return (
    <>
    <Header/>

    <EnrolledCourses courses={coursesEnrolled}/>
    </>
  )
}

export default MainChechout
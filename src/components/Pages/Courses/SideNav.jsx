import React from "react";
import { Link } from "react-router-dom";

const SideNav = ({ course }) => {
  return (
    <>
    <Link to={`/course-details/${course.id}`} className="btn bg-transparent  hover:bg-rose-800 hover:text-white border-0 rounded-none border-r-2 text-right hover:text-2xl trasition ease-in duration-300" rel="noopener noreferrer" href="#">
      {course.name}
    </Link>
    <hr /></>
  );
};

export default SideNav;

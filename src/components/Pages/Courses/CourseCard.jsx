import React from "react";
import { Link } from "react-router-dom";


const CourseCard = ({ course }) => {
  const { name, picture, details, id } = course;

  console.log(course);
  return (
    <div>
      <section>
        <div className="mx-auto">
          <div className="card w-72 h-96 bg-base-200 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={picture} alt="Courses" className="rounded-xl w-36" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold">{name}</h2>
              <p>{details.slice(0, 40) + "....."}</p>
              <div className="card-actions">
                <Link to={`/course-details/${id}`}><button className="btn  border-0 ">
                  View Details
                </button></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCard;

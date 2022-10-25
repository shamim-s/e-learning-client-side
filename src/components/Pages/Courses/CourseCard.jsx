import React from "react";

const CourseCard = ({ course }) => {
  const { name, enrolled, picture, details } = course;
  console.log(course);
  return (
    <div>
      <section>
        <div className="mx-auto">
          <div className="card w-72 h-96 bg-slate-50 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={picture} alt="Courses" className="rounded-xl w-36" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title font-bold">{name}</h2>
              <p>{details.slice(0, 40) + "....."}</p>
              <div className="card-actions">
                <button className="btn bg-rose-800 border-0 ">
                  View Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CourseCard;

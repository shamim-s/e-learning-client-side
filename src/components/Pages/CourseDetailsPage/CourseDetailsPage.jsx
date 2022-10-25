import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaStar, FaBookReader, FaCalendarAlt, FaDollarSign } from "react-icons/fa";

const CourseDetailsPage = () => {
  const course = useLoaderData();
  const { name, details, duration, enrolled, picture, price, review } = course;

  return (
    <div className="max-w-lg p-4 shadow-xl dark:bg-gray-900 dark:text-gray-100 mx-auto mt-8 mb-8 rounded-xl">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={picture}
            alt=""
            className="block object-cover object-center rounded-md dark:bg-gray-500 w-40"
          />
        </div>
        <div className="space-y-2">
          <Link rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold dark:text-violet-400">
              {name}
            </h3>
            <hr />
          </Link>
          <p className="leading-snug dark:text-gray-400">
            {details}
          </p>
          <hr />
          <p className="text-lg font-medium flex items-center"><FaCalendarAlt className="mr-2"/>{duration}</p>
          <p className="text-lg font-medium flex items-center"><FaBookReader className="mr-2"/>{enrolled}</p>
          <p className="text-lg font-medium flex items-center text-yellow-400"><FaStar className="mr-2"/>{review}</p>
          <p className="text-xl font-bold text-orange-500 flex items-center"><FaDollarSign className="mr-2"/>{price}</p>
        </div>
        <button className="btn mr-4">Enroll Now</button>
        <button className="btn bg-green-700 border-0">Download PDF</button>
      </div>
    </div>
  );
};

export default CourseDetailsPage;

import React from "react";
import { useLoaderData } from "react-router-dom";
import CourseCard from "./CourseCard";
import SideNav from "./SideNav";

const Courses = () => {
  const courses = useLoaderData();
  console.log(courses);

  return (
    <section className="lg:flex">
      <div className="w-3/4 grid lg:grid-cols-3 md:grid-cols-2 gap-8 lg:p-10 mx-auto lg:mb-0 md:mb-0 mb-14">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course}></CourseCard>
        ))}
      </div>
      <div className="lg:w-1/4 lg:p-10 lg:mb-0 md:mb-0 mb-14">
        <aside className="w-full p-6 sm:w-60 dark:bg-gray-900 dark:text-gray-100">
          <nav className="space-y-8 text-sm">
            <div className="space-y-2">
              <h2 className="text-sm font-semibold tracking-widest uppercase dark:text-gray-400">
                ALL COURSES HERE
              </h2>
              <hr />
              <div className="flex flex-col space-y-1">
                {
                    courses.map(course => <SideNav key={course.id} course={course}></SideNav>)
                }
              </div>
            </div>
          </nav>
        </aside>
      </div>
    </section>
  );
};

export default Courses;

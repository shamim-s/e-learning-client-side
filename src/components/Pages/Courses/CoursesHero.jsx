import React from "react";
import HeroImage from '../../../images/Na_Nov_02.jpg';
const CoursesHero = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={HeroImage}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl">
              Hey! Check our latest <span className="text-rose-800">Courses</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              Enrolle your best choices to build powerfull and Pro skills. We provides the best courses for our students
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesHero;

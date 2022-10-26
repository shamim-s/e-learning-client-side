import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const CourseEnrollment = () => {
  const course = useLoaderData();
  const [openModal, setOpenModal] = useState(false);

  const handleEnrollSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const fname = form.fname.value;
    const lname = form.lname.value;
    const email = form.email.value;
  }

  console.log(course);
  return (
    <div className="p-10 shadow-2xl relative">
      <section className={`p-6 bg-base-200 dark:bg-gray-800 dark:text-gray-50 `}>
        <form
          onSubmit={handleEnrollSubmit}
          action=""
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-bold text-2xl">{course.name}</p>
              <p className="text-base">
                {course.details.slice(0, 100) + "...."}
              </p>
              <p className="text-xl">
                <span className="font-bold">Price:</span> ${course.price}
              </p>
              <p className="text-xl">
                <span className="font-bold">Total:</span> {course.enrolled}
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="firstname" className="text-sm">
                  First name
                </label>
                <input
                  id="firstname"
                  type="text"
                  name="fname"
                  placeholder="First name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="lastname" className="text-sm">
                  Last name
                </label>
                <input
                  id="lastname"
                  name="lname"
                  type="text"
                  placeholder="Last name"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="address" className="text-sm">
                  Address
                </label>
                <input
                  id="address"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="city" className="text-sm">
                  City
                </label>
                <input
                  id="city"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="state" className="text-sm">
                  State / Province
                </label>
                <input
                  id="state"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="zip" className="text-sm">
                  ZIP / Postal
                </label>
                <input
                  id="zip"
                  type="text"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:border-gray-700 dark:text-gray-900"
                />
              </div>
            </div>
          </fieldset>
          <button onClick={() => {setOpenModal(true)}} type="submit" className="btn">
            Enroll
          </button>
        </form>
      </section>
      {
            openModal && <Modal closeModal={setOpenModal} course={course}></Modal>
        }
    </div>
  );
};

export default CourseEnrollment;

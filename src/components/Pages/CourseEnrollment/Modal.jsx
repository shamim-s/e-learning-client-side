import React from "react";
import star from '../../../images/star.png';
const Modal = ({closeModal, course}) => {
  return (
    <div className="absolute lg:top-12 top-44 lg:left-96 left-0 lg:p-0 md:p-4 p-4">
      <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md shadow-gray-900 shadow-2xl bg-base-200 sm:py-8 sm:px-12 dark:bg-gray-900 dark:text-gray-100">
        <button onClick={() => {closeModal(false)}} className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            fill="currentColor"
            className="flex-shrink-0 w-6 h-6"
          >
            <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
          </svg>
        </button>
        <img src={star} className="w-56" alt="" />
        <h2 className="text-2xl font-semibold leading-tight tracking-wide text-center">
          Congratulation! You Enrolled {course.name} Course.
        </h2>
        <p className="flex-1 text-center dark:text-gray-400">
          Tempora ipsa quod magnam non, dolores nemo optio. Praesentium soluta
          maiores non itaque aliquam sint.
        </p>
      </div>
    </div>
  );
};

export default Modal;

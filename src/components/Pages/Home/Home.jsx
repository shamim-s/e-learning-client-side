import React from "react";
import HeroImage from "../../../images/3699660.jpg";
import bgImage from "../../../images/17973908.png";
import HomeContent from "./HomeContent";
import { Link } from "react-router-dom";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <section className="mb-4">
        <div className="hero min-h-screen bg-base-200" style={myStyle}>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={HeroImage} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold text-rose-800">
                WELCOME TO E-TUTOR
              </h1>
              <p className="py-6">
                The best online learning platfrom. Here you get everything to
                build your unless and powerfull Skills. The e-Tutor provides you
                many Powerful courses for your future journey.
              </p>
              <button className="btn bg-rose-800 border-0">Get Started</button>
            </div>
          </div>
        </div>
      </section>
      <section className="">
      <h1 className="lg:text-3xl font-bold text-center md:text-3xl mb-2">Learn the secrets to Life Success</h1>
      <hr />
        <div className="lg:p-12">
          <HomeContent></HomeContent>
          <p className="text-center mt-5"><Link className="btn border-0 hover:bg-rose-800 hover:border-0" to={''}>View Courses</Link></p>
        </div>
      </section>
    </div>
  );
};

export default Home;

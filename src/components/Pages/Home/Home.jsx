import React from "react";
import HeroImage from "../../../images/3699660.jpg";
import bgImage from "../../../images/17973908.png";

const Home = () => {
  const myStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div>
      <section>
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
      <section>
        <h1>Learn the secrets to Life Success</h1>
    
      </section>
    </div>
  );
};

export default Home;

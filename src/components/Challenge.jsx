import React from "react";
import memory from "../assets/images/icon-memory.svg";
import reaction from "../assets/images/icon-reaction.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";

const Challenge = () => {
  return (
    <div>
      <section className="w-[375px] mx-auto bg-White mb-10 shadow-lg shadow-Dark-gray-blue-alpha">
        {/* parte azul */}
        <div className="bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue h-[356px] pt-8 px-10 text-center rounded-b-3xl">
          <h1 className="mb-6 text-Light-lavender text-[18px] ">Your Result</h1>
          <div className="rounded-full w-[140px] h-[140px] bg-gradient-to-t mx-auto grid place-content-center mb-6 text-[18px] from-Light-slate-blue to-Light-royal-blue">
            <p className="text-white text-4xl font-bold">76</p>
            <p className="text-Light-lavender">of 100</p>
          </div>
          <p>Great</p>
          <p>
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        {/* parte blanca */}
        <div>
          <h1>Summary</h1>
          <div>
            <p>
              <img src={reaction} alt="" />
              <span>Reaction</span>
            </p>

            <p>
              80 <span> / 100</span>
            </p>
          </div>

          <div>
            <p>
              <img src={memory} alt="" />
              <span>Memory</span>
            </p>

            <p>
              92 <span> / 100</span>
            </p>
          </div>

          <div>
            <p>
              <img src={verbal} alt="" />
              <span>Verbal</span>
            </p>

            <p>
              61 <span> / 100</span>
            </p>
          </div>

          <div>
            <p>
              <img src={visual} alt="" />
              <span>Visual</span>
            </p>

            <p>
              72 <span> / 100</span>
            </p>
          </div>

          <button>Continue</button>
        </div>
      </section>
      <div className="w-[375px] mx-auto">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://nuevo-cv.vercel.app/">Erick Segura</a>.
      </div>
    </div>
  );
};

export default Challenge;

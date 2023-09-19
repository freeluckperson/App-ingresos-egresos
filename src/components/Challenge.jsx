import React from "react";
import memory from "../assets/images/icon-memory.svg";
import reaction from "../assets/images/icon-reaction.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";

const Challenge = () => {
  return (
    <div>
      <section className="w-[375px] mx-auto bg-White mb-10 shadow-lg shadow-Dark-gray-blue-alpha md:flex md:mt-6 md:w-[740px] md:h-[442px] md:rounded-3xl">

        {/* parte azul */}
        <div className="bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue h-[356px] pt-8 px-10 text-center rounded-b-3xl md:w-[370px] md:h-full md:rounded-3xl md:pt-16 ">
          <h1 className="mb-6 text-Light-lavender text-[18px] ">Your Result</h1>
          <div className="rounded-full w-[140px] h-[140px] bg-gradient-to-t mx-auto grid place-content-center mb-6 text-[18px] from-Light-slate-blue to-Light-royal-blue">
            <p className="text-white text-4xl font-bold">90</p>
            <p className="text-Light-lavender ">of 100</p>
          </div>
          <p className="text-white text-[18px] md:mb-6">Great</p>
          <p className="text-Light-lavender">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        {/* parte blanca */}
        <div className="px-8 h-[454px] md:mt-6 ">
          <h2 className="text-[18px] mb-6 font-bold">Summary</h2>

          <div className="bg-Light-red-alpha flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center md:w-[300px] md:py-3">
            <p className="text-Light-red flex gap-4">
              <img src={reaction} alt="" />
              <span>Reaction</span>
            </p>

            <p>
              80 <span className="text-Dark-gray-blue-alpha"> / 100</span>
            </p>
          </div>

          <div className="bg-Orangey-yellow-alpha flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center">
            <p className="text-Orangey-yellow flex gap-4">
              <img src={memory} alt="" />
              <span>Memory</span>
            </p>

            <p>
              92 <span className="text-Dark-gray-blue-alpha"> / 100</span>
            </p>
          </div>

          <div className="bg-Green-teal-alpha flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center">
            <p className="text-Green-teal flex gap-4">
              <img src={verbal} alt="" />
              <span>Verbal</span>
            </p>

            <p>
              61 <span className="text-Dark-gray-blue-alpha"> / 100</span>
            </p>
          </div>

          <div className="bg-Cobalt-blue-alpha flex place-content-between p-3 rounded-lg mb-4 h-[54px] items-center">
            <p className="text-Cobalt-blue flex gap-4">
              <img src={visual} alt="" />
              <span>Visual</span>
            </p>

            <p>
              72 <span className="text-Dark-gray-blue-alpha"> / 100</span>
            </p>
          </div>

          <button className="bg-Dark-gray-blue text-white w-full text-[18px] font-bold rounded-full h-14 hover:bg-gradient-to-b from-Light-slate-blue to-Light-royal-blue">
            Continue
          </button>
        </div>
      </section>
      <div className="w-[375px] mx-auto text-center text-[12px] mb-6">
        Challenge by{" "}
        <a
          className="text-Light-slate-blue"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          className="text-Light-slate-blue"
          href="https://nuevo-cv.vercel.app/"
        >
          Erick Segura
        </a>
        .
      </div>
    </div>
  );
};

export default Challenge;

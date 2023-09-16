import React from "react";
import memory from "../assets/images/icon-memory.svg";
import reaction from "../assets/images/icon-reaction.svg";
import verbal from "../assets/images/icon-verbal.svg";
import visual from "../assets/images/icon-visual.svg";

const Challenge = () => {
  return (
    <section>
      {/* parte azul */}
      <div>
        <h1>Your Result</h1>
        <div>76 of 100</div>
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
      <div class="attribution">
        Challenge by
         <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://nuevo-cv.vercel.app/">Erick Segura</a>.
      </div>
    </section>
  );
};

export default Challenge;

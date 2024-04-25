import React from "react";
import "./Therapists.css";

const Therapists = () => {
  return (
    <div className="  text-center d-flex mx-auto   justify-content-center align-items-center flex-column main  ">
      <div className="therapist">
        <h1>
          <span className=" span-green">Therapists</span> who know the Way
        </h1>

        <p className="p1">
          Therapists have expertise and experience based on their interactions
          with travellers who went down the same or a similar paths before you!
        </p>
        <p className=" p2">
          They have literally spoken to many people who have faced similar
          circumstances and they have learned the way through the rocky path.
        </p>
      </div>
    </div>
  );
};

export default Therapists;

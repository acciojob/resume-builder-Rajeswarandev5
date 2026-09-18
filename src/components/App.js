
import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Profile from "./profile";
import Education from "./education";
import Skills from "./skills";
import Projects from "./projects";
import SocialMedia from "./socialMedia";
import ResumePreview from "./resumePreview";

import "./../styles/App.css";

const App = () => {
  const currentPage = useSelector(
    (state) => state.currentPage
  );

  const dispatch = useDispatch();

  const pages = [
    <Profile />,
    <Education />,
    <Skills />,
    <Projects />,
    <SocialMedia />,
    <ResumePreview />,
  ];

  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      dispatch({
        type: "SET_PAGE",
        payload: currentPage + 1,
      });
    }
  };

  const handleBack = () => {
    if (currentPage > 0) {
      dispatch({
        type: "SET_PAGE",
        payload: currentPage - 1,
      });
    }
  };

  const handleSaveContinue = () => {
    handleNext();
  };

  return (
    <div className="resume_app">
      <h1>Resume Builder</h1>

      {pages[currentPage]}

      <div className="navigation">
        {currentPage > 0 && (
          <button id="back" onClick={handleBack}>
            Back
          </button>
        )}

        {currentPage < pages.length - 1 && (
          <button id="next" onClick={handleNext}>
            Next
          </button>
        )}

        {currentPage < pages.length - 1 && (
          <button
            id="save_continue"
            onClick={handleSaveContinue}
          >
            Save & Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
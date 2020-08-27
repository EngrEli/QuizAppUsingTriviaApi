import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NextButton({ category, handleNext }) {
  return (
    <button
      className="next-button"
      onClick={handleNext}
      style={{
        display: category === null ? "none" : "block",
      }}
    >
      Next
      <FontAwesomeIcon icon={faArrowRight} className="next-icon" />
    </button>
  );
}

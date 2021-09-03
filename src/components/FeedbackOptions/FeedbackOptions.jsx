import React from "react";
import PropTypes from "prop-types";

import { Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedBack }) => {
  return options.map((option) => {
    const nameBtn = option.replace(option[0], option[0].toUpperCase());
    return (
      <Button
        key={option}
        type="button"
        onClick={() => onLeaveFeedBack(option)}
      >
        {nameBtn}
      </Button>
    );
  });
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedBack: PropTypes.func,
};

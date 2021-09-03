// import PropTypes from "prop-types";
import { Component } from "react";
import {
  TitleFeedBack,
  TitleStatistic,
  ContainerButtons,
} from "./FeedBack.styled";
import { FeedbackOptions } from "components/FeedbackOptions/FeedbackOptions";
import { Statistics } from "components/Statistics/Statistics";

export class FeedBack extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedBack = (option) => {
    this.setState((prevState) => {
      return { [option]: prevState[option] + 1 };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState((prevState) => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };

  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => {
      return {
        positivePercentage: Math.round(
          (prevState.good / prevState.total) * 100
        ),
      };
    });
  };

  render() {
    return (
      <>
        <TitleFeedBack>{this.props.title}</TitleFeedBack>
        <ContainerButtons>
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onLeaveFeedBack={this.onLeaveFeedBack}
          />
        </ContainerButtons>
        <TitleStatistic>{this.props.titleStatistic}</TitleStatistic>
        {this.state.total ? (
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        ) : (
          <TitleFeedBack>{this.props.titleNoStatistic}</TitleFeedBack>
        )}
        )
      </>
    );
  }
}

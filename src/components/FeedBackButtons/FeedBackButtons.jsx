// import PropTypes from "prop-types";
import { Component } from "react";
import {
  TitleFeedBack,
  ContainerButtons,
  Button,
  TitleStatistic,
  NameStatic,
  ValueStatistic,
} from "./FeedBackButtons.styled";

export class FeedBackButtons extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  good = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
    this.countTotalFeedback();
  };

  neutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
    this.countTotalFeedback();
  };

  bad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState((prevState) => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
  };

  render() {
    return (
      <div>
        <TitleFeedBack>{this.props.title}</TitleFeedBack>
        <ContainerButtons>
          <Button type="button" onClick={this.good}>
            Good
          </Button>
          <Button type="button" onClick={this.neutral}>
            Neutral
          </Button>
          <Button type="button" onClick={this.bad}>
            Bad
          </Button>
        </ContainerButtons>
        <div>
          <TitleStatistic>{this.props.titleStatistic}</TitleStatistic>
          <NameStatic>
            Good:
            <ValueStatistic>{this.state.good}</ValueStatistic>
          </NameStatic>
          <NameStatic>
            Neutral:
            <ValueStatistic>{this.state.neutral}</ValueStatistic>
          </NameStatic>
          <NameStatic>
            Bad:
            <ValueStatistic>{this.state.bad}</ValueStatistic>
          </NameStatic>
          {this.state.total && (
            <NameStatic>
              Total:
              <ValueStatistic>{this.state.total}</ValueStatistic>
            </NameStatic>
          )}
        </div>
      </div>
    );
  }
}

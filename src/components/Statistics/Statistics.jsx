import React, { Component } from 'react';
// import style from './Statistics.module.css';

class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  goodFeedback = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  neutralFeedback = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  badFeedback = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = total => {
    const { good } = this.state;
    total = this.countTotalFeedback();
    const positiveFeedback = (good / total) * 100;
    return Math.round(positiveFeedback);
  };

  render() {
    this.countPositiveFeedbackPercentage();
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage();
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <button type="button" onClick={this.goodFeedback}>
          Good
        </button>
        <button type="button" onClick={this.neutralFeedback}>
          Neutral
        </button>
        <button type="button" onClick={this.badFeedback}>
          Bad
        </button>

        <p>Please leave feedback</p>
        <p>Statistics</p>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad}</p>
        <p>Total:{total}</p>
        <p>Positive feedback:{positiveFeedback}%</p>
      </div>
    );
  }
}

export default Statistics;

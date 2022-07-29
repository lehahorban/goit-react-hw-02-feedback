import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // goodFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       good: prevState.good + 1,
  //     };
  //   });
  // };

  // neutralFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       neutral: prevState.neutral + 1,
  //     };
  //   });
  // };

  // badFeedback = () => {
  //   this.setState(prevState => {
  //     return {
  //       bad: prevState.bad + 1,
  //     };
  //   });
  // };

  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
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
    const objectKeys = Object.keys(this.state);

    return (
      <div>
        <p>Please leave feedback</p>
        <FeedbackOptions
          options={objectKeys}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>
        <p>Statistics</p>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positiveFeedback}
        ></Statistics>
      </div>
    );
  }
}

export default App;

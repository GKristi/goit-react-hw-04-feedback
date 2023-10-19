import { Component } from "react";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./Section/Section";
import Statistics from "./Statistics/Statistics";
import { Container } from "./index.styled";
import Notification from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  countTotalFeedback = (good, neutral, bad) => good + neutral + bad

  countPositiveFeedbackPercentage(good, bad) {
    const result = good / (good + bad) * 100;
    return `${Math.round(result)}%`;
  }

  hendlerFeedback = (e) => {
    if (e.target.textContent === 'good') {
      this.setState(({ good }) => {
        return { good: good + 1 }
      })
    }
    if (e.target.textContent === 'neutral') {
      this.setState(({ neutral }) => {
        return { neutral: neutral + 1 }
      })
    }
    if (e.target.textContent === 'bad') {
      this.setState(({ bad }) => {
        return { bad: bad + 1 }
      })
    }
  }

  render() {
    const { good, neutral, bad } = this.state;
    return <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.hendlerFeedback} />
      </Section>
      <Section title="Statistics">
        {(good > 0 || neutral > 0 || bad > 0) ?
          (<Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback} positivePercentage={this.countPositiveFeedbackPercentage} />) : (<Notification message="There is no feedback" />)
        }
      </Section>
    </Container>


  }
}
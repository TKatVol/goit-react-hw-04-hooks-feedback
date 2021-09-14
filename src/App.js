import { useState, useEffect} from 'react';
import { GiCoffeeCup } from 'react-icons/gi';

import { Section } from './components/Section/Section';
import { FeedbackOptions } from './components/FeedbackOptions/FeedbackOptions';
import { Notification } from './components/Notification/Notification';
import { Statistics } from './components/Statistics/Statistics';

import './App.css';

const buttonOptions = ['good', 'neutral', 'bad'];

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [countTotalFeedback, setCountTotalFeedback] = useState(0);
  const [countPositiveFeedbackPercentage, setCountPositiveFeedbackPercentage] = useState(0);

  const handleCounterIncrement = event => {
    
    switch (event.target.textContent) {
      case 'good':
        setGood(s => s + 1);
        break;
      
      case 'neutral':
        setNeutral(s => s + 1);
        break;
      
      case 'bad':
        setBad(s => s + 1);
        break;
           
      default:
        return;
    }
  }

  useEffect(() => {
    const countTotalFeedback = good + neutral + bad;
    setCountTotalFeedback(countTotalFeedback);
    
    const countPositiveFeedbackPercentage = Math.round(good * 100 / countTotalFeedback);
    setCountPositiveFeedbackPercentage(countPositiveFeedbackPercentage);
          
  }, [good, neutral, bad]);

  return (
      <div className="App">
      <h1 className="title">Expresso <GiCoffeeCup /></h1>

      <Section title="Please leave feedback">
          <FeedbackOptions
             options={buttonOptions}
          onLeaveFeedback={handleCounterIncrement}
          />
      </Section>

      <Section title="Statistics">
        { countTotalFeedback === 0
          ? <Notification message="No feedback given" />
          : <Statistics good={good} neutral={neutral} bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            /> 
        }
      </Section>
      </div>
    )
  }

  export default App;

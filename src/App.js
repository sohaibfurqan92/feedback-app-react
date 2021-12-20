import Navbar from './components/Navbar';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import data from './data/FeedbackData';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedback, setFeedback] = useState(data);
  return (
    <>
      <Navbar bgColor='#131428' color='#ff6a95' />
      <div className='container'>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;

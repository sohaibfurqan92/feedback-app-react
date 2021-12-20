import Navbar from './components/Navbar';
import FeedbackList from './components/FeedbackList';
import { useState } from 'react';
import data from './data/FeedbackData';

function App() {
  const [feedback, setFeedback] = useState(data);
  return (
    <>
      <Navbar bgColor='#131428' color='#ff6a95' />;
      <div className='container'>
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;

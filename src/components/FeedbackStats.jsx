import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext);
  let avg =
    feedback.reduce((acc, item) => {
      return acc + item.rating;
    }, 0) / feedback.length;
  return (
    feedback.length > 0 && (
      <div className='stats'>
        <p>{feedback.length} reviews</p>
        <p>Average Rating: {isNaN(avg) ? '0' : avg.toFixed(1)}</p>
      </div>
    )
  );
}

export default FeedbackStats;

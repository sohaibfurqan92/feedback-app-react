import Card from './shared/Card';
import { useState } from 'react';
import RatingSelect from './RatingSelect';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);

  const handleClick = (e) => {
    setRating(parseInt(e.target.value));
  };
  return (
    <Card>
      <form className='feedback-form'>
        <p>How would you rate your service with us?</p>
        <RatingSelect handleClick={handleClick} />

        <div className='message'>
          <input
            type='text'
            className='feedback-input'
            placeholder='Write a review'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input type='submit' value='Send' />
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;

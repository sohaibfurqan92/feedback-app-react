import Card from './shared/Card';
import { useState, useEffect, useContext } from 'react';
import RatingSelect from './RatingSelect';
import { v4 as uuidv4 } from 'uuid';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const { handleAdd, editItem, updateFeedback } = useContext(FeedbackContext);
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [isDisabled, setIsDisabled] = useState(true);

  const select = (rating) => {
    setRating(rating);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: uuidv4(),
      text,
      rating,
    };

    if (editItem.edit) {
      updateFeedback(editItem.item.id, newFeedback);
    } else {
      handleAdd(newFeedback);
    }

    setText('');
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (text.length >= 10) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [text]);

  useEffect(() => {
    if (editItem.edit) {
      setIsDisabled(false);
      setText(editItem.item.text);
      setRating(editItem.item.rating);
    }
  }, [editItem]);

  return (
    <Card>
      <form className='feedback-form' onSubmit={handleSubmit}>
        <p>How would you rate your service with us?</p>
        <RatingSelect select={select} />

        <div className='message'>
          <input
            type='text'
            className='feedback-input'
            placeholder='Write a review'
            value={text}
            onChange={handleChange}
          />
          <input
            type='submit'
            value='Send'
            className={isDisabled ? 'disabled' : ''}
            disabled={isDisabled}
          />
        </div>
        {text.trim().length >= 1 && text.trim().length < 10 && (
          <span className='error'>Text must be atleast 10 characters</span>
        )}
      </form>
    </Card>
  );
}

export default FeedbackForm;

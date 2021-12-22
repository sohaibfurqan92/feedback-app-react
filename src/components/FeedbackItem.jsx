import { FaEdit, FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ text, rating, id }) {
  const { deleteFeedback, handleEdit } = useContext(FeedbackContext);
  return (
    <div className='feedback-item'>
      <Card>
        <p className='feedback-text'>{text}</p>
        <span className='feedback-rating'>{rating}</span>
        <span className='feedback-icons'>
          <button>
            <FaEdit color='purple' onClick={handleEdit} />
          </button>
          <button>
            <FaTimes color='purple' onClick={() => deleteFeedback(id)} />
          </button>
        </span>
      </Card>
    </div>
  );
}

export default FeedbackItem;

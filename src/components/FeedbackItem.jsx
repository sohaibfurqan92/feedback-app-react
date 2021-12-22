import { FaEdit, FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import { useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';

function FeedbackItem({ item }) {
  const { deleteFeedback, handleEdit } = useContext(FeedbackContext);
  return (
    <div className='feedback-item'>
      <Card>
        <p className='feedback-text'>{item.text}</p>
        <span className='feedback-rating'>{item.rating}</span>
        <span className='feedback-icons'>
          <button>
            <FaEdit color='purple' onClick={() => handleEdit(item)} />
          </button>
          <button>
            <FaTimes color='purple' onClick={() => deleteFeedback(item.id)} />
          </button>
        </span>
      </Card>
    </div>
  );
}

export default FeedbackItem;

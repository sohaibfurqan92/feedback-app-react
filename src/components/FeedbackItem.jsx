import { FaEdit, FaTimes } from 'react-icons/fa';
import Card from './shared/Card';

function FeedbackItem({ text, rating }) {
  return (
    <div className='feedback-item'>
      <Card>
        <p className='feedback-text'>{text}</p>
        <span className='feedback-rating'>{rating}</span>
        <span className='feedback-icons'>
          <button>
            <FaEdit color='purple' />
          </button>
          <button>
            <FaTimes color='purple' />
          </button>
        </span>
      </Card>
    </div>
  );
}

export default FeedbackItem;

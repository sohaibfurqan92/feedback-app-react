import { FaEdit, FaTimes } from 'react-icons/fa';

function FeedbackItem({ text, rating }) {
  return (
    <div className='feedback-item'>
      <div className='card'>
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
      </div>
    </div>
  );
}

export default FeedbackItem;

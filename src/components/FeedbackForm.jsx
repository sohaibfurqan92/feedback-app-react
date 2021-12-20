import Card from './shared/Card';

function FeedbackForm() {
  return (
    <Card>
      <form className='feedback-form'>
        <p>How would you rate your service with us?</p>
        <ul className='rating'>
          <li>
            <input type='radio' name='rating' id='num1' value='1' />
            <label htmlFor='num1'>1</label>
          </li>
          <li>
            <input type='radio' name='rating' id='num2' value='2' />
            <label htmlFor='num2'>2</label>
          </li>
          <li>
            <input type='radio' name='rating' id='num3' value='3' />
            <label htmlFor='num3'>3</label>
          </li>
          <li>
            <input type='radio' name='rating' id='num4' value='4' />
            <label htmlFor='num4'>4</label>
          </li>
          <li>
            <input type='radio' name='rating' id='num5' value='5' />
            <label htmlFor='num5'>5</label>
          </li>
          <li>
            <input type='radio' name='rating' id='num6' value='6' />
            <label htmlFor='num6'>6</label>
          </li>
          <li>
            <input type='radio' name='rating' id='num7' value='7' />
            <label htmlFor='num7'>7</label>
          </li>
          <li>
            <input type='radio' name='rating' id='num8' value='8' />
            <label htmlFor='num8'>8</label>
          </li>
          <li>
            <input type='radio' name='rating' id='num9' value='9' />
            <label htmlFor='num9'>9</label>
          </li>
        </ul>
        <div className='message'>
          <input
            type='text'
            className='feedback-input'
            placeholder='Write a review'
          />
          <input type='submit' value='Send' />
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
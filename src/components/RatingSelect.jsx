import { useState } from 'react';

function RatingSelect({ select }) {
  const [selected, setSelected] = useState(10);

  const handleClick = (e) => {
    select(parseInt(e.target.value));
    setSelected(parseInt(e.target.value));
  };
  return (
    <ul className='rating'>
      <li>
        <input
          type='radio'
          name='rating'
          id='num1'
          value='1'
          onClick={handleClick}
          checked={selected === 1}
        />
        <label htmlFor='num1'>1</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num2'
          value='2'
          onClick={handleClick}
          checked={selected === 2}
        />
        <label htmlFor='num2'>2</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num3'
          value='3'
          onClick={handleClick}
          checked={selected === 3}
        />
        <label htmlFor='num3'>3</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num4'
          value='4'
          onClick={handleClick}
          checked={selected === 4}
        />
        <label htmlFor='num4'>4</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num5'
          value='5'
          onClick={handleClick}
          checked={selected === 5}
        />
        <label htmlFor='num5'>5</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num6'
          value='6'
          onClick={handleClick}
          checked={selected === 6}
        />
        <label htmlFor='num6'>6</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num7'
          value='7'
          onClick={handleClick}
          checked={selected === 7}
        />
        <label htmlFor='num7'>7</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num8'
          value='8'
          onClick={handleClick}
          checked={selected === 8}
        />
        <label htmlFor='num8'>8</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num9'
          value='9'
          onClick={handleClick}
          checked={selected === 9}
        />
        <label htmlFor='num9'>9</label>
      </li>
      <li>
        <input
          type='radio'
          name='rating'
          id='num10'
          value='10'
          onClick={handleClick}
          checked={selected === 10}
        />
        <label htmlFor='num10'>10</label>
      </li>
    </ul>
  );
}

export default RatingSelect;

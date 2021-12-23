import { FaQuestion } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function AboutIcon() {
  return (
    <Link to='/about' className='about-icon'>
      <FaQuestion size={50} />
    </Link>
  );
}

export default AboutIcon;

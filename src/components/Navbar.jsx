import PropTypes from 'prop-types';

function Navbar(props) {
  return (
    <nav className='navbar' style={{ background: props.bgColor }}>
      <h1 style={{ color: props.color }}>Feedback UI</h1>
    </nav>
  );
}

Navbar.propTypes = {
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default Navbar;

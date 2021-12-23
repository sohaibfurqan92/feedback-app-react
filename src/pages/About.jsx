import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Card>
      <h1>About this project</h1>
      <p>A react app built using hooks, context and react router</p>
      <p>Version 1.0.0</p>
      <p>
        <Link to='/'>Back Home</Link>
      </p>
    </Card>
  );
}

export default About;

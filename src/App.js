import Navbar from './components/Navbar';
import FeedbackList from './components/FeedbackList';
import FeedbackForm from './components/FeedbackForm';
import FeedbackStats from './components/FeedbackStats';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutIcon from './components/AboutIcon';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
        <AboutIcon />
      </Router>
    </FeedbackProvider>
  );
}

export default App;

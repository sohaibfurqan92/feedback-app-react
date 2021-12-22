import { createContext, useState } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  const handleAdd = (newFeedback) => setFeedback([newFeedback, ...feedback]);

  const handleEdit = (item) => {
    console.log('Edit Clicked');
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id != id));
    }
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleAdd,
        handleEdit,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

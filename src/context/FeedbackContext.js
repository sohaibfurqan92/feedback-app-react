import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [editItem, setEditItem] = useState({
    item: {},
    edit: false,
  });

  const handleAdd = (newFeedback) => setFeedback([newFeedback, ...feedback]);

  const handleEdit = (item) => {
    setEditItem({
      item,
      edit: true,
    });
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id != id));
    }
  };

  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleAdd,
        handleEdit,
        deleteFeedback,
        updateFeedback,
        editItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

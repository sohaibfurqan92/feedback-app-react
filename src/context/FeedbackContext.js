import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();
const url = 'http://localhost:5000/feedback';

export const FeedbackProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [editItem, setEditItem] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setFeedback(data);
      setLoading(false);
    };

    fetchData();
  }, []);

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
        loading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

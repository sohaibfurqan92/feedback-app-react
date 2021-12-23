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

  const handleAdd = async (newFeedback) => {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  const handleEdit = (item) => {
    setEditItem({
      item,
      edit: true,
    });
  };

  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      //Delete from UI
      setFeedback(feedback.filter((item) => item.id != id));
    }
  };

  const updateFeedback = async (id, updatedItem) => {
    const response = await fetch(`${url}/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    });

    const data = await response.json();
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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

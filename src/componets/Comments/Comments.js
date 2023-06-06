import React, { useState } from 'react';
import './Comments.css'; // Import CSS file for styling
import { useNavigate } from 'react-router-dom';

const Comments = () => {
  const [comment, setComment] = useState('');
  const [commentsArray, setCommentsArray] = useState([]); // Array to store comments
  const name = localStorage.getItem('name');
  const navigate = useNavigate();

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add new comment to the array
    setCommentsArray([...commentsArray, { name, comment }]);
    setComment(''); // Clear the comment input field
  };

  const handleDelete = (index) => {
    // Remove comment from the array
    const updatedComments = [...commentsArray];
    updatedComments.splice(index, 1);
    setCommentsArray(updatedComments);
  };

  return (
    <div className="comments-container">
      <div className="comment-input">
        <h1>{name}</h1>
        <form onSubmit={handleSubmit}>
          <label className='comment-field'>
            Comment:
            <textarea className='text-area' value={comment} onChange={handleCommentChange} />
          </label>
          <button type="submit">Submit</button>
          <button className='back-button' onClick={() => navigate(-1)}>Back</button>
        </form>
      </div>
      <div className="comment-list">
        {/* Render all comments in separate fields */}
        {commentsArray.map((item, index) => (
          <div key={index} className="add-comment">
            <h2>{item.name}</h2>
            <textarea className='new-text' value={item.comment} disabled={true} />
            {item.name === name && (
              <button className='delete-button' onClick={() => handleDelete(index)}>Delete</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;

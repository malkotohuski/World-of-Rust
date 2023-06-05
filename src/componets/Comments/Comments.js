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

 /*  const handleBackToPrevPage = () => {
    // Handle adding a comment logic here
    // You can implement the functionality to add a comment
    // based on your requirements or use case.

    console.log('Back button clicked');
  }; */

  return (
    <div className="comments-container">
      <div className="comment-input">
        <h1>{name}</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Comment:
            <textarea value={comment} onChange={handleCommentChange} />
          </label>
          <button type="submit">Submit</button>
          <button className='back-button' onClick={() => navigate(-1)}>Back</button>
        </form>
      </div>
      <div className="comment-list">
        {/* Render all comments in separate fields */}
        {commentsArray.map((item, index) => (
          <div key={index} className="comment">
            <h2>{item.name}</h2>
            <p>{item.comment}</p>
            {item.name === name && (
              <button onClick={() => handleDelete(index)}>Delete</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;

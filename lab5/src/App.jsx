import { useState } from "react";
import "./App.css";

export default function App() {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(1);

  function addComment() {
    if (comment.trim() === "") return;

    const newComment = {
      id: Date.now(),
      comment: comment,
      rating: Number(rating)
    };

    setComments([...comments, newComment]);

    setComment("");
    setRating(1);
  }

  return (
    <div className="container">
      <h1>My Comments & Ratings</h1>

      <div className="input-group">
        <input
          type="text"
          placeholder="Write a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <select
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        >
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}/10
            </option>
          ))}
        </select>

        <button onClick={addComment}>Add Comment</button>
      </div>

      <ul>
        {comments.map((item) => (
          <li key={item.id} className="Comment">
            <h3>{item.comment}</h3>
            <p>Rating: {item.rating}/10</p>
          </li>
        ))}
      </ul> 
    </div>
  );
}

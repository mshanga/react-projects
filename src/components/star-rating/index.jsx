import React, { useState } from 'react';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <h1>Star Rating App</h1>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRatingChange(star)}
            style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
          >
            &#9733;
          </span>
        ))}
      </div>
      <p>Selected rating: {rating}</p>
    </div>
  );
};

export default StarRating;

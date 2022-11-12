import reviewList from "./review-list.js";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function ReviewEntry() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [reviewBody, setReviewBody] = useState("");
  const [reviewerName, setReviewerName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const review = { reviewBody, rating };
    console.log(review);
  };

  return (
    <>
      <div class="review-entry">
        <form onSubmit={handleSubmit}>
          <label>
            <b>Leave a Review</b>
          </label>
          <input
            placeholder="Name"
            value={reviewerName}
            onChange={(e) => setReviewerName(e.target.value)}
          ></input>
          <textarea
            placeholder="Review"
            value={reviewBody}
            onChange={(e) => setReviewBody(e.target.value)}
          ></textarea>
          <div id="rating">
            {[...Array(5)].map((star, i) => {
              const ratingValue = i + 1;
              return (
                <label>
                  <input
                    type="radio"
                    name="radio"
                    value={ratingValue}
                    onClick={() => setRating(ratingValue)}
                  />
                  <FaStar
                    size="24"
                    className="star"
                    color={
                      ratingValue <= (hover || rating) ? "#ffc107" : "#aabffc"
                    }
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
          <button>Submit</button>
        </form>
      </div>
      <div class="new-review">
        <p>
          <b>Name: </b>
          {reviewerName}
        </p>
        <p>
          <b>Review: </b>
          {reviewBody}
        </p>
        <p>
          <b>Rating: </b> {rating}
        </p>
      </div>
    </>
  );
}

export default ReviewEntry;

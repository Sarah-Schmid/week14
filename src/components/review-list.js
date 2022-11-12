import React from "react";

function ReviewList() {
  const reviewList = ["it was ok", "I loved it!!", "Meh"];

  return (
    <ol>
      {reviewList.map((publishedReview) => (
        <li key={publishedReview}>{publishedReview}</li>
      ))}
    </ol>
  );
}

export default ReviewList;

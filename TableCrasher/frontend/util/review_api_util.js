export const fetchRestaurantReviews = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/reviews`,
    data: {restaurant_id: id, filter: "restaurant_reviews"}
  });
};

export const fetchUserReviews = () => {
  return $.ajax({
    method: "GET",
    url: `api/reviews`,
    data: {filter: "user_reviews"}
  });
};

export const fetchReview = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/reviews/${id}`,
  });
};

export const createReview = (review) => {
  return $.ajax({
    method: "POST",
    url: `api/reviews/`,
    data: {review}
  });
};


export const updateReview = (review) => {
  return $.ajax({
    method: "PATCH",
    url: `api/reviews/${review.id}`,
    data: {review},
  });
};


export const deleteReview = (id) => {
  return $.ajax({
    method: "DELETE",
    url: `api/reviews/${id}`,
  });
};

export const fetchUser = () => {
  return $.ajax({
    method: "GET",
    url: `api/reviews`,
    data: {restaurant_id: id, filter: "restaurant_reviews"}
  });
};

export const receiveCities = () => {
  return $.ajax({
    method: "GET",
    url: "api/cities",
  });
};
export const receiveCityRestaurants = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/cities/${id}`,
  });
};

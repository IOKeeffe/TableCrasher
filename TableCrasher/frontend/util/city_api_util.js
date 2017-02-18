export const fetchCities = () => {
  return $.ajax({
    method: "GET",
    url: "api/cities",
  });
};
export const fetchCityRestaurants = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/cities/${id}`,
  });
};

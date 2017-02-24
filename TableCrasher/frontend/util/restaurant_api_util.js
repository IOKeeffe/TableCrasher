export const fetchRestaurant = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/restaurants/${id}`,
  });
};

export const fetchRestaurants = () => {
  return $.ajax({
    method: "GET",
    url: "api/restaurants/",
  });
};
export const createRestaurant = (restaurant) => {
  return $.ajax({
    method: "POST",
    url: "api/restaurants/",
    data: {restaurant},
  });
};

export const searchRestaurants = (search_term) => {
  return $.ajax({
    method: "GET",
    url: "api/restaurants",
    data: {search_term},
  });
};

export const fetchRestaurantsByIds = (ids) => {
  return $.ajax({
    method: "GET",
    url: "api/restaurants",
    data: {ids},
  });
};

export const updateRestaurant = (restaurant) => {
  return $.ajax({
    method: "PATCH",
    url: `api/restaurants/${restaurant.id}`,
    data: {restaurant}
  });
};

export const deleteRestaurant = id => {
  return $.ajax({
    method: "DELETE",
    url: `api/restaurants/${id}`,
  });
};

@cities.each do |city|
  restaurant_count = city.restaurants.size
  json.set! city.id do
    json.id city.id
    json.name city.name
    json.imageUrl city.image_url
    json.restaurantCount restaurant_count
  end
end

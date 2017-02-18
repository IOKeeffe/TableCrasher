@restaurants = @city.restaurants.where(city_id: @city.id)

json.id @city.id
json.set! "restaurants" do
  json.array! @restaurants, :id, :name, :image_url, :category
end

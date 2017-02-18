restaurants = @city.restaurants.where(city_id: @city.id)

json.id @city.id
json.set! "restaurants" do
  restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :id, :name, :image_url, :category
    end
  end
end

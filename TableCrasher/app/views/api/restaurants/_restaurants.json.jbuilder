restaurants.each do |restaurant|
  json.set! restaurant.name do
    json.extract! restaurant, :id, :name, :image_url, :category, :price
  end
end

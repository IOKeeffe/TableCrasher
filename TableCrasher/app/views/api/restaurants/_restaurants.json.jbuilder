
restaurants.each do |restaurant|
  average = (@average_reviews[restaurant.id] || 1).ceil
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :image_url, :category, :price
    json.average_rating average
  end
end

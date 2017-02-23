restaurants.each do |restaurant|
  average = (@average_reviews[restaurant.id] || 1).ceil
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :category, :price
    json.image do
      json.thumb restaurant.image(:thumb)
      json.square restaurant.image(:square)
      json.large restaurant.image(:large)
    end
    json.average_rating average
  end
end

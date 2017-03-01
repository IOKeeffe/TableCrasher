restaurants.each do |restaurant|
  average = (@average_reviews[restaurant.id] || 1).ceil
  json.set! restaurant.id do
    json.extract! restaurant, :id, :name, :category, :price
    json.partial! 'api/restaurants/images', restaurant: restaurant

    json.average_rating average
  end
end

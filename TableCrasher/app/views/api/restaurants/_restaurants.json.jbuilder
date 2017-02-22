averageReviews = Review.group('restaurant_id').average('rating')

restaurants.each do |restaurant|
  json.set! restaurant.name do
    average = averageReviews[restaurant.id].to_s
    json.extract! restaurant, :id, :name, :image_url, :category, :price
    json.average_rating average.to_i
  end
end

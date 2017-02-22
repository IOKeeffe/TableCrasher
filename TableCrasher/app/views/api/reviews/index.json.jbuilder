@reviews.each do |review|
  json.set! review.id do
    json.restaurant {json.extract! Restaurant.find(review.restaurant_id), :id, :name}
    json.user{ json.extract! User.find(review.user_id), :username }
    json.extract! review, :id, :body, :user_id, :restaurant_id, :rating
  end
end

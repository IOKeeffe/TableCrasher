json.set! "reservations" do
  json.array! @reservations do |restaurant_reservations|
    json.array! restaurant_reservations do |reservation, j|
      json.extract! reservation, :party_size, :time_slot, :restaurant_id, :available
    end
  end
end
json.restaurants do
  @restaurants.each do |restaurant|
    average = (@average_reviews[restaurant.id] || 1).ceil
    json.set! restaurant.id do
      json.extract! restaurant, :id, :name, :category, :price
      json.partial! 'api/restaurants/images', restaurant: restaurant
      json.average_rating average
    end
  end
end

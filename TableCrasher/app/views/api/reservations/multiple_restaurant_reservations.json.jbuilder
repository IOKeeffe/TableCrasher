restaurant_ids = []
@reservations.each do |restaurant_reservation|
  restaurant_ids << restaurant_reservation[0].restaurant_id
end

restaurants = restaurant_ids.map do |id| Restaurant.find(id) end
json.set! "reservations" do
  json.array! @reservations do |restaurant_reservations|
    json.array! restaurant_reservations do |reservation, j|
      json.extract! reservation, :party_size, :time_slot, :restaurant_id, :available
    end
  end
end

json.set! "restaurants" do
  restaurants.each do |restaurant|
    json.set! restaurant.id do
      json.extract! restaurant, :id, :name, :image_url, :category
    end
  end
end

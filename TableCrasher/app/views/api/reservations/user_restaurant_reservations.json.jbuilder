

  json.array! @reservations do |reservation|
      json.reservation do
        json.party_size reservation.party_size
        json.time_slot reservation.time_slot
        json.restaurant_id reservation.restaurant_id
        json.available reservation.available
        json.id reservation.id
      end
      restaurant = reservation.restaurant
      json.restaurant do
        json.id restaurant.id
        json.name restaurant.name
        json.image_url restaurant.image_url
        json.category restaurant.category
        json.price restaurant.price
      end
  end

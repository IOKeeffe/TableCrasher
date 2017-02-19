@reservations.each do |reservation|
  json.set! reservation.id do
    json.extract! reservation, :party_size, :time_slot, :restaurant_id
  end
end

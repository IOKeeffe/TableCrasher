json.reservations(@reservations) do |reservation|
    json.party_size reservation.party_size
    json.time_slot reservation.time_slot
    json.restaurant_id reservation.restaurant_id
    json.available reservation.available
end

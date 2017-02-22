@favorites.each do |favorite|
  json.set! favorite.restaurant_id do
    json.extract! favorite, :restaurant_id, :id
  end
end

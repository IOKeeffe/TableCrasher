@favorites.each do |favorite|
  json.extract! favorite, :restaurant_id, :id
end

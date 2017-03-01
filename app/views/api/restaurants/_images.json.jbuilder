json.image do
  json.thumb restaurant.image(:thumb)
  json.square restaurant.image(:square)
  json.large restaurant.image(:large)
end

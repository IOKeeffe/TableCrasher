

json.extract! @restaurant, :name, :address, :state, :zip_code, :category, :description, :price, :city_id,
:owner_id, :opening_time, :closing_time, :id
json.average_rating @average
  json.image do
    json.thumb @restaurant.image(:thumb)
    json.square @restaurant.image(:square)
    json.large @restaurant.image(:large)
  end

json.gallery do
  json.array! @gallery do |gallery_image|
    json.image gallery_image.image(:large)
  end
end

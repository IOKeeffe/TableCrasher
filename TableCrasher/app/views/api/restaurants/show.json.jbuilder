average = (@average_reviews[@restaurant.id] || 1).ceil

json.extract! @restaurant, :name, :address, :state, :zip_code, :category, :description, :image_url, :price, :city_id,
:owner_id, :gallery, :opening_time, :closing_time, :id
json.average_rating average

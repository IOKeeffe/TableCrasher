class Restaurant < ApplicationRecord
  validates :name, :address, :state, :category, :description, :image_url, :city_id presence: true
  validates :price, :format => {:with => [1-4]},
                 :message => "Invalid Price"

  belongs_to :owner,
    class_name: "User",
    foreign_key: "owner_id",
    primary_key: "id"

end

class Favorite < ApplicationRecord
  validates :user_id, :restaurant_id, presence: true
  validates_uniqueness_of :user_id, :scope => :restaurant_id

  has_many :restaurants
  has_many :users
end

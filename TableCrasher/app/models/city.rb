# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  image_url  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class City < ApplicationRecord
  validates :name, presence: true, uniqueness: true
  validates :image_url, presence: true

  has_many :users
  has_many :restaurants
  has_many :reviews, through: :restaurants

end

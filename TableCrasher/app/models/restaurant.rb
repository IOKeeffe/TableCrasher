# == Schema Information
#
# Table name: restaurants
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  address      :string           not null
#  state        :string           not null
#  zip_code     :string           not null
#  category     :string           not null
#  description  :text             not null
#  image_url    :string           not null
#  price        :string           not null
#  city_id      :integer          not null
#  owner_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  gallery      :string           default("{}"), is an Array
#  seating      :integer          default("20"), not null
#  opening_time :time             default("17:30:18"), not null
#  closing_time :time             default("17:30:19"), not null
#

class Restaurant < ApplicationRecord
  validates :name, :address, :state, :category, :description, :city_id, presence: true
  validates_format_of :price, :with => /[1-4]/, :message => "Invalid Price"

  has_attached_file :image, default_url: "missing.png", styles: { thumb: '153x106>', square: '150x150>', large: '266x155>' }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :owner,
    class_name: "User",
    foreign_key: "owner_id",
    primary_key: "id"

  belongs_to :city

  has_many :reservations
  has_many :reviews
  has_many :favorites
  has_many :gallery_images

  def self.search(search_term)
    r = Restaurant
      .left_joins(:city)
      .where(
        "LOWER(restaurants.name) LIKE :search_term OR LOWER(cities.name) LIKE :search_term",
        search_term: "%#{search_term.downcase}%"
      )
      r
  end

end

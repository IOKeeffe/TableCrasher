# == Schema Information
#
# Table name: restaurants
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  address     :string           not null
#  state       :string           not null
#  zip_code    :string           not null
#  category    :string           not null
#  description :text             not null
#  image_url   :string           not null
#  price       :string           not null
#  city_id     :integer          not null
#  owner_id    :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Restaurant < ApplicationRecord
  validates :name, :address, :state, :category, :description, :image_url, :city_id, presence: true
  validates_format_of :price, :with => /[1-4]/,
                 :message => "Invalid Price"

  belongs_to :owner,
    class_name: "User",
    foreign_key: "owner_id",
    primary_key: "id"

end

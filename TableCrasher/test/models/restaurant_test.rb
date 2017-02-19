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
#  gallery     :string           default("{}"), is an Array
#

require 'test_helper'

class RestaurantTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

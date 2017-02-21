# == Schema Information
#
# Table name: reviews
#
#  id            :integer          not null, primary key
#  rating        :integer          not null
#  body          :text             not null
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Review < ApplicationRecord
  validates :body, :user_id, :restaurant_id, :rating, presence: true

  belongs_to :user
  belongs_to :restaurant

end

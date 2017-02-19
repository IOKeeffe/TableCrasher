# == Schema Information
#
# Table name: reservations
#
#  id            :integer          not null, primary key
#  party_size    :integer          not null
#  time_slot     :datetime         not null
#  user_id       :integer          not null
#  restaurant_id :integer          not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Reservation < ApplicationRecord
  validates :user_id, :restaurant_id, :party_size, :time_slot, presence: true
  validate :table_available

  belongs_to :user
  belongs_to :restaurant
  def table_available?
    return unless customers_at_time + party_size < this.restaurant.seating
    errors[:time_slot] << "No seating available at that time."
  end

  private
  def customers_at_time
    Reservation
      .where.not(id: self.id)
      .where(restaurant_id: restaurant_id)
      .where(<<-SQL, time_slot: time_slot,)
         NOT( DATEADD(hh, 1, time_slot) <  :time_slot)
         OR (DATEADD(hh, 1, :time_slot) < time_slot) )
      SQL
      .count
  end

end

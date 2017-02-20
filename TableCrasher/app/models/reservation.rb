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
  validate :table_available?

  belongs_to :user
  belongs_to :restaurant

  def table_available?
    return if customers_at_time + party_size < self.restaurant.seating
    errors[:time_slot] << "No seating available at that time."
  end

  def adjacent_reservations
    potential_reservations = []
    5.times do |i|
      tempId = i
      case i
        when 0
          newTime = self.time_slot - 30.minutes
        when 1
          newTime = self.time_slot - 15.minutes
        when 2
          newTime = self.time_slot
        when 3
          newTime = self.time_slot + 15.minutes
        when 4
          newTime = self.time_slot + 30.minutes
      end
      new_reservation = Reservation.buildReservation(self, newTime, tempId)
      if new_reservation.valid?
        potential_reservations.push(new_reservation)
      else
        potential_reservations.push(nil)
      end
    end
    potential_reservations
  end

  def search_reservations(search_term)
    potential_reservations = []
    restaurants = Restaurant.search(search_term).to_a
    restaurants.each do |restaurant|

      original_rez = Reservation.new(
        restaurant_id: restaurant.id,
        time_slot: self.time_slot,
        party_size: self.party_size,
      )

      potential_reservations.concat(original_rez.adjacent_reservations)
    end

    potential_reservations
  end

  def self.buildReservation(oldRez, new_time, tempId)
    r = oldRez.clone
    r.time_slot = new_time
    r.id = tempId
    r
  end

  private
  def customers_at_time
    Reservation
      .where.not(id: self.id)
      .where(restaurant_id: restaurant_id)
      .where(time_slot: time_slot)
      .sum(:party_size)
      # .where(<<-SQL, time_slot: time_slot)
      #    NOT(DATEADD(HOUR, 1, time_slot) <  :time_slot)
      #    OR (DATEADD(HOUR, 1, :time_slot) < time_slot)
      # SQL
  end

end

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

  attr_accessor :available

  def table_available?
    customers_at_time + party_size < self.restaurant.seating
  end

  def available_table
    return if table_available?
    errors[:time_slot] << "No seating available at that time."
  end

  def adjacent_reservations
    potential_reservations = []

    5.times do |i|
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
      new_reservation = Reservation.buildReservation(self, newTime)
      if new_reservation.table_available?
        new_reservation.available = true
      end
      potential_reservations.push(new_reservation)
    end
    potential_reservations
  end

  def search_reservations(search_term)
    potential_reservations = []
    restaurants = Restaurant.search(search_term).includes(:reservations)
    restaurants.each do |restaurant|
      original_rez = Reservation.new(
        restaurant_id: restaurant.id,
        time_slot: self.time_slot,
        party_size: self.party_size,
      )
      potential_reservations.push(original_rez.adjacent_reservations)
    end

    potential_reservations
  end

  def self.buildReservation(oldRez, new_time)
    r = Reservation.new
    r.party_size = oldRez.party_size
    r.restaurant_id = oldRez.restaurant_id
    r.time_slot = new_time
    r.available = false
    r
  end

  private
  def customers_at_time
    Reservation.where.not(id: self.id)
    .where(restaurant_id: restaurant_id)
    .where(time_slot: ((time_slot - 1.hour)..(time_slot + 1.hour)))
    .sum(:party_size)
  end

end

class AddHoursToRestaurant < ActiveRecord::Migration[5.0]
  def change
      add_column :restaurants, :opening_time, :time, null: false, default: Time.now
      add_column :restaurants, :closing_time, :time, null: false, default: Time.now
      change_column :restaurants, :seating, :integer, null: false, default: 20
  end
end

class AddSeatingToRestaurant < ActiveRecord::Migration[5.0]
  def change
    add_column :restaurants, :seating, :integer
  end
end

class CreateReservations < ActiveRecord::Migration[5.0]
  def change
    create_table :reservations do |t|
      t.integer :party_size, null: false
      t.datetime :time_slot, null: false;
      t.integer :user_id, null: false;
      t.integer :restaurant_id, null: false;

      t.timestamps
    end
    add_index :reservations, :user_id
    add_index :reservations, :restaurant_id
  end
end

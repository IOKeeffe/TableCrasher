class CreateRestaurants < ActiveRecord::Migration[5.0]
  def change
    create_table :restaurants do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :state, null: false
      t.string :zip_code, null: false
      t.string :category, null: false
      t.text :description, null: false
      t.string :image_url, null: false
      t.string :price, null: false
      t.integer :city_id, null: false
      t.integer :owner_id, null: false
      t.timestamps
    end
    add_index :restaurants, :name, unique: true
    add_index :restaurants, :city_id
    add_index :restaurants, :owner_id

  end
end

class AddGalleryToRestaurant < ActiveRecord::Migration[5.0]
  def change
    add_column :restaurants, :gallery, :string, array: true, default: []
  end
end

class RecreatesGalImage < ActiveRecord::Migration[5.0]
  def change
    create_table :gallery_images do |t|
      t.integer :restaurant_id
      t.timestamps
    end
  end
end

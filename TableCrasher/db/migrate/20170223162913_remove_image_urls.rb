class RemoveImageUrls < ActiveRecord::Migration[5.0]
  def change
    remove_column :cities, :image_url
    remove_column :restaurants, :image_url
  end
end

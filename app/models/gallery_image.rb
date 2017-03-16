class GalleryImage < ApplicationRecord

  has_attached_file :image, default_url: "missing.png", styles: { large: '357x255' }
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  belongs_to :restaurant

end

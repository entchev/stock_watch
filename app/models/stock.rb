class Stock < ApplicationRecord
  validates :name, :symbol, :stock_desc, :image_url, presence: true
  validates :name, :symbol, uniqueness: true
end

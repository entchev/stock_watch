class CreateTopStocks < ActiveRecord::Migration[6.0]
  def change
    create_table :top_stocks do |t|
      t.string "name", null: false
      t.string "symbol", null: false
      t.string "stock_desc", null: false
      t.string "image_url", null: false 

      t.timestamps
    end
  end
end

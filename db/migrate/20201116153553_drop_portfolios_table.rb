class DropPortfoliosTable < ActiveRecord::Migration[6.0]
  def down
    drop_table :portfolios 
    drop_table :watchlists
  end

  def up
    create_table :portfolio_items do |t|
      t.integer :stock_id, null: false
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :symbol, null: false
      t.integer :purchase_price, null: false
      t.integer :amount_owned, null: false

      t.timestamps
    end

    create_table :watchlist_items do |t|
      t.integer :stock_id, null: false
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :symbol, null: false

      t.timestamps
    end
  end
end

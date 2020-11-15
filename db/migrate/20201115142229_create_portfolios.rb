class CreatePortfolios < ActiveRecord::Migration[6.0]
  def change
    create_table :portfolios do |t|
      t.integer :stock_id, null: false
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :symbol, null: false
      t.integer :purchase_price, null: false
      t.integer :amount_owned, null: false

      t.timestamps
    end

    add_index :portfolios, :stock_id
    add_index :portfolios, :user_id
  end
end

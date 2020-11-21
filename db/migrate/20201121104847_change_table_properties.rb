class ChangeTableProperties < ActiveRecord::Migration[6.0]
  def change
    change_column :portfolio_items, :purchase_price, :decimal, precision: 10, scale: 2
    change_column :portfolio_items, :amount_owned, :decimal, precision: 10, scale: 2
  end
end

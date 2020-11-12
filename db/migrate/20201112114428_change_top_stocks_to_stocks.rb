class ChangeTopStocksToStocks < ActiveRecord::Migration[6.0]
  def change
    rename_table :top_stocks, :stocks
  end
end

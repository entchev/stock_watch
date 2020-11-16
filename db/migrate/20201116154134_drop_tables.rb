class DropTables < ActiveRecord::Migration[6.0]
  
  def down
    drop_table :portfolios 
    drop_table :watchlists
  end

end

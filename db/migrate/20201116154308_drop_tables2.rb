class DropTables2 < ActiveRecord::Migration[6.0]
  def up
    drop_table :portfolios 
  end
end

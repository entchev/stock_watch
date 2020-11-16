class DropTables3 < ActiveRecord::Migration[6.0]
  def up
    drop_table :watchlists
  end
end

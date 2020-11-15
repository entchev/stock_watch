class CreateWatchlists < ActiveRecord::Migration[6.0]
  def change
    create_table :watchlists do |t|
      t.integer :stock_id, null: false
      t.integer :user_id, null: false
      t.string :name, null: false
      t.string :symbol, null: false

      t.timestamps
    end

    add_index :watchlists, :stock_id
    add_index :watchlists, :user_id
  end
end

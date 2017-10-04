class CreateMovements < ActiveRecord::Migration[5.1]
  def change
    create_table :movements do |t|
      t.string :description
      t.references :account
      t.references :currency
      t.float :amount
      t.float :exchange_rate
      t.boolean :expense
      t.timestamps
    end
  end
end

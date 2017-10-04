class CreateAccounts < ActiveRecord::Migration[5.1]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :number
      t.string :type
      t.float :amount
      t.timestamps
    end
  end
end

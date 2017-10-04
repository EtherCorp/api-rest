class RemoveTypeFromAccount < ActiveRecord::Migration[5.1]
  def change
    remove_column :accounts, :type
    add_column :accounts, :account_type, :string
  end
end

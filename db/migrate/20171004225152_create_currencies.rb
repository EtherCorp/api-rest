class CreateCurrencies < ActiveRecord::Migration[5.1]
  def change
    create_table :currencies do |t|
      t.string :code # example: USD, CLP, ETC..
      t.float :exchange_rate
      t.timestamps
    end
  end
end

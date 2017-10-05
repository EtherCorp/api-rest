# Account model
class Account < ApplicationRecord
  has_many :movements

  # Previo al guardado validara que se hayan seteado estos valores
  validates :name, :number, :account_type, presence: true

  # Metodo de Clase para crear una nueva
  # cuenta desde los params
  def self.new_with_params(params)
    attributes = params.to_h.symbolize_keys
    account = new # Llama a Account.new
    account.name = attributes[:name]
    account.number = attributes[:number]
    # si no se pasa un monto, asume cero
    account.amount = attributes[:amount] || 0
    account.account_type = attributes[:account_type]
    account
  end
end

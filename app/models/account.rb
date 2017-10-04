class Account < ApplicationRecord
  has_many :movements

  def self.new_with_params(params)
    account = new
    account.name = params[:name]
    account.number = params[:number]
    account.amount = params[:amount]
    account.account_type = params[:account_type]
    account
  end
end

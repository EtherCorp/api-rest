module Api
  # Api
  class V1 < Grape::API
    version 'v1', using: :path
    format :json

    resource :accounts do
      desc 'get all accounts'
      get do
        Account.all
      end
    end
  end
end

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

      # desc 'create new account'
      # post do
      #   account = Account.new_with_params(params)
      #   account.save!
      #   account
      # end

      route_param :id do
        get do
          Account.find_by(id: params[:id])
        end

        desc 'get one account'
        get do
          Account.find_by(id: params[:id])
        end

        # desc 'update '
        # put do
        #   account = Account.find_by(id: params[:id])
        #   account.update params
        #   account
        # end
      end
    end
  end
end

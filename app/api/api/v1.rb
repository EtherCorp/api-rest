module Api
  # Api
  class V1 < Grape::API
    version 'v1', using: :path
    format :json

    # Esto habilita el endpoint /v1/accounts
    # representa al recurso accounts
    resource :accounts do
      desc 'Obtener todas las cuentas'
      # El metodo get se traduce como el verbo HTTP GET
      get do
        # Ver archivo app/api/entities/account_entity.rb
        # para entender que se esta haciendo aqui
        # para presentar los datos
        present Account.all, with: Entities::AccountEntity
      end

      desc 'Crear nueva cuenta'
      # En params se definen los parametros que tienen que
      # enviarse a este endpoint. En Grape se pueden validar
      # en el momento en que alguien hace el request
      # De esta manera se evita ejecutar cualquier codigo del modelo
      # si no se estan pasando los parametros adecuados
      params do
        requires :name, type: String, desc: 'Nombre de la cuenta'
        requires :number, type: String, desc: 'Número de la cuenta'
        requires :account_type, type: String, desc: 'Tipoi de cuenta'
        optional :amount, type: Float, desc: 'Monto inicial'
      end
      # El metodo post se traduce como el verbo HTTP POST
      # que se utiliza para crear datos
      post do
        account = Account.new_with_params(params)
        account.save!
        account # retornamos la cuenta recien creada
      end

      # Dentro del route_param :id se crean todos los endpoints
      # que tienene el id de la cuenta en la URL
      # /accounts/:id
      route_param :id do
        desc 'Obtener una cuenta'
        # GET accounts/:id
        get do
          Account.find_by(id: params[:id])
        end

        desc 'Actualizar una cuenta'
        # PUT accounts/:id
        put do
          account = Account.find_by(id: params[:id])
          account.update params.to_h
          account
        end

        desc 'Eliminar una cuenta'
        # DELETE accounts/:id
        delete do
          account = Account.find_by(id: params[:id])
          account.destroy
          account
        end
      end
    end
  end
end

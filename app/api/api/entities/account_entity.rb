module Api
  module Entities
    # Un entity es una representacion de los datos
    # es la definicion del JSON que mostrara el API
    # esto es muy util cuando hay que transformar u ocultar
    # datos de los modelos. Por ejemplo en este  caso no se
    # esta mostrando ni el saldo (ammount) ni las fechas
    class AccountEntity < Grape::Entity
      expose :id
      expose :name
      expose :number
      expose :account_type
    end
  end
end

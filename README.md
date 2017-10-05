# README

### API REST

Para levantar el API rest:

1. Instalar ruby 2.2.5
2. ejecutar `bundle install`
3. ejecutar `bundle exec rake db:create`
4. ejecutar `bundle exec rake db:migrate`
4. ejecutar `bundle exec rails s`

#### Recurso `accounts`

1. Obtener Cuentas - `GET v1/accounts`

```
curl -X GET \
  http://localhost:3000/api/v1/accounts
```

2. Crear una nueva cuenta - `POST v1/accounts`

```
curl -X POST \
  http://localhost:3000/api/v1/accounts \
  -H 'content-type: application/json' \
  -d '{
    "name": "Cuenta banco",
    "number": "12234",
    "account_type": "cta cte",
    "amount": 100000
  }'
```

3. Modificar una nueva cuenta - `PUT v1/accounts/:id`

```
curl -X PUT \
  http://localhost:3000/api/v1/accounts/1 \
  -H 'content-type: application/json' \
  -d '{
    "name": "Cuenta banco",
    "number": "1224",
    "account_type": "cta cte",
    "amount": 1000
  }'
```

4. Eliminar una nueva cuenta - `DELETE v1/accounts/:id`

```
curl -X DELETE \
  http://localhost:3000/api/v1/accounts/1 \
  -H 'content-type: application/json'
```


### Entidades

- User {
    id
    name
    email
    password
}
- Alert {
    id
    targetValue
    cryptocurrencyId
    userId
}
- Cryptocurrency {
    id
    name
    symbol
    icon
}

### Casos de uso

##### - CreateUser:
Permitir que um usuário se auto cadastre

##### - AuthenticateUser:
Permitir que um usuário se autentique

##### - FindAlerts
Permitir que um usuário consulte os aletas que ele criou

##### - CreateAlert
Permitir que um usuário crie um novo alerta

##### - FindAlertById
Permitir que um usuário consulte um alerta pelo id

##### - UpdateAlert
Permitir que um usuário altere um alerta

##### - DeleteAlert
Permitir que um usuário delete um alerta

## Funcionalidade do Sistema
O sistema deve verificar exporadicamente se algum alerta já pode ser enviado
import { AuthenticateUserController } from "../../src/domain/usecases/authenticate-user"
import { makeAuthenticateUser } from "./authenticate-user-service"

export const makeAuthenticateUserController = (): AuthenticateUserController => {
    const service = makeAuthenticateUser()
    return new AuthenticateUserController(service)
}
import { CreateUserController } from "../../src/domain/usecases/create-user"
import { makeCreateUserService } from "../factories"

export const makeCreateUserController = (): CreateUserController => {
    const service = makeCreateUserService()
    return new CreateUserController(service)
}
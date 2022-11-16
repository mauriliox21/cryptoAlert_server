import { AuthenticateUserService } from "../../src/domain/usecases/authenticate-user"
import { FakeUserRepository } from "../../src/infra/repositories/fake-user"

export const makeAuthenticateUser = (): AuthenticateUserService => {
    const repository = new FakeUserRepository();
    return new AuthenticateUserService(repository)
}
import { CreateUserService } from "../../src/domain/usecases/create-user"
import { FakeUserRepository } from "../../src/infra/repositories"
import { ValidationUserZod } from "../../src/domain/validations/implementation"

export const makeCreateUserService = (): CreateUserService => {
    const repository = new FakeUserRepository();
    const validation = new ValidationUserZod();
    return new CreateUserService(repository, validation);
}
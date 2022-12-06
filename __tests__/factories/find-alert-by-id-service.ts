import { FindAlertByIdService } from "../../src/domain/usecases/find-alert-by-id"
import { FakeAlertRepository, FakeUserRepository } from "../../src/infra/repositories"
import { ValidationAlertZod } from "../../src/domain/validations/implementation"

export const makeFindAlertByIdService = (): FindAlertByIdService => {
    const alertRepository = new FakeAlertRepository()
    const userRepository = new FakeUserRepository()
    const validation = new ValidationAlertZod()
    return new FindAlertByIdService(alertRepository, userRepository, validation)
}
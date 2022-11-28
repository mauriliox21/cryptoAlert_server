import { CreateAlertService } from "../../src/domain/usecases/create-alert"
import { FakeAlertRepository, FakeCryptocurrencyRepository, FakeUserRepository } from "../../src/infra/repositories"
import { ValidationAlertZod } from "../../src/domain/validations/implementation"

export const makeCreateAlertService = (): CreateAlertService => {
    const alertRepository = new FakeAlertRepository()
    const cryptocurrency = new FakeCryptocurrencyRepository()
    const userRepository = new FakeUserRepository()
    const validation =  new ValidationAlertZod()
    return new CreateAlertService(alertRepository, cryptocurrency, userRepository, validation)
}
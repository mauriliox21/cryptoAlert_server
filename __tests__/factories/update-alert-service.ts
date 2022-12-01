import { UpdateAlertService } from "../../src/domain/usecases/update-alert"
import { FakeAlertRepository, FakeCryptocurrencyRepository, FakeUserRepository } from "../../src/infra/repositories"
import { ValidationAlertZod } from "../../src/domain/validations/implementation"

export const makeUpdateAlertService = (): UpdateAlertService => {
    const alertRepository = new FakeAlertRepository()
    const cryptocurrencyRepository =  new FakeCryptocurrencyRepository()
    const userRepository = new FakeUserRepository()
    const validation =  new ValidationAlertZod()
    return new UpdateAlertService(alertRepository, cryptocurrencyRepository, userRepository, validation)
}
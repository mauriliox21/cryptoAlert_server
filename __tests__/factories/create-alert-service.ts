import { CreateAlertService } from "../../src/domain/usecases/create-alert"
import { FakeAlertRepository } from "../../src/infra/repositories"
export const makeCreateAlertService = (): CreateAlertService => {
    const repository = new FakeAlertRepository()
    return new CreateAlertService(repository)
}
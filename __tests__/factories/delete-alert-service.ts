import { DeleteAlertService } from "../../src/domain/usecases/delete-alert"
import { FakeAlertRepository } from "../../src/infra/repositories"
import { ValidationAlertZod } from "../../src/domain/validations/implementation"

export const makeDeleteAlertService = (): DeleteAlertService => {
    const respository = new FakeAlertRepository()
    const validation = new ValidationAlertZod()
    return new DeleteAlertService(respository, validation)
}
import { FindManyAlertsService } from "../../src/domain/usecases/find-many-alerts"
import { FakeAlertRepository } from "../../src/infra/repositories"

export const makeFindManyAlertsService = () :FindManyAlertsService => {
    const repository = new FakeAlertRepository();
    return new FindManyAlertsService(repository);
}
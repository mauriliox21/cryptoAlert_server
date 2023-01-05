import { FindManyAlertsController } from "../../src/domain/usecases/find-many-alerts"
import { makeFindManyAlertsService } from "./find-many-alerts-service"

export const makeFindManyAlertsController = (): FindManyAlertsController => {
    const service = makeFindManyAlertsService();
    return new FindManyAlertsController(service);
}
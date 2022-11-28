import { CreateAlertController } from "../../src/domain/usecases/create-alert";
import { makeCreateAlertService } from "./create-alert-service";

export const makeCreateAlertController = (): CreateAlertController => {
    const service = makeCreateAlertService()
    return new CreateAlertController(service)
}
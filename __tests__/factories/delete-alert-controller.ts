import { DeleteAlertController } from "../../src/domain/usecases/delete-alert";
import { makeDeleteAlertService } from "./delete-alert-service";

export const makeDeleteAlertController = (): DeleteAlertController => {
    const service = makeDeleteAlertService();
    return new DeleteAlertController(service);
}
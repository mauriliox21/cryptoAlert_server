import {FindAlertByIdController} from "../../src/domain/usecases/find-alert-by-id"
import { makeFindAlertByIdService } from "./find-alert-by-id-service"

export const makeFindAlertByIdController = (): FindAlertByIdController => {
    const service = makeFindAlertByIdService()
    return new FindAlertByIdController(service)
}
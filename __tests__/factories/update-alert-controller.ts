import { UpdateAlertController } from "../../src/domain/usecases/update-alert"
import { makeUpdateAlertService } from "../factories"

export const makeUpdateAlertController = (): UpdateAlertController => {
    const service =  makeUpdateAlertService()
    return new UpdateAlertController(service)
}
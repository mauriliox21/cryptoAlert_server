import { Alert } from "../../entities"
import { getUserIdByToken } from "../../providers"
import { Controller } from "../../../presentation/contracts"
import { HttpRequest, HttpResponse } from "../../../presentation/types"
import { AlertViewModel } from "../../../presentation/view-models"
import { CreateAlertService } from "./create-alert-service"

export class CreateAlertController implements Controller{
    constructor(private readonly createAlertService: CreateAlertService){}

    async execute (request: HttpRequest): Promise<HttpResponse<AlertViewModel>>{
        try{
            const userId = getUserIdByToken(request.header.authorization)

            const newAlert = Alert.create({
                targetValue: parseInt(request.body.targetValue ?? "0"),
                cryptocurrencyId: request.body.cryptocurrencyId ?? "",
                userId: userId
            })

            const createdAlert = AlertViewModel.map(await this.createAlertService.execute(newAlert))

            return HttpResponse.created(createdAlert, "Alert created with successful")
        }catch(error: Error|any){
            return HttpResponse.verifyTypeError(error)
        }
    }
}
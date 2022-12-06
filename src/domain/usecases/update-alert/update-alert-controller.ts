import { UpdateAlertService } from "./update-alert-service"
import { Alert } from "../../entities"
import { getUserIdByToken } from "../../providers"
import { AlertViewModel } from "../../../presentation/view-models"
import { Controller } from "../../../presentation/contracts"
import { HttpRequest, HttpResponse } from "../../../presentation/types"

export class UpdateAlertController implements Controller {
    constructor(private readonly updateAlertService: UpdateAlertService){}
    async execute(request: HttpRequest): Promise<HttpResponse<AlertViewModel>>{
        try{
            const userId = getUserIdByToken(request.header.authorization)
            const alertForUpdate = Alert.create({
                targetValue: request.body.targetValue ?? 0, 
                cryptocurrencyId: request.body.cryptocurrencyId ?? "",
                userId: userId
            }, request.params.id ?? "")
    
            const alertUpdated = AlertViewModel.map(await this.updateAlertService.execute(alertForUpdate))
    
            return HttpResponse.ok(alertUpdated, "Alert updated with successful")

        }catch(error: Error|any){
            return HttpResponse.verifyTypeError(error)
        }
    }
}
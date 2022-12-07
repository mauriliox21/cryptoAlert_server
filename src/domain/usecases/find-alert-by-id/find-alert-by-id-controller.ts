import { getUserIdByToken } from "../../providers"
import { Controller } from "../../../presentation/contracts"
import { HttpRequest, HttpResponse } from "../../../presentation/types"
import { AlertViewModel } from "../../../presentation/view-models"
import { FindAlertByIdService } from "./find-alert-by-id-service"

export class FindAlertByIdController implements Controller{
    constructor(private readonly findAlertByIdService: FindAlertByIdService){}
    async execute(request: HttpRequest): Promise<HttpResponse<AlertViewModel|null>>{
        
        try{
            const userId = getUserIdByToken(request.header.authorization)
            const alertFinded = await this.findAlertByIdService.execute(request.params.id ?? "", userId)
            let alertFindedViewModel;
            if(alertFinded)
                alertFindedViewModel = AlertViewModel.map(alertFinded)
            else
                alertFindedViewModel = null
    
            return HttpResponse.ok(alertFindedViewModel, "successfully found alert")
        }catch(error: Error|any){
            return HttpResponse.verifyTypeError(error)
        }
    }
}
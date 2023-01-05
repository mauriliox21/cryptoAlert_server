import { getUserIdByToken } from "../../providers"
import { Controller } from "../../../presentation/contracts"
import { HttpRequest, HttpResponse } from "../../../presentation/types"
import { FindManyAlertsService } from "./find-many-alerts-service"
import { AlertViewModel } from "../../../presentation/view-models";

export class FindManyAlertsController implements Controller{
    constructor(private findManyAlertsService: FindManyAlertsService){}
    async execute (request: HttpRequest): Promise<HttpResponse<AlertViewModel[]>>{
        try{
            const userId = getUserIdByToken(request.header.authorization);
            const alerts = await this.findManyAlertsService.execute(userId);

            return HttpResponse.ok(AlertViewModel.mapCollection(alerts), "Alerts found with successful");
        }catch(error: Error|any){
            return HttpResponse.verifyTypeError(error);
        }
    }
}
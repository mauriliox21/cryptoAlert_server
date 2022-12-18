import { HttpRequest, HttpResponse } from "../../../presentation/types"
import { Controller } from "../../../presentation/contracts"
import { DeleteAlertService } from "./delete-alert-service"
import { getUserIdByToken } from "../../providers"

export class DeleteAlertController implements Controller{
    constructor(private deleteAlertService: DeleteAlertService){}
    async execute(request: HttpRequest): Promise<HttpResponse<any>>{
        try{
            const userId = getUserIdByToken(request.header.authorization)
            const deleted = await this.deleteAlertService.execute(request.params.id, userId);
            return HttpResponse.ok({deleted: deleted}, 'alert deleted with successful')
        }catch(error: Error|any){
            return HttpResponse.verifyTypeError(error)
        }
    }
}
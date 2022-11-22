import { Controller } from "../../../presentation/contracts"
import { HttpRequest, HttpResponse } from "../../../presentation/types"
import { AuthenticateUserService } from "./authenticate-user-service"

export class AuthenticateUserController implements Controller {
    constructor(private readonly authenticateUserService: AuthenticateUserService){}
    async execute (request: HttpRequest): Promise<HttpResponse<any>>{
        try{
            const token = await this.authenticateUserService.execute(request.body.email, request.body.password)
            return HttpResponse.ok(token, "User has been authenticated")
        }catch(error: Error|any){
            return HttpResponse.verifyTypeError(error)
        }
    }
}
import { User } from "../../entities"
import { CreateUserService } from "../create-user"
import { Controller } from "../../../presentation/contracts"
import { HttpRequest, HttpResponse, TypeResponse } from "../../../presentation/types"
import { UserViewModel } from "../../../presentation/view-models";

export class CreateUserController implements Controller{
    constructor(private readonly createUserService: CreateUserService){}

    async execute (request: HttpRequest): Promise<HttpResponse<UserViewModel>>{
        try{
            const newUser = User.create({name: request.body.name ?? "", email: request.body.email ?? "", password: request.body.password ?? ""})
            const createdUser = UserViewModel.map(await this.createUserService.execute(newUser))
            return {statusCode: 201, responseBody: {typeResponse: TypeResponse.success, message: "User created with successful", data: createdUser}}
        }catch(error: Error|any){
            return {statusCode: 500, responseBody: {typeResponse: TypeResponse.error, message: error.message}}
        }
    }
}
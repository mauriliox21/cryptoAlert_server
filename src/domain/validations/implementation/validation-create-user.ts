import { User } from "../../entities"
import { ValidationUser } from "../contracts"
import { z } from "zod"

export class ValidationCreateUser implements ValidationUser {
    validate(data: User): void {
        try{
            const validUser = z.object({
                name: z.string({required_error: "Name is required"})
                       .min(3, {message: "Name must be 3 or more characters long"})
                       .max(100, {message: "Name must be 100 or fewer characters long"}),
                email: z.string({required_error: "E-mail is required"}).email({message: "Invalid e-mail"}),
                password: z.string({required_error: "Password is required"})
                           .min(8, {message: "Password must be 8 or more characters long"})
                           .max(30, {message: "Password must be 30 or fewer characters long"}),
            });
    
            validUser.parse(data.props);
        }catch(erro: Error|any){

            const validationError = JSON.parse(erro.message);
            let message = '';
            for(let i = 0; validationError.length > i; i++){
                message += validationError[i].message + ';'
            }
            
            throw new Error(message)
        }
    }
}
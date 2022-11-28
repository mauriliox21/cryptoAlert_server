import { User } from "../../entities"
import { ValidationUser } from "../contracts"
import { formatErrorMessage } from "../format-error-message";
import { InvalidParametersError } from "../../errors";
import { z } from "zod"

/**
 * function used to validate object User for creation, if validation fail throw error
 * @param {string} data Object type class User.
 */
export class ValidationUserZod implements ValidationUser {
    validateCreation(data: User): void {
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

            throw new InvalidParametersError(formatErrorMessage(erro.message))
        }
    }
}
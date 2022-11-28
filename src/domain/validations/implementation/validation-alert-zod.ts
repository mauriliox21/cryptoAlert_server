import { Alert } from "../../entities"
import { ValidationAlert } from "../contracts"
import { formatErrorMessage } from "../format-error-message";
import { InvalidParametersError } from "../../errors";
import { z } from "zod"

/**
 * function used to validate object Alert for creation, if validation fail throw error
 * @param {string} data Object type class Alert.
 */
export class ValidationAlertZod implements ValidationAlert {
    validateCreation(data: Alert): void {
        try{
            const validAlert = z.object({
                targetValue: z.number({required_error: "targetValue is required"}),
                cryptocurrencyId: z.string({required_error: "cryptocurrencyId is required"}).min(1, {message: "cryptocurrencyId cannot be empty"}),
                userId: z.string({required_error: "userId is required"}).min(1, {message: "userId cannot be empty"})
            });

            validAlert.parse(data.props);
        }catch(erro: Error|any){
            throw new InvalidParametersError(formatErrorMessage(erro.message))
        }
    }
}
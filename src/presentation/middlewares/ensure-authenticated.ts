import { VerifyingAuthenticationError } from "../../domain/errors/verifying-authentication"
import { verify } from "jsonwebtoken"

export const EnsureAutheticatedMiddleware = (authorization?: string) => {

    if(!authorization){
        throw new VerifyingAuthenticationError("Token is missing")
    }

    const [,token] = authorization.split(" ")

    try{
        verify(token, process.env.PRIVATE_KEY_JWT ?? "")
    }catch(error: Error|any){
        throw new VerifyingAuthenticationError("Invalid token")
    }
}
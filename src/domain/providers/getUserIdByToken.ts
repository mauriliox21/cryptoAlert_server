import { verify } from "jsonwebtoken"


export const getUserIdByToken = (token: string): string => {
    const decodedToken = verify(token.split(" ")[1], process.env.PRIVATE_KEY_JWT ?? "")
    return decodedToken.sub?.toString() ?? ""
}
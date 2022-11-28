import { sign } from "jsonwebtoken"

export const generateJWTToken = (userId: string): string => {
    const token = sign({}, process.env.PRIVATE_KEY_JWT ?? "", {
        subject: userId,
        expiresIn: "1h"
    })
    
    return token
}
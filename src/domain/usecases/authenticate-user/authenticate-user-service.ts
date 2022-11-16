import { UserRepository } from "../../../data/contracts"
import { AuthenticationFailedError } from "../../errors";
import { compare } from "bcrypt"
import { sign } from "jsonwebtoken"

export class AuthenticateUserService {
    constructor(private readonly userRepository: UserRepository ){}
    async execute(email: string, password: string): Promise<object> {

        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if(!userAlreadyExists)
            throw new AuthenticationFailedError("User or password incorrect");

        const passwordMatch = await compare(password, userAlreadyExists.props.password)
        
        if(!passwordMatch)
            throw new AuthenticationFailedError("User or password incorrect");

        const token = sign({}, process.env.PRIVATE_KEY_JWT ?? "", {
            subject: userAlreadyExists.id,
            expiresIn: "1h"
        }) 

        return {token: token}
    }
}
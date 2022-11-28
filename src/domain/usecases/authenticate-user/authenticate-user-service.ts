import { UserRepository } from "../../../data/contracts"
import { AuthenticationFailedError } from "../../errors"
import { generateJWTToken } from "../../providers"
import { compare } from "bcrypt"

export class AuthenticateUserService {
    constructor(private readonly userRepository: UserRepository ){}
    async execute(email: string, password: string): Promise<object> {

        const userAlreadyExists = await this.userRepository.findByEmail(email);

        if(!userAlreadyExists)
            throw new AuthenticationFailedError("User or password incorrect");

        const passwordMatch = await compare(password, userAlreadyExists.props.password)
        
        if(!passwordMatch)
            throw new AuthenticationFailedError("User or password incorrect");

        const token = generateJWTToken(userAlreadyExists.id) 

        return {token: token}
    }
}
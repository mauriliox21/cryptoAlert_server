import { UserRepository } from "../../../data/contracts"
import { ValidationUser } from "../../validations/contracts"
import { User } from "../../entities"

export class CreateUserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly validation: ValidationUser
    ){}
    
    async execute (data: User): Promise<User>{
        this.validation.validate(data)
        return this.userRepository.create(data)
    }
}
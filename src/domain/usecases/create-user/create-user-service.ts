import { UserRepository } from "../../../data/contracts"
import { ValidationUser } from "../../validations/contracts"
import { User } from "../../entities"
import { RecordAlreadyExistsError } from "../../errors"

export class CreateUserService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly validation: ValidationUser
    ){}
    
    async execute (data: User): Promise<User>{
        this.validation.validateCreation(data)

        if(await this.userRepository.findByEmail(data.props.email) != null)
            throw new RecordAlreadyExistsError("User already exists in system")

        return this.userRepository.create(data)
    }
}
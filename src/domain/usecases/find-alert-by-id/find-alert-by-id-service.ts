import { Alert } from "../../entities"
import { AlertRepository, UserRepository } from "../../../data/contracts"
import { RecordNotFoundError } from "../../errors/record-not-found"
import { ValidationAlert } from "../../validations/contracts"

export class FindAlertByIdService {
    constructor(
        private readonly alertRepository: AlertRepository,
        private readonly userRepository: UserRepository,
        private readonly validation: ValidationAlert
    ){}
    async execute(id: string, userId: string): Promise<Alert|any>{
        this.validation.validateFindByIdOrDelete({id, userId})
        
        if(!await this.userRepository.findById(userId))
            throw new RecordNotFoundError("userId not found")

        return this.alertRepository.findById(id, userId)
    }
}
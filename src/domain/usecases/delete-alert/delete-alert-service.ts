import { RecordNotFoundError } from "../../errors/record-not-found"
import { ValidationAlertZod } from "../../validations/implementation"
import { AlertRepository } from "../../../data/contracts"

export class DeleteAlertService {
    constructor(
        private readonly alertRepository: AlertRepository,
        private readonly validation: ValidationAlertZod
    ){}
    async execute(id: string, userId: string): Promise<boolean>{
        this.validation.validateFindByIdOrDelete({id, userId});

        if(!await this.alertRepository.findById(id, userId))
            throw new RecordNotFoundError('alertId not found');

        return this.alertRepository.delete(id);
    }
}
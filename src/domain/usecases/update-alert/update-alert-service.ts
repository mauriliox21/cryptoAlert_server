import { Alert } from "../../entities"
import { AlertRepository, CryptocurrencyRepository, UserRepository } from "../../../data/contracts"
import { ValidationAlert } from "../../validations/contracts"
import { RecordNotFoundError } from "../../errors/record-not-found"

export class UpdateAlertService {
    constructor(
        private readonly alertRepository: AlertRepository,
        private readonly cryptocurrencyRepository: CryptocurrencyRepository,
        private readonly userRepository: UserRepository,
        private readonly validation: ValidationAlert
    ){}
    async execute(data: Alert): Promise<Alert> {
        this.validation.validateUpdate(data)

        if(!await this.alertRepository.findById(data.id))
            throw new RecordNotFoundError("alertId not found")

        if(!await this.cryptocurrencyRepository.findById(data.props.cryptocurrencyId))
            throw new RecordNotFoundError("cryptocurrencyId not found")

        if(!await this.userRepository.findById(data.props.userId))
            throw new RecordNotFoundError("userId not found")

        return this.alertRepository.update(data)
    }
}
import { Alert } from "../../entities"
import { AlertRepository } from "../../../data/contracts"

export class UpdateAlertService {
    constructor(private readonly alertRepository: AlertRepository){}
    async execute(data: Alert): Promise<Alert> {
        return this.alertRepository.update(data)
    }
}
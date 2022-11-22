import { AlertRepository } from "../../../data/contracts/alert-repository";
import { Alert } from "../../entities";

export class CreateAlertService {
    constructor(private readonly alertRepository: AlertRepository){}
    async execute(data: Alert): Promise<Alert> {
        return this.alertRepository.create(data)
    }
}
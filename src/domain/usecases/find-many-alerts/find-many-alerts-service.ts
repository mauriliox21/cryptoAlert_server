import { AlertRepository } from "../../../data/contracts"
import { Alert } from "../../entities"

export class FindManyAlertsService {
    constructor(private alertRepository: AlertRepository){}
    async execute(userId: string): Promise<Alert[]>{
        return this.alertRepository.findMany(userId);
    }
}
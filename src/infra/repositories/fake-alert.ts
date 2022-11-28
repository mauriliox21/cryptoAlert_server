import { AlertModel } from "../../data/models/alert"
import { Alert } from "../../domain/entities"
import { AlertRepository } from "../../data/contracts"
import { alertData } from "../data-source"

export class FakeAlertRepository implements AlertRepository{
    async create(data: AlertModel): Promise<AlertModel> {
        alertData.push({
            id: data.id, 
            targetValue: data.props.targetValue, 
            cryptocurrencyId: data.props.cryptocurrencyId, 
            userId: data.props.userId
        })

        return data
    }

    async update(data: AlertModel): Promise<AlertModel> {
        const indedxUpdate = alertData.findIndex(alert => alert.id == data.id)

        alertData[indedxUpdate] = {
            id: data.id, 
            targetValue: data.props.targetValue, 
            cryptocurrencyId: data.props.cryptocurrencyId, 
            userId: data.props.userId
        }

        return data
    }
}
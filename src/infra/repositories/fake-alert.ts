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

    async findById(id: string): Promise<AlertModel | null> {
        const alertFinded = alertData.find(alert => alert.id == id)

        if(!alertFinded)
            return null
        else {
            return Alert.create({
                targetValue: alertFinded.targetValue, 
                cryptocurrencyId: alertFinded.cryptocurrencyId,
                userId: alertFinded.userId
            }, alertFinded.id)
        }
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
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

    async delete(id: string): Promise<boolean> {
        const indedxUpdate = alertData.findIndex(alert => alert.id == id)

        const alertDeleted = alertData.splice(indedxUpdate, indedxUpdate + 1)

        return alertDeleted.length != 0
    }

    async findById(id: string, userId: string): Promise<AlertModel | null> {
        const alertFinded = alertData.find(alert => alert.id == id && alert.userId == userId)

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
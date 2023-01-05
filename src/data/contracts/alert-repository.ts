import { AlertModel } from "../models";

export interface AlertRepository {
    create(data: AlertModel): Promise<AlertModel>
    findById(id: string, userId: string): Promise<AlertModel|null>
    findMany(userId: string): Promise<AlertModel[]>
    update(data: AlertModel): Promise<AlertModel>
    delete(id: string): Promise<boolean>
}
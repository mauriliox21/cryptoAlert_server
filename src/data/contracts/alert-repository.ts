import { AlertModel } from "../models";

export interface AlertRepository {
    create(data: AlertModel): Promise<AlertModel>
    findById(id: string, userId: string): Promise<AlertModel|null>
    update(data: AlertModel): Promise<AlertModel>
}
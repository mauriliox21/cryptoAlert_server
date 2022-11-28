import { AlertModel } from "../models";

export interface AlertRepository {
    create(data: AlertModel): Promise<AlertModel>
    update(data: AlertModel): Promise<AlertModel>
}
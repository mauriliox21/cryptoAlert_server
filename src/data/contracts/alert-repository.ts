import { AlertModel } from "../models/alert";

export interface AlertRepository {
    create(data: AlertModel): Promise<AlertModel>
}
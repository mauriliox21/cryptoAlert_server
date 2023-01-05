import { Alert } from "../../domain/entities";

export class AlertViewModel {
    constructor(
        public id: string,
        public targetValue: number,
        public cryptocurrencyId: string,
        public userId: string
    ){}

    static map(entity: Alert): AlertViewModel {
        return new AlertViewModel(
            entity.id,
            entity.props.targetValue,
            entity.props.cryptocurrencyId,
            entity.props.userId
        )
    }

    static mapCollection(listAlert: Alert[]): AlertViewModel[]{
        const alerts: AlertViewModel[] = [];
        listAlert.map(alert => alerts.push(AlertViewModel.map(alert)))
        return alerts;
    }
}
import { Entity } from "./entity";

interface IAlertProps {
    targetValue: number
    cryptocurrencyId: string
    userId: string
}

export class Alert extends Entity<IAlertProps>{
    constructor(props: IAlertProps, id?: string){
        super(props, id)
    }

    static create(props: IAlertProps, id?: string): Alert {
        return new Alert(props, id)
    }
}
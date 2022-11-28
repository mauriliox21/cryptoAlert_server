import { Entity } from "./entity";
interface ICryptocurrencyProps {
    name: string
    symbol: string
    icon: string
}

export class Cryptocurrency extends Entity<ICryptocurrencyProps> {
    constructor(props: ICryptocurrencyProps, id?: string){
        super(props, id)
    }

    static create(props: ICryptocurrencyProps, id?: string): Cryptocurrency{
        return new Cryptocurrency(props, id)
    }
}
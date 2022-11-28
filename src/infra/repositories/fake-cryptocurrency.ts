import { cryptocurrencyData } from "../data-source";
import { CryptocurrencyRepository } from "../../data/contracts";
import { Cryptocurrency } from "../../domain/entities";

export class FakeCryptocurrencyRepository implements CryptocurrencyRepository{
    async findById(id: string): Promise<Cryptocurrency | null> {
        const cryptocurrencyFinded = cryptocurrencyData.find(cryptocurrency => cryptocurrency.id == id)
        
        if(!cryptocurrencyFinded)
            return null
        else
            return Cryptocurrency.create({name: cryptocurrencyFinded.name, symbol: cryptocurrencyFinded.symbol, icon: cryptocurrencyFinded.icon}, cryptocurrencyFinded.id)
    }
}
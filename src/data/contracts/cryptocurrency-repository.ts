import { CryptocurrencyModel } from "../models";

export interface CryptocurrencyRepository {
    findById(id: string): Promise<CryptocurrencyModel|null>
}
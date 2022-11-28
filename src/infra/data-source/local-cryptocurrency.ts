import { faker } from "@faker-js/faker"

type FakeCryptocurrencyDataType = {
    id: string
    name: string
    symbol: string
    icon: string
}

export const cryptocurrencyData: FakeCryptocurrencyDataType[] = [
    {
        id: "7c9c1722-78ae-4816-8a51-707996805c34",
        name: "Bitcoin",
        symbol: "BTC",
        icon: faker.image.imageUrl()
    },
    {
        id: faker.datatype.uuid(),
        name: "Etheriun",
        symbol: "ETH",
        icon: faker.image.imageUrl()
    }
]
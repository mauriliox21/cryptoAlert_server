import { faker } from "@faker-js/faker"

type FakeAlertDataType = {
    id: string
    targetValue: number
    cryptocurrencyId: string
    userId: string
}

export const alertData: FakeAlertDataType[] = [
    {
        id: faker.datatype.uuid(),
        targetValue: 3000,
        cryptocurrencyId: faker.datatype.uuid(),
        userId: faker.datatype.uuid()
    },
    {
        id: faker.datatype.uuid(),
        targetValue: 4000,
        cryptocurrencyId: faker.datatype.uuid(),
        userId: faker.datatype.uuid()
    },
    {
        id: "ca9dee90-2603-4cd7-a254-37528c4ca53b",
        targetValue: 5000,
        cryptocurrencyId: faker.datatype.uuid(),
        userId: faker.datatype.uuid()
    }
]
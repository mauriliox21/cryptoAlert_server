import { faker } from '@faker-js/faker'

type FakeUserDataType = {
    id: string
    name:  string
    email: string
    password: string
}

export const userData: FakeUserDataType[] = [
    {
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    },
    {
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
]
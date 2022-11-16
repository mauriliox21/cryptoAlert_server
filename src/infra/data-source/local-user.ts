import { faker } from "@faker-js/faker"
import { hashSync } from "bcrypt"
import * as dotenv from "dotenv"
dotenv.config()

type FakeUserDataType = {
    id: string
    name:  string
    email: string
    password: string
}

const roundsCryptography = parseInt(process.env.ROUNDS_OF_CRYPTOGRAPHY_PASSWORDS ?? "")

export const userData: FakeUserDataType[] = [
    {
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        password: hashSync(faker.internet.password(), roundsCryptography)
    },
    {
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        email: faker.internet.email(),
        password: hashSync(faker.internet.password(), roundsCryptography)
    },
    {
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        email: "user.test.authentication@test.com",
        password: hashSync("alaba321", roundsCryptography)
    }
]

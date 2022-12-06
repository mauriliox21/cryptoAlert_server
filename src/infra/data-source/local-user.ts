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
        id: "81dd58d3-6ec5-489e-b698-6f802bb4578d",
        name: faker.name.fullName(),
        email: faker.internet.email(),
        password: hashSync(faker.internet.password(), roundsCryptography)
    },
    {
        id: faker.datatype.uuid(),
        name: faker.name.fullName(),
        email: "user.test.authentication@test.com",
        password: hashSync("alaba321", roundsCryptography)
    },
    {
        id: "d0993234-7738-4488-a91a-021ba6a3f1ae",
        name: faker.name.fullName(),
        email: "user.test.already.exists@test.com",
        password: hashSync("ghama321", roundsCryptography)
    }
]

import { User } from "../../src/domain/entities"
import { makeCreateUserService } from "../factories"

describe("CreateUserService", () => {
    it("Should be able to create a new user", async () => {
        const sut = makeCreateUserService()

        const createdUser = User.create({name: "new user name", email: "new.user@gmail.com", password: "user1234"});

        const res = await sut.execute(createdUser)

        expect(res).toHaveProperty("_id")
        expect(res.props.name).toBe(createdUser.props.name);
    })

    it("Should not be able to create user with empty name", async () => {
        const sut = makeCreateUserService()

        const createdUser = User.create({name: "", email: "new.user@gmail.com", password: "user1234"})
        let ocurredError = false

        try{
            const res = await sut.execute(createdUser)
        }catch(erro: Error|any){
            expect(erro.name).toBe("InvalidParametersError")
            ocurredError = true
        }

        expect(ocurredError).toBe(true)
    })

    it("Should not be able to create duplicated user", async () => {
        const sut = makeCreateUserService()

        const createdUser = User.create({name: "Duplicated User", email: "user.test.already.exists@test.com", password: "user1234"})
        let ocurredError = false

        try{
            const res = await sut.execute(createdUser)
        }catch(erro: Error|any){
            expect(erro.name).toBe("RecordAlreadyExistsError")
            ocurredError = true
        }
        
        expect(ocurredError).toBe(true)
    })
})

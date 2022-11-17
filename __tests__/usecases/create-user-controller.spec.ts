import { makeCreateUserController } from "../factories"

describe("CreateUserController", () => {
    it("Should be able to returns the created user and status code create", async () => {
        const sut = makeCreateUserController()

        const res = await sut.execute({body: {name: "new user name", email: "new.user@gmail.com", password: "user1234"}})

        expect(res.statusCode).toBe(201)
        expect(res.responseBody.typeResponse).toBe("success")
        expect(res.responseBody.message).toBe("User created with successful")
        expect(res.responseBody.data?.name).toBe("new user name")
    })

    it("Should be able to returns error message if validation user is not successful", async () => {
        const sut = makeCreateUserController()

        const res = await sut.execute({body: {name: "", email: "new.user@gmail.com", password: "user1234"}})

        expect(res.statusCode).toBe(500)
        expect(res.responseBody.typeResponse).toBe("error")
        expect(res.responseBody.message).toContain("Name must be 3 or more characters long")
    })
})
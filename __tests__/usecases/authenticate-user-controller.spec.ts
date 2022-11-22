import { makeAuthenticateUserController } from "../factories"

describe("AuthenticateUserController", () => {
    it("Should be able to returns status code OK and token", async () => {
        const sut = makeAuthenticateUserController()

        const res = await sut.execute({body: {email: "user.test.authentication@test.com", password: "alaba321"}})

        expect(res.statusCode).toBe(200)
        expect(res.responseBody.data).toHaveProperty("token")
    })

    it("Should be able to returns error statusCode and message if authentication failed", async () => {
        const sut = makeAuthenticateUserController()

        const res = await sut.execute({body: {email: "user.test.notExistent@test.com", password: "alaba321"}})
        expect(res.statusCode).toBe(400)
        expect(res.responseBody.message).toBe("User or password incorrect")
    })
})
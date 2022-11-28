import { generateJWTToken } from "../../src/domain/providers"
import { HttpRequest } from "../../src/presentation/types"
import { makeCreateAlertController } from "../factories"

describe("CreateAlertController", () => {
    let authenticationToken: string
    beforeAll(() => {
        authenticationToken = generateJWTToken("d0993234-7738-4488-a91a-021ba6a3f1ae")
    })

    it("Should be able to create a new alert", async () => {
        const sut = makeCreateAlertController()

        const req: HttpRequest = {
            header: { authorization: `bearer ${authenticationToken}`},
            body: {targetValue: 20000, cryptocurrencyId: "7c9c1722-78ae-4816-8a51-707996805c34"}
        } 

        const res = await sut.execute(req)

        expect(res.statusCode).toBe(201)
        expect(res.responseBody.message).toBe("Alert created with successful")
        expect(res.responseBody.data?.targetValue).toBe(20000)
        expect(res.responseBody.data?.userId).toBe("d0993234-7738-4488-a91a-021ba6a3f1ae")
    })

    it("Should be able to create a new alert using targetValue null", async () => {
        const sut = makeCreateAlertController()

        const req: HttpRequest = {
            header: { authorization: `bearer ${authenticationToken}`},
            body: {targetValue: null, cryptocurrencyId: "7c9c1722-78ae-4816-8a51-707996805c34"}
        } 

        const res = await sut.execute(req)

        expect(res.statusCode).toBe(201)
        expect(res.responseBody.message).toBe("Alert created with successful")
        expect(res.responseBody.data?.targetValue).toBe(0)
        expect(res.responseBody.data?.userId).toBe("d0993234-7738-4488-a91a-021ba6a3f1ae")
    })

    it("Should be able to retuns statusCode and message error if cryptocurrencyId is not found", async () => {
        const sut = makeCreateAlertController()

        const req: HttpRequest = {
            header: { authorization: `bearer ${authenticationToken}`},
            body: {targetValue: 20000, cryptocurrencyId: "7c9c1722-78ae-4816-8a51-5c34"}
        } 

        const res = await sut.execute(req)
        
        expect(res.statusCode).toBe(400)
        expect(res.responseBody.message).toBe("cryptocurrencyId not found")
    })
})
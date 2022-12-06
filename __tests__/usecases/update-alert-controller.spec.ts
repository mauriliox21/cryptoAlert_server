import { generateJWTToken } from "../../src/domain/providers"
import { HttpRequest } from "../../src/presentation/types"
import { makeUpdateAlertController } from "../factories"

describe("UpdateAlertController", () => {
    let authenticationToken: string
    beforeAll(() => {
        authenticationToken = generateJWTToken("d0993234-7738-4488-a91a-021ba6a3f1ae")
    })

    it("Should be able to returns status code and and success message", async () => {
        const sut = makeUpdateAlertController()

        const req: HttpRequest = {
            header: { authorization: `bearer ${authenticationToken}`}, 
            params: {id: "ca9dee90-2603-4cd7-a254-37528c4ca53b"}, 
            body: {targetValue: 35000, cryptocurrencyId: "7c9c1722-78ae-4816-8a51-707996805c34"}
        }

        const res = await sut.execute(req)

        expect(res.statusCode).toBe(200)
        expect(res.responseBody.message).toBe("Alert updated with successful")
        expect(res.responseBody.data?.cryptocurrencyId).toBe("7c9c1722-78ae-4816-8a51-707996805c34")
    })

    it("Should be able to returns error message if  alert \"id\" no especified", async () => {
        const sut =  makeUpdateAlertController()

        const req: HttpRequest = {
            header: { authorization: `bearer ${authenticationToken}`},
            params: {}, 
            body: {targetValue: 35000, cryptocurrencyId: "7c9c1722-78ae-4816-8a51-707996805c34"}
        }

        const res = await sut.execute(req)

        expect(res.statusCode).toBe(400)
        expect(res.responseBody.message).toContain("id cannot be empty")
    })

    it("Should be able to returns error if cryptocurrencyId not found", async () => {
        const sut =  makeUpdateAlertController()

        const req: HttpRequest = {
            header: { authorization: `bearer ${authenticationToken}`},
            params: {id: "ca9dee90-2603-4cd7-a254-37528c4ca53b"}, 
            body: {targetValue: 35000, cryptocurrencyId: "7c9c1722-78adasdasdasdsadad-6805c34"}
        }

        const res = await sut.execute(req)
        
        expect(res.statusCode).toBe(400)
        expect(res.responseBody.message).toContain("cryptocurrencyId not found")
    })
})
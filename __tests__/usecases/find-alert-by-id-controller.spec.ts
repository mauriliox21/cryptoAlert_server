import { generateJWTToken } from "../../src/domain/providers"
import { HttpRequest } from "../../src/presentation/types"
import { makeFindAlertByIdController } from "../factories"

describe("FindAlertByIdController", () => {
    let authenticationToken: string
    beforeAll(() => {
        authenticationToken = generateJWTToken("d0993234-7738-4488-a91a-021ba6a3f1ae")
    })

    it("Should be able to returns alert, success statusCode and success message", async () => {
        const sut = makeFindAlertByIdController()

        const req: HttpRequest = {
            header: {authorization: `bearer ${authenticationToken}`},
            params: {id: "ca9dee90-2603-4cd7-a254-37528c4ca53b"}
        }

        const res = await sut.execute(req)

        expect(res.statusCode).toBe(200)
        expect(res.responseBody.data?.userId).toBe("d0993234-7738-4488-a91a-021ba6a3f1ae")
    })

    it("Should be able to returns success statusCode if alertId not found", async () => {
        const sut = makeFindAlertByIdController()

        const req: HttpRequest = {
            header: {authorization: `bearer ${authenticationToken}`},
            params: {id: "ca9dee90-2603-gdfg-a254-3sgdfgsfdg8c4ca53b"}
        }

        const res = await sut.execute(req)

        expect(res.statusCode).toBe(200)
        expect(res.responseBody.data).toBe(null)
    })

    it("Should be able too returns error statuscode and error message if alertId is empty", async () => {
        const sut = makeFindAlertByIdController()

        const req: HttpRequest = {
            header: {authorization: `bearer ${authenticationToken}`},
            params: {id: ""}
        }

        const res = await sut.execute(req)

        expect(res.statusCode).toBe(400)
        expect(res.responseBody.message).toContain("id cannot be empty")
    })
})
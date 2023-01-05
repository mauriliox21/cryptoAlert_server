import { generateJWTToken } from "../../src/domain/providers"
import { HttpRequest } from "../../src/presentation/types"
import { makeFindManyAlertsController } from "../factories"

describe("FindManyAlertsController", ()=> {
    let authenticationToken: string
    beforeAll(() => {
        authenticationToken = generateJWTToken("d0993234-7738-4488-a91a-021ba6a3f1ae")
    })

    it("should be able to return success statuscode and a alerts array", async () => {
        const sut = makeFindManyAlertsController();

        const req: HttpRequest = {
            header: {authorization: `bearer ${authenticationToken}`}
        };

        const res = await sut.execute(req);

        expect(res.statusCode).toBe(200);
        expect(res.responseBody.data?.length).toBeGreaterThan(0);
        expect(res.responseBody.data?.[0].id).toBe("ca9dee90-2603-4cd7-a254-37528c4ca53b");
    })
})
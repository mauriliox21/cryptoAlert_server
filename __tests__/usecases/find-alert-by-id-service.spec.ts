import { makeFindAlertByIdService } from "../factories/find-alert-by-id-service"

describe("FindAlertByIdService", () => {
    it("Should be able to find a alert by id", async () => {
        const sut = makeFindAlertByIdService()

        const alertFinded = await sut.execute("ca9dee90-2603-4cd7-a254-37528c4ca53b", "d0993234-7738-4488-a91a-021ba6a3f1ae")

        expect(alertFinded.id).toBe("ca9dee90-2603-4cd7-a254-37528c4ca53b")
        expect(alertFinded.props.userId).toBe("d0993234-7738-4488-a91a-021ba6a3f1ae")
    })

    it("Should be able to return null if alert not exists or does not belong to the user", async () => {
        const sut = makeFindAlertByIdService()

        const alertFinded = await sut.execute("ca9dee90-2603-4cd7-a254-37528c4ca53b", "81dd58d3-6ec5-489e-b698-6f802bb4578d")

        expect(alertFinded).toBe(null)
    })

    it("Should be able to throw error if alertId is empty", async () => {
        const sut = makeFindAlertByIdService()

        let ocurredError = false
        try{
            await sut.execute("", "81dd58d3-6ec5-489e-b698-6f802bb4578d")
        }catch(error: Error|any){
            ocurredError = true
            expect(error.name).toBe("InvalidParametersError")
        }

        expect(ocurredError).toBeTruthy()
    })

    it("Should be able to throw error if UserId is empty", async () => {
        const sut = makeFindAlertByIdService()

        let ocurredError = false
        try{
            await sut.execute("ca9dee90-2603-4cd7-a254-37528c4ca53b", "")
        }catch(error: Error|any){
            ocurredError = true
            expect(error.name).toBe("InvalidParametersError")
        }

        expect(ocurredError).toBeTruthy()
    })
})
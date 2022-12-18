import { makeDeleteAlertService } from "../factories/delete-alert-service"

describe("DeleteAlertService", () => {
    it("Should be able to delete alert", async () => {
        const sut = makeDeleteAlertService()

        const res = await sut.execute("ca9dee90-2603-4cd7-a254-37528c4ca53b", "d0993234-7738-4488-a91a-021ba6a3f1ae")

        expect(res).toBe(true)
    })

    it("Should be able to throw error if try delete alert not found", async () => {
        const sut = makeDeleteAlertService()

        expect(async () => {
            const res = await sut.execute("ca129dee90-123-4cd7-123-37528c4ca53b", "d0993234-7738-4488-a91a-021ba6a3f1ae")
        }).rejects.toThrow('alertId not found')
    })

    it("Should be able to throw error if using alertId empty", async () => {
        const sut = makeDeleteAlertService()

        expect(async () => {
            const res = await sut.execute("", "d0993234-7738-4488-a91a-021ba6a3f1ae")
        }).rejects.toThrowError('id cannot be empty;')
    })
})
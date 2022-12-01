import { Alert } from "../../src/domain/entities"
import { makeUpdateAlertService } from "../factories"
import { alertData } from "../../src/infra/data-source"

describe("UpdateAlertService", () => {
    it("Should be able to create a new alert", async () => {
        const sut = makeUpdateAlertService()

        const alert = Alert.create({targetValue: 5000, cryptocurrencyId: "7c9c1722-78ae-4816-8a51-707996805c34", userId: "d0993234-7738-4488-a91a-021ba6a3f1ae"}, alertData[0].id)
        console.log(alertData[0].id)
        const alertUpdated = await sut.execute(alert)

        expect(alert.id).toBe(alertUpdated.id)
        expect(alert.props.targetValue).toBe(5000)
    })

    it("Should be able to throw error if alertId is empty", async () => {
        const sut = makeUpdateAlertService()

        const alert = Alert.create({targetValue: 5000, cryptocurrencyId: "7c9c1722-78ae-4816-8a51-707996805c34", userId: "d0993234-7738-4488-a91a-021ba6a3f1ae"}, "")

        let ocurredError = false
        try{
            const alertUpdated = await sut.execute(alert)
        }catch(error: Error|any){
            ocurredError = true
            expect(error.name).toBe("InvalidParametersError")
            expect(error.message).toContain("id cannot be empty")
        }

        expect(ocurredError).toBe(true)
    })

    it("Should be able to throw error if alertId not found", async () => {
        const sut = makeUpdateAlertService()

        const alert = Alert.create({targetValue: 5000, cryptocurrencyId: "7c9c1722-78ae-4816-8a51-707996805c34", userId: "d0993234-7738-4488-a91a-021ba6a3f1ae"}, "dafsdafddsrafsdrsdfads")

        let ocurredError = false
        try{
            const alertUpdated = await sut.execute(alert)
        }catch(error: Error|any){
            ocurredError = true
            expect(error.name).toBe("RecordNotFoundError")
            expect(error.message).toContain("alertId not found")
        }

        expect(ocurredError).toBe(true)
    })

    it("Should be able to throw error if cryptocurrencyId not found", async () => {
        const sut = makeUpdateAlertService()

        const alert = Alert.create({targetValue: 35000, cryptocurrencyId: "sgdf64sdf6g4s9gdfdf6gs65g4s6df9", userId: "d0993234-7738-4488-a91a-021ba6a3f1ae"}, "ca9dee90-2603-4cd7-a254-37528c4ca53b")

        let ocurredError = false
        try{
            const alertUpdated = await sut.execute(alert)
        }catch(error: Error|any){
            ocurredError = true
            expect(error.name).toBe("RecordNotFoundError")
            expect(error.message).toContain("cryptocurrencyId not found")
        }

        expect(ocurredError).toBe(true)
    })

    it("Should be able to throw error if userId not found", async () => {
        const sut = makeUpdateAlertService()

        const alert = Alert.create({targetValue: 35000, cryptocurrencyId: "7c9c1722-78ae-4816-8a51-707996805c34", userId: "adafdfa564afsd4899a65a4sdf65da"}, "ca9dee90-2603-4cd7-a254-37528c4ca53b")

        let ocurredError = false
        try{
            const alertUpdated = await sut.execute(alert)
        }catch(error: Error|any){
            ocurredError = true
            expect(error.name).toBe("RecordNotFoundError")
            expect(error.message).toContain("userId not found")
        }

        expect(ocurredError).toBe(true)
    })
})
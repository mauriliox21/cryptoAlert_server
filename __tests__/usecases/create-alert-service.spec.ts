import { Alert } from "../../src/domain/entities"
import { makeCreateAlertService } from "../factories"
import { faker } from "@faker-js/faker"

describe("CreateAlertService", () => {
    it("Should be able to create a new alert", async () => {
        const sut = makeCreateAlertService()

        const newAlert = Alert.create({targetValue: 20000, cryptocurrencyId: "7c9c1722-78ae-4816-8a51-707996805c34", userId: "d0993234-7738-4488-a91a-021ba6a3f1ae"})

        const alertCreated = await sut.execute(newAlert)

        expect(alertCreated).toHaveProperty("id")
        expect(alertCreated.props.targetValue).toBe(20000)

    })

    it("Should be able to throw error when use invalid data", async () => {
        const sut = makeCreateAlertService()

        const newAlert = Alert.create({targetValue: 20000, cryptocurrencyId: "", userId: ""})
        
        let ocurredError = false
        try{
            const alertCreated = await sut.execute(newAlert)
        }catch(error: Error|any){
            ocurredError = true
            expect(error.name).toBe("InvalidParametersError")
        }

        expect(ocurredError).toBe(true)
    })

    it("Should be able to throw error if userId not found in system", async () => {
        const sut = makeCreateAlertService()

        const newAlert = Alert.create({targetValue: 20000, cryptocurrencyId: "7c9c1722-78ae-4816-8a51-707996805c34", userId: "fsdadfad178a1865f6asd7"})

        let ocurredError = false
        try{
            const alertCreated = await sut.execute(newAlert)
        }catch(error: Error|any){
            ocurredError = true
            expect(error.name).toBe("RecordNotFoundError")
        }

        expect(ocurredError).toBe(true)
    })

    it("Should be able to throw error if cryptocurrencyId not found in system", async () => {
        const sut = makeCreateAlertService()

        const newAlert = Alert.create({targetValue: 20000, cryptocurrencyId: "456afdd65af48adf66", userId: "d0993234-7738-4488-a91a-021ba6a3f1ae"})

        let ocurredError = false
        try{
            const alertCreated = await sut.execute(newAlert)
        }catch(error: Error|any){
            ocurredError = true
            expect(error.name).toBe("RecordNotFoundError")
        }

        expect(ocurredError).toBe(true)
    })
})
import { Alert } from "../../src/domain/entities"
import { makeCreateAlertService } from "../factories"
import { faker } from "@faker-js/faker"

describe("CreateAlertService", () => {
    it("Should be able to create a new alert", async () => {
        const sut = makeCreateAlertService()

        const newAlert = Alert.create({targetValue: 20000, cryptocurrencyId: faker.datatype.uuid(), userId: faker.datatype.uuid()})

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
        }

        expect(ocurredError).toBe(true)
    })
})
import { Alert } from "../../src/domain/entities";
import { ValidationAlertZod } from "../../src/domain/validations/implementation"

describe("ValidationAlertZod", () => {
    it("Should be able to not returns error message if the validation is successful", () => {
        const sut = new ValidationAlertZod();

        const createdAlert = Alert.create({targetValue: 20000, cryptocurrencyId: "f5sd64fd5f4s6fsd46fsd6fs", userId: "65rwer65rwe48rw9asa7z98fc"});
        
        expect(() => {
            sut.validateCreation(createdAlert);
        }).not.toThrowError()
    })

    it("Should be able to returns error message if cryptocurrencyId is empty", () => {
        const sut = new ValidationAlertZod();

        const createdAlert = Alert.create({targetValue: 20000, cryptocurrencyId: "", userId: "65rwer65rwe48rw9asa7z98fc"});

        try{
            sut.validateCreation(createdAlert)
        }catch(error: Error|any){
            expect(error.name).toBe("InvalidParametersError")
            expect(error.message).toContain("cryptocurrencyId")
        }
    })

    it("Should be able to returns error message if userId is empty", () => {
        const sut = new ValidationAlertZod();

        const createdAlert = Alert.create({targetValue: 20000, cryptocurrencyId: "f5sd64fd5f4s6fsd46fsd6fs", userId: ""});

        try{
            sut.validateCreation(createdAlert)
        }catch(error: Error|any){
            expect(error.name).toBe("InvalidParametersError")
            expect(error.message).toContain("userId")
        }
    })

    it("Should be able to returns error message if cryptocurrencyId and userId are empty", () => {
        const sut = new ValidationAlertZod();

        const createdAlert = Alert.create({targetValue: 20000, cryptocurrencyId: "", userId: ""});

        try{
            sut.validateCreation(createdAlert)
        }catch(error: Error|any){
            expect(error.name).toBe("InvalidParametersError")
            expect(error.message).toContain("cryptocurrencyId")
            expect(error.message).toContain("userId")
        }
    })

})
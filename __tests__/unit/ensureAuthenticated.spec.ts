import { sign } from "jsonwebtoken"
import { userData } from "../../src/infra/data-source/local-user"
import { EnsureAutheticatedMiddleware } from "../../src/presentation/middlewares/ensure-authenticated"

describe("EnsureAuthentication", () => {
    it("Should be able to not throw error if validation successful", () => {
       const token = sign({}, process.env.PRIVATE_KEY_JWT ?? "", {
            subject: userData[0].id,
            expiresIn: "2s"
        })
        
        expect(() => {
            EnsureAutheticatedMiddleware(`Bearer ${token}`)
        }).not.toThrowError()
    })

    it("Should be able to throw error if validation not successful", () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjkxNDI3NjAsImV4cCI6MTY2OTE0Mjc2Miwic3ViIjoiMzU3MTk3OTMtYzUxZC00ZDFlLTlhODUtMDA5MmZkMTQ0ZDRkIn0.qo4mFhHDKmDDiwJ6KbpQ4pS4cW2FiwKQyD7PLhj3doE"
        let ocurredError = false
        try{
            EnsureAutheticatedMiddleware(`Bearer ${token}`)
        }catch(error: Error|any){
            expect(error.name).toBe("VerifyingAuthenticationError")
            ocurredError = true
        }
        expect(ocurredError).toBe(true)
    })

    it("Should be able to throw error if token is missing", () => {
        let ocurredError = false
        try{
            EnsureAutheticatedMiddleware()
        }catch(error: Error|any){
            expect(error.name).toBe("VerifyingAuthenticationError")
            ocurredError = true
        }
        expect(ocurredError).toBe(true)
    })
})
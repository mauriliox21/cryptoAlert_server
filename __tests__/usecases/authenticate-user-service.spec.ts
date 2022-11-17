import { makeAuthenticateUser } from "../factories"
import {verify} from "jsonwebtoken"

describe("AuthenticateUserService", () => {
    it("Should be able to returns error message if user not exists", async () => {
        const sut = makeAuthenticateUser();

        try{
            const res = await sut.execute("test@test.test.com", "midler123")
        }catch(error: Error|any){
            expect(error.name).toBe("AuthenticationFailedError")
        }
    })

    it("Should be able to returns error message if password is incorrect", async () => {
        const sut = makeAuthenticateUser();

        try{
            const res = await sut.execute("user.test.authentication@test.com", "midler123")
        }catch(error: Error|any){
            expect(error.name).toBe("AuthenticationFailedError")
        }
    })

    it("Should be able to returns object with valid token JWT", async () => {
        const sut = makeAuthenticateUser();

        const res = await sut.execute("user.test.authentication@test.com", "alaba321");

        expect(res).toHaveProperty("token")
        verify(res["token"], process.env.PRIVATE_KEY_JWT ?? "")
    })
})
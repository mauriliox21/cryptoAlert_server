import { User } from "../../../src/domain/entities"
import { makeCreateUserService } from "../../factories/create-user-service"
import { ZodError } from "zod"

describe("CreateUserService", () => {
    it("Should be able to create a new user", async () => {
        const sut = makeCreateUserService();

        const createdUser = User.create({name: "new user name", email: "new.user@gmail.com", password: "user1234"});

        const res = await sut.execute(createdUser);

        expect(res).toHaveProperty("_id");
        expect(res.props.name).toBe(createdUser.props.name);
    })

    it("Should not be able to create user with empty name", async () => {
        const sut = makeCreateUserService();

        const createdUser = User.create({name: "", email: "new.user@gmail.com", password: "user1234"});

        try{
            const res = await sut.execute(createdUser);
        }catch(erro: Error|any){
            
            expect(erro.name).toBe("InvalidParametersError")
        }
    })
})

import { User } from "../../src/domain/entities";
import { ValidationUserZod } from "../../src/domain/validations/implementation"

describe("ValidationUserZod", () => {
    it("Should be able to not returns error message if the validation is successful", () => {
        const sut = new ValidationUserZod();

        const createdUser = User.create({name: "new user name", email: "new.user@gmail.com", password: "user1234"});

        let errorOccurred = false;
        try{
            sut.validateCreation(createdUser);
        }catch (error: Error|any){
            errorOccurred = true;
        }

        expect(errorOccurred).toBe(false);
    })

    //--begin validate name--//
    it("Should be able to returns error message if name length is less than 3", () => {
        const sut = new ValidationUserZod();

        const createdUser = User.create({name: "", email: "new.user@gmail.com", password: "user1234"});

        try{
            sut.validateCreation(createdUser);
        }catch (error: Error|any){
            expect(error.message).toContain("Name must be 3 or more characters long");
        }
    })

    it("Should be able to not returns error message if name length is equal 3", () => {
        const sut = new ValidationUserZod();

        const createdUser = User.create({name: "new", email: "new.user@gmail.com", password: "user1234"});

        let errorOccurred = false;
        try{
            sut.validateCreation(createdUser);
        }catch (error: Error|any){
            errorOccurred = true;
        }

        expect(errorOccurred).toBe(false);
    })

    it("Should be able to returns error message if name length is greater than 100", () => {
        const sut = new ValidationUserZod();

        const createdUser = User.create({name: "new user name with text very long for than length be greater than 100, text aditional for name be greater", email: "new.user@gmail.com", password: "user1234"});

        try{
            sut.validateCreation(createdUser);
        }catch (error: Error|any){
            expect(error.message).toContain("Name must be 100 or fewer characters long");
        }
    })

    it("Should be able to not returns error message if name length is equal 100", () => {
        const sut = new ValidationUserZod();

        const createdUser = User.create({name: "new user name with text very long for than length be equal 100, text aditional for name be very long", email: "new.user@gmail.com", password: "user1234"});

        let errorOccurred = false;
        try{
            sut.validateCreation(createdUser);
        }catch (error: Error|any){
            errorOccurred = true;
        }

        expect(errorOccurred).toBe(false);
    })
    //--end validate name--//

    //--begin validate email--//
    it("Should be able to returns error message if email is empty", () => {
        const sut = new ValidationUserZod();

        const createdUser = User.create({name: "new user name", email: "", password: "user1234"});

        try{
            sut.validateCreation(createdUser);
        }catch (error: Error|any){
            expect(error.message).toContain("Invalid e-mail");
        }
    })

    it("Should be able to returns error message if email is invalid", () => {
        const sut = new ValidationUserZod();

        const createdUser = User.create({name: "new user name", email: "newgmailcom", password: "user1234"});

        try{
            sut.validateCreation(createdUser);
        }catch (error: Error|any){
            expect(error.message).toContain("Invalid e-mail");
        }
    })
    //--end validate email--//

    it("Should be able to not returns error message if the validation is successful", () => {
        const sut = new ValidationUserZod();

        const createdUser = User.create({name: "new user name", email: "new.user@gmail.com", password: "user1234"});

        let errorOccurred = false;
        try{
            sut.validateCreation(createdUser);
        }catch (error: Error|any){
            errorOccurred = true;
        }

        expect(errorOccurred).toBe(false);
    })

    //--begin validate password--//
    it("Should be able to returns error message if password length is less than 8", () => {
        const sut = new ValidationUserZod();

        const createdUser = User.create({name: "new user name", email: "new.user@gmail.com", password: ""});

        try{
            sut.validateCreation(createdUser);
        }catch (error: Error|any){
            expect(error.message).toContain("Password must be 8 or more characters long");
        }
    })

    it("Should be able to not returns error message if password length is equal 8", () => {
        const sut = new ValidationUserZod();

        const createdUser = User.create({name: "new user name", email: "new.user@gmail.com", password: "user1234"});

        let errorOccurred = false;
        try{
            sut.validateCreation(createdUser);
        }catch (error: Error|any){
            errorOccurred = true;
        }

        expect(errorOccurred).toBe(false);
    })

    it("Should be able to returns error message if password length is greater than 30", () => {
        const sut = new ValidationUserZod();

        const createdUser = User.create({name: "new user name", email: "new.user@gmail.com", password: "gRn681axw8QcXpaeBihUfkzL8fbemb2"});

        try{
            sut.validateCreation(createdUser);
        }catch (error: Error|any){
            expect(error.message).toContain("Password must be 30 or fewer characters long");
        }
    })

    it("Should be able to not returns error message if password length is greater than 30", () => {
        const sut = new ValidationUserZod();

        const createdUser = User.create({name: "new user name", email: "new.user@gmail.com", password: "gRn681axw8QcXpaeBihUfkzL8fbemb"});

        let errorOccurred = false;
        try{
            sut.validateCreation(createdUser);
        }catch (error: Error|any){
            errorOccurred = true;
        }

        expect(errorOccurred).toBe(false);
    })
    //--end validate password--//
})
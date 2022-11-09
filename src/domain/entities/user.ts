import { Entity } from "./entity"

interface IUserProps {
    name: string
    email: string
    password: string
}

export class User extends Entity<IUserProps> {
    constructor(props: IUserProps, id?: string){
        super(props, id);
    }

    static create(props: IUserProps, id?: string){
        return new User(props, id)
    }
}
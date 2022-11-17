import { User } from "../../domain/entities";

export class UserViewModel {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public password: string
    ){}

    static map(entity: User): UserViewModel {
        return new UserViewModel(
            entity.id,
            entity.props.name,
            entity.props.email,
            entity.props.password
        )
    }
}
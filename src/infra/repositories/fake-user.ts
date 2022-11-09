import { UserModel} from "../../data/models"
import { UserRepository } from "../../data/contracts"
import { userData } from "../data-source"

export class FakeUserRepository implements UserRepository{
    async create(data: UserModel): Promise<UserModel>{
        userData.push({
            id: data.id, 
            name: data.props.name,
            email: data.props.email,
            password: data.props.password
        });

        return data
    }
}
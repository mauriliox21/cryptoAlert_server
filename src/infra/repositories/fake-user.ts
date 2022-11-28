import { UserModel} from "../../data/models"
import { UserRepository } from "../../data/contracts"
import { userData } from "../data-source"
import { User } from "../../domain/entities";
import { strict } from "assert";

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

    async findByEmail(email: string): Promise<UserModel | null>{
        const userFinded = userData.find(user => user.email == email)

        if(!userFinded){
            return null
        }
        else{
            return new User({name: userFinded.name, email: userFinded.email, password: userFinded.password}, userFinded.id)
        }
    }

    async findById (id: string): Promise<User|null>{
        const userFinded = userData.find(user => user.id == id)

        if(!userFinded){
            return null
        }
        else{
            return new User({name: userFinded.name, email: userFinded.email, password: userFinded.password}, userFinded.id)
        }
    }
}
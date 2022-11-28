import { UserModel } from "../models"

export interface UserRepository {
    create: (data: UserModel) => Promise<UserModel>
    findByEmail: (email: string) => Promise<UserModel|null>
    findById: (id: string) => Promise<UserModel|null>
}
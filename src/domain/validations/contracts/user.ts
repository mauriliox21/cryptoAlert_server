import { User } from "../../entities";

export interface ValidationUser {
    validateCreation: (data: User) => void;
}
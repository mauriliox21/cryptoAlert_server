import { User } from "domain/entities";

export interface ValidationUser {
    validate: (data: User) => void;
}
import { Alert } from "../../entities"

export interface ValidationAlert {
    validateCreation: (data: Alert) => void;
    validateUpdate: (data: Alert) => void;
    validateFindById: (data: {id: string, userId: string}) => void;
}
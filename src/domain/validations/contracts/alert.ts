import { Alert } from "../../entities"

export interface ValidationAlert {
    validateCreation: (data: Alert) => void;
    validateUpdate: (data: Alert) => void;
    validateFindByIdOrDelete: (data: {id: string, userId: string}) => void;
}
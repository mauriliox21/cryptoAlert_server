import { Alert } from "../../entities";

export interface ValidationAlert {
    validateCreation: (data: Alert) => void;
}
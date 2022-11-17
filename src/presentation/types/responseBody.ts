import { TypeResponse } from ".";

export type ResponseBody<T=any> = {
    typeResponse: TypeResponse
    message?: string
    data?: T
}
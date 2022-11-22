import { ResponseBody, TypeResponse } from "../types"

export class HttpResponse<T=any> {
    constructor(public statusCode: number, public responseBody: ResponseBody<T>){}
    
    static businessError(statusCode: number, message: string): HttpResponse{
        return {statusCode: statusCode, responseBody: {typeResponse: TypeResponse.error, message: message}}
    }

    static created(data: any, message: string): HttpResponse {
        return {statusCode: 201, responseBody: {typeResponse: TypeResponse.success, message: message, data: data}}
    }

    static error(message: string): HttpResponse{
        return {statusCode: 500, responseBody: {typeResponse: TypeResponse.error, message: message}}
    }

    static ok(data: any, message?: string): HttpResponse {
        return {statusCode: 200, responseBody: {typeResponse: TypeResponse.success, message: message, data: data}}
    }

    static verifyTypeError(error: Error|any): HttpResponse{
        if(error.name != "Error")
            return HttpResponse.businessError(400, error.message)
        else
            return HttpResponse.error("Internal Server Error")
    }
}
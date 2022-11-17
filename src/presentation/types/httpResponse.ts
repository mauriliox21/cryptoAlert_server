import { ResponseBody } from "../types"

export type HttpResponse<T=any> = {
    statusCode: number
    responseBody: ResponseBody<T>
}
import { HttpRequest, HttpResponse } from "../types";

export interface Controller {
    execute: (request: HttpRequest) => Promise<HttpResponse>
}
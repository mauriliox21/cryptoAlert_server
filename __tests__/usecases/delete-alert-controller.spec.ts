import { generateJWTToken } from '../../src/domain/providers'
import {HttpRequest} from '../../src/presentation/types'
import { makeDeleteAlertController } from '../factories/delete-alert-controller'

describe('DeleteAlertController', () => {
    let authenticationToken: string
    beforeAll(() => {
        authenticationToken = generateJWTToken("d0993234-7738-4488-a91a-021ba6a3f1ae")
    })

    it('Should be able to returns status code success when deletes successful', async () => {
        const sut = makeDeleteAlertController();

        const req: HttpRequest = {
            header: {authorization: `bearer ${authenticationToken}`},
            params: {id: "ca9dee90-2603-4cd7-a254-37528c4ca53b"}
        };

        const res = await sut.execute(req);

        expect(res.statusCode).toBe(200)
    })

    it('Should be able to returns status code and message error when deletes not successful', async () => {
        const sut = makeDeleteAlertController();

        const req: HttpRequest = {
            header: {authorization: `bearer ${authenticationToken}`},
            params: {id: "ca9dee90-2603-4cd7-a254-3528c4ca53b"}
        };

        const res = await sut.execute(req);

        expect(res.statusCode).toBe(400)
    })
})
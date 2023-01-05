import { makeFindManyAlertsService } from "../factories"

describe('FindManyAlertsService', () => {

    it('Should be able to returns a array with alerts', async () =>{
        
        const sut = makeFindManyAlertsService();
    
        const res = await sut.execute("d0993234-7738-4488-a91a-021ba6a3f1ae");
    
        expect(res.length).toBeGreaterThan(0);
    });

    it('Should be able to returns a empty array if userId not exists in system', async () => {
        const sut = makeFindManyAlertsService();
    
        const res = await sut.execute("d0993234-dsff-448fsd8-a91a-021bffa6a3f1ae");
    
        expect(res.length).toBe(0);
    });

    it('Should be able to returns a empty array if userId is empty', async () => {
        const sut = makeFindManyAlertsService();
    
        const res = await sut.execute("");
    
        expect(res.length).toBe(0);
    });
})
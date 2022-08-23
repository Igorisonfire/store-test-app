import {generateImgUrl} from "./generate-img-url";

//test example
describe('Generate Img Url', () => {

    it('1"', () => {
        const result = generateImgUrl('test-path', 1200)

        expect(result).toBe(`https://image.tmdb.org/t/p/w1200test-path`)
    })
});
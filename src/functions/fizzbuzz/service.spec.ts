import faker from 'faker'
import { isFizz, isBuzz } from './helpers'
import { FizzBuzzService } from './service'

jest.mock('./helpers', () => ({
  isFizz: jest.fn(),
  isBuzz: jest.fn(),
}))

const makeSut = (): FizzBuzzService => new FizzBuzzService()

const mockRequest = (): FizzBuzzService.Request => ({
  number: faker.datatype.number()
})

describe('FizzBuzz Service', () => {
  let sut: FizzBuzzService;

  beforeEach(() => {
    sut = makeSut()
  });

  describe('exec()', () => {
    it('should call isFizz() with correct params', async () => {
      const request = mockRequest();
      sut.exec(request);
      expect(isFizz).toHaveBeenCalledWith(request.number);
    });

    it('should call isBuzz() with correct params if isFizz() returns true', async () => {
      const request = mockRequest();
      (isFizz as jest.Mock).mockReturnValueOnce(true);
      sut.exec(request);
      expect(isBuzz).toHaveBeenCalledWith(request.number);
    });

    it('should return "fizzbuzz" if both isFizz() and isBuzz() return true', async () => {
      (isFizz as jest.Mock).mockReturnValueOnce(true);
      (isBuzz as jest.Mock).mockReturnValueOnce(true);
      const response = sut.exec(mockRequest());
      expect(response).toEqual({ result: 'fizzbuzz' });
    });

    it('should return "fizz" if isFizz() returns true and isBuzz() returns false', async () => {
      (isFizz as jest.Mock).mockReturnValueOnce(true);
      (isBuzz as jest.Mock).mockReturnValueOnce(false);
      const response = sut.exec(mockRequest());
      expect(response).toEqual({ result: 'fizz' });
    });

    it('should call isBuzz() with correct params if isFizz() returns false', async () => {
      const request = mockRequest();
      (isFizz as jest.Mock).mockReturnValueOnce(false)
      sut.exec(request);
      expect(isBuzz).toHaveBeenCalledWith(request.number);
    });

    it('should return "buzz" if isBuzz() returns true and isFizz() returns false', async () => {
      (isFizz as jest.Mock).mockReturnValueOnce(false);
      (isBuzz as jest.Mock).mockReturnValueOnce(true);
      const response = sut.exec(mockRequest());
      expect(response).toEqual({ result: 'buzz' });
    });

    it('should return the number from request if both isFizz() and isBuzz() return false', async () => {
      const request = mockRequest();
      (isFizz as jest.Mock).mockReturnValueOnce(false);
      (isBuzz as jest.Mock).mockReturnValueOnce(false);
      const response = sut.exec(request);
      expect(response).toEqual({ result: request.number });
    });
  });
});
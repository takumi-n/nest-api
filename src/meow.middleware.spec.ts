import { MeowMiddleware } from './meow.middleware';

describe('MeowMiddleware', () => {
  it('should be defined', () => {
    expect(new MeowMiddleware()).toBeDefined();
  });
});

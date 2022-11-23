import { Test, TestingModule } from '@nestjs/testing';
import { AuthService1 } from './auth.service';

describe('AuthService', () => {
  let service: AuthService1;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService1],
    }).compile();

    service = module.get<AuthService1>(AuthService1);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

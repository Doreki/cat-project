import { PickType } from '@nestjs/swagger';
import { Cat } from 'src/cats/cats.schema';

export class LoginRequestDto1 extends PickType(Cat, [
  'email',
  'password',
] as const) {}

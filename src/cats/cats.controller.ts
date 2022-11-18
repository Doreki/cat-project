import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Delete,
  HttpException,
  UseFilters,
  Param,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { HttpExceptionFilter } from '../common/exceptions/http-exception.filter';
import { PositiveIntPipe } from 'src/common/pipes/positiveInt.pipe';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptor';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    throw new HttpException('api is broken', 401);
    return { cats: 'get all cat api' };
  }
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe, PositiveIntPipe) param: number) {
    console.log(param);
    console.log(typeof param);
    return 'one Cat';
  }

  @Post('')
  createCat() {
    return 'create Cat';
  }

  @Put(':id')
  updateCat() {
    return 'update Cat';
  }

  @Delete(':id')
  deleteCat() {
    return 'deleteCat';
  }
}

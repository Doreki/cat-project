import { Controller, Get, Post, Put, Patch, Delete } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCat() {
    return 'all cat';
  }
  @Get(':id')
  getOneCat() {
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

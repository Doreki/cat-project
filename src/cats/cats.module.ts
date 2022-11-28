import { Module, forwardRef } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { CatsController } from './cats.controller';
import { CatsRepository } from './cats.repository';
import { Cat, _CatSchema } from './cats.schema';
import { CatsService } from './cats.service';
import { CommentsSchema } from 'src/comments/comments.schema';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    MulterModule.register({
      dest: './upload',
    }),
    MongooseModule.forFeature([
      { name: Cat.name, schema: _CatSchema },
      { name: Comment.name, schema: CommentsSchema },
    ]),
    forwardRef(() => AuthModule),
  ],
  controllers: [CatsController],
  providers: [CatsService, CatsRepository],
  exports: [CatsService, CatsRepository],
})
export class CatsModule {}

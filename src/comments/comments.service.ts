import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CatsRepository } from 'src/cats/cats.repository';
import { Comment } from './comments.schema';
import { CommentsCreateDto } from './dtos/comments.create.dto';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private readonly commentsModel: Model<Comment>,
    private readonly catsRepository: CatsRepository,
  ) {}
  async getAllComments() {
    return 'hello world';
  }

  async createComment(id: string, comments: CommentsCreateDto) {
    return 'hello world';
  }

  async plusLike(id: string) {}
}

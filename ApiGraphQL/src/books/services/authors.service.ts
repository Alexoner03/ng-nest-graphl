import { Injectable } from '@nestjs/common';
import { Author } from '../entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthorCreateDTO } from '../dtos/author-create-d-t.o';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private readonly authorRepository: Repository<Author>,
  ) {}

  listAll() {
    return this.authorRepository.find({ relations: ['books'] });
  }

  findOne(id: number) {
    return this.authorRepository.findOne(id);
  }

  create(author: AuthorCreateDTO) {
    return this.authorRepository.save(author);
  }
}

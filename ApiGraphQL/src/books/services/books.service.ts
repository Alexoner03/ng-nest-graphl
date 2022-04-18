import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Book } from '../entities/book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BookCreateDTO } from '../dtos/book-create-d-t.o';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async listAll() {
    return await this.bookRepository.find({ relations: ['author'] });
  }

  findOne(id: number) {
    return this.bookRepository.findOne(id, { relations: ['author'] });
  }

  async create(bookCreateDto: BookCreateDTO) {
    const book = this.bookRepository.create(bookCreateDto);
    return this.bookRepository.save(book);
  }

  async findByAuthorId(id: number) {
    return this.bookRepository.find({
      relations: ['author'],
      where: { author: { id } },
    });
  }
}

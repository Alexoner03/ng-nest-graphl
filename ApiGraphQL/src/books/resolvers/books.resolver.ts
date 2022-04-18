import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Book } from '../entities/book.entity';
import { BooksService } from '../services/books.service';
import { BookCreateDTO } from '../dtos/book-create-d-t.o';

@Resolver((of) => Book)
export class BooksResolver {
  constructor(private readonly booksService: BooksService) {}

  @Query((returns) => [Book])
  async listAllBooks() {
    return await this.booksService.listAll();
  }

  @Mutation((returns) => Book)
  async createBook(@Args('book') book: BookCreateDTO) {
    return this.booksService.create(book);
  }
}

import { Module } from '@nestjs/common';
import { BooksResolver } from './resolvers/books.resolver';
import { BooksService } from './services/books.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/author.entity';
import { Book } from './entities/book.entity';
import { AuthorsService } from './services/authors.service';
import { AuthorsResolver } from './resolvers/authors.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Author, Book])],
  providers: [BooksResolver, BooksService, AuthorsService, AuthorsResolver],
})
export class BooksModule {}

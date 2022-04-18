import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Author } from '../entities/author.entity';
import { AuthorsService } from '../services/authors.service';
import { AuthorCreateDTO } from '../dtos/author-create-d-t.o';

@Resolver((of) => Author)
export class AuthorsResolver {
  constructor(private readonly authorService: AuthorsService) {}

  @Query((returns) => [Author])
  async listAllAuthors() {
    return this.authorService.listAll();
  }

  @Mutation((returns) => Author)
  async createAuthor(@Args('author') author: AuthorCreateDTO) {
    return this.authorService.create(author);
  }
}

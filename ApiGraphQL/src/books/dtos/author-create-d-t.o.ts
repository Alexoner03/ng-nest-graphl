import { IsArray, IsOptional, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Book } from '../entities/book.entity';

@InputType()
class BookAuthorCreateDTO {
  @Field()
  title: string;
}

@InputType()
export class AuthorCreateDTO {
  @Field()
  @IsString()
  readonly name: string;

  @Field((type) => [BookAuthorCreateDTO], { nullable: true })
  @IsArray()
  @IsOptional()
  readonly books?: Partial<Book>[];
}

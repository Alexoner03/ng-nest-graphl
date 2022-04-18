import { IsObject, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { Author } from '../entities/author.entity';

@InputType()
export class AuthorBookCreateDTO {
  @Field()
  id: number;
}

@InputType()
export class BookCreateDTO {
  @Field()
  @IsString()
  readonly title: string;

  @Field((type) => AuthorBookCreateDTO)
  @IsObject()
  readonly author: Partial<Author>;
}

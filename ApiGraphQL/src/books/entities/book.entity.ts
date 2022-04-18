import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  JoinColumn,
} from 'typeorm';
import { Field, ObjectType } from '@nestjs/graphql';
import { Author } from './author.entity';

@Entity()
@ObjectType()
export class Book {
  @Field()
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Field()
  @Column()
  title: string;

  @Field((type) => Author)
  @ManyToOne((type) => Author, (author) => author.books)
  author: Author;
}

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  books: Array<Book>;
  id: Scalars['Float'];
  name: Scalars['String'];
};

export type AuthorBookCreateDto = {
  id: Scalars['Float'];
};

export type AuthorCreateDto = {
  books?: InputMaybe<Array<BookAuthorCreateDto>>;
  name: Scalars['String'];
};

export type Book = {
  __typename?: 'Book';
  author: Author;
  id: Scalars['Float'];
  title: Scalars['String'];
};

export type BookAuthorCreateDto = {
  title: Scalars['String'];
};

export type BookCreateDto = {
  author: AuthorBookCreateDto;
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAuthor: Author;
  createBook: Book;
};


export type MutationCreateAuthorArgs = {
  author: AuthorCreateDto;
};


export type MutationCreateBookArgs = {
  book: BookCreateDto;
};

export type Query = {
  __typename?: 'Query';
  listAllAuthors: Array<Author>;
  listAllBooks: Array<Book>;
};

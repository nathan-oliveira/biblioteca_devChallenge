create schema bibliotecaDevChallenge;

create table bibliotecaDevChallenge.biblioteca (
	id serial not null,
	titulo varchar(255) not null,
	editora varchar(255) not null,
	foto text not null,
	autores TEXT[] not null,
  constraint pk_idbiblioteca primary key(id)
);

import { IEditorial } from "./IEditorial";

export interface ILibrosCommand {
  isbn?:        number;
  editorialId: number;
  autorId:     number;
  titulo:      string;
  sinopsis:    string;
  n_paginas:   string;
}

export interface ILibros {
  isbn:      number;
  titulo:    string;
  sinopsis:  string;
  n_paginas: string;
  autores:   any[];
  editorial: IEditorial;
  
}
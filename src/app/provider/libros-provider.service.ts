import { Injectable } from '@angular/core';
import { ILibrosCommand } from '../Models/Ilibros';
import { BaseRequestService } from '../utils/service/base-request.service';

@Injectable({
  providedIn: 'root'
})
export class LibrosProviderService {

  constructor(private Http: BaseRequestService) {}

  GetAll = (): Promise<ILibrosCommand> => this.Http.getPromise('Libros');
  Find = (id: number) => this.Http.get(`Libros/${id}`);
  Create = (data: any) => this.Http.post('Libros', data);
  Update = (id: number, data: any) => this.Http.put(`Libros/${id}`, data);
  Delete = (id: number) => this.Http.delete(`Libros/${id}`);

}

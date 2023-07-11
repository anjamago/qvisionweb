import { Injectable } from '@angular/core';
import {  IAuthorCommand } from '../Models/IAuthor';
import { BaseRequestService } from '../utils/service/base-request.service';

@Injectable({
  providedIn: 'root',
})
export class AutoresProviderService {
  constructor(private Http: BaseRequestService) {}

  GetAll = (): Promise<any> => this.Http.getPromise('Autores');
  GetAllSubribe = () => this.Http.get('Autores');
  Find = (id: number) => this.Http.get(`Autores/${id}`);
  Create = (data: IAuthorCommand) => this.Http.post('Autores', data);
  Update = (id: number, data: IAuthorCommand) => this.Http.put(`Autores/${id}`, data);
  Delete = (id: number) => this.Http.delete(`Autores/${id}`);
}

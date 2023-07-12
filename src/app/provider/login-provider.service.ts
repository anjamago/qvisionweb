import { Injectable } from '@angular/core';
import { BaseRequestService } from '../utils/service/base-request.service';

@Injectable({
  providedIn: 'root'
})
export class LoginProviderService {

  constructor(private Http: BaseRequestService) {}

  login = () => this.Http.post('Login/createToken', {
    "userName": "admin",
    "password": "qwe123"
  });


}

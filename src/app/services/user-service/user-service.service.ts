import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http-service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpService:HttpServiceService) { }
  loginApiCall(data:any){
    return this.httpService.postAPIcall('/user/login',data);
  }
  registerApiCall(data:any){
    return this.httpService.postAPIcall('/user/userSignUp',data);
  }
}

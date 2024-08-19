import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http-service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor(private httpService:HttpServiceService) { }
  access_token = localStorage.getItem('access_token');
  getAllNotesApiCall(endpoint: string){
    return this.httpService.getAPICall(
      `/notes/${endpoint}?acess_token=${this.access_token}`
    );
  }
}

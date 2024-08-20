import { Injectable } from '@angular/core';
import { HttpServiceService } from '../http-service/http-service.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  constructor(private httpService:HttpServiceService) { }
  access_token = localStorage.getItem('access_token');
  // baseUrl= 'https://fundoonotes.incubation.bridgelabz.com/api'
  getAllNotesApiCall(data:string){
    return this.httpService.getAPICall(
      `/notes/getNotesList?access_token=${this.access_token}`
    );
  }
  addNotesApiCall(url:any, data: any) {
    return this.httpService.postAPIcall(
      `${url}?access_token=${this.access_token}`,
      data
    );
  }
}

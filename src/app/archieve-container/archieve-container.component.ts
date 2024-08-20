import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../services/notes-service/notes-service.service';

@Component({
  selector: 'app-archieve-container',
  templateUrl: './archieve-container.component.html',
  styleUrls: ['./archieve-container.component.scss']
})
export class ArchieveContainerComponent implements OnInit {
  notesList:any=[];
  constructor(private notesService:NotesServiceService){}
  ngOnInit(): void {
    // this.notesService.getAllNotesApiCall('getArchieveNotesList').subscribe({
    //   next: (r: any) =>{
    //     this.notesList = r.data.data;
    //     console.log('result is: ',this.notesList);
    //   },
    //   error: (e)=>{},
    // });
  }

}

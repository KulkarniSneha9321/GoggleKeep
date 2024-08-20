import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from '../services/notes-service/notes-service.service';

@Component({
  selector: 'app-trash-container',
  templateUrl: './trash-container.component.html',
  styleUrls: ['./trash-container.component.scss']
})
export class TrashContainerComponent implements OnInit{
  notesList:any = [];
  constructor(private notesService: NotesServiceService){}

  ngOnInit(): void {
    this.notesService.getAllNotesApiCall('getTrashNotesList').subscribe({
      next: (r:any)=>{
        this.notesList=r.data.data;
        console.log('result is :',this.notesList);
      },
      error:(e)=>{},
    });
  }

}

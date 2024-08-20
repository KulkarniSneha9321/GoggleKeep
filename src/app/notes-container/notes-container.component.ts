import { Component,OnInit} from '@angular/core';
import { HttpServiceService } from '../services/http-service/http-service.service';
import { NotesServiceService } from '../services/notes-service/notes-service.service';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.scss']
})
export class NotesContainerComponent implements OnInit {
  notesList: any = [];

  constructor(private notesService: NotesServiceService) {}

  ngOnInit(): void {
    this.notesService.getAllNotesApiCall("getNotesList").subscribe({
      next: (r: any) => {
        this.notesList = r.data.data;
        console.log('result is: ', this.notesList);
      },
      error: (e) => {},
    });
  }
}
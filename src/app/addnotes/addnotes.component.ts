import { Component, OnInit } from '@angular/core';
import{IMG_ICON,BRUSH_ICON,TICK_ICON,PIN_ICON,UNDO_ICON,REDO_ICON} from'../../assets/svg.icons';
import { FormGroup,FormBuilder } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { NotesServiceService } from '../services/notes-service/notes-service.service';
import { add } from 'winston';
import { log } from 'winston';

@Component({
  selector: 'app-addnotes',
  templateUrl: './addnotes.component.html',
  styleUrls: ['./addnotes.component.scss']
})
export class AddnotesComponent implements OnInit {
  notesform!: FormGroup;
  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    private fb: FormBuilder,
    private notesService: NotesServiceService
  ) {
    iconRegistry.addSvgIconLiteral(
      'img-icon',
      sanitizer.bypassSecurityTrustHtml(IMG_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'brush-icon',
      sanitizer.bypassSecurityTrustHtml(BRUSH_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'tick-icon',
      sanitizer.bypassSecurityTrustHtml(TICK_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'pin-icon',
      sanitizer.bypassSecurityTrustHtml(PIN_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'undo-icon',
      sanitizer.bypassSecurityTrustHtml(UNDO_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'redo-icon',
      sanitizer.bypassSecurityTrustHtml(REDO_ICON)
    );
  }

  ngOnInit(): void {
    this.notesform = this.fb.group({
      Title: [''],
      description: [''],
    });
  }

  displayDiv: any = 'true';

  showCard() {
    this.displayDiv = 'false';
  }
  closeCard() {
    this.displayDiv = 'true';
    console.log(this.notesform.value);
    let formData = {
      title: this.notesform.value?.Title,
      description: this.notesform.value?.description,
    };
    this.notesService.addNotesApiCall('/notes/addNotes', formData).subscribe({
      next: (res) => {
        console.log(res);
        window.location.reload();
      },
      error: (error) => {
        console.log(error);
      },
    });
}

}
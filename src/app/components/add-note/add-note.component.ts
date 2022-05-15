import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  @Output() createNote: EventEmitter<Note> = new EventEmitter();
  noteForm = new FormGroup({
    title: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

  submitNote(): void {
    const newNote = {
      title: this.noteForm.value.title,
      completed: false,
    };
    this.createNote.emit(newNote);
  }

}

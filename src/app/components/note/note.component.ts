import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() note!: Note;
  @Output() deleteNote: EventEmitter<Note> = new EventEmitter();

  constructor(private service: NotesService) { }

  ngOnInit(): void {
  }

  setClasses() {
    let classes = {
      note: true,
      'is-complete': this.note.completed,
    };
    return classes;
  }

  onToggle(note: Note): void {
    note.completed = !note.completed;
    this.service.toggleCompleted(note).subscribe((note: Note) => {
      console.log(note);
    });
  }

  onDelete(note: Note): void {
    this.deleteNote.emit(note);
  }

}

import { Component, OnInit } from '@angular/core';
import { NotesService } from 'src/app/services/notes.service';
import { Note } from 'src/app/models/note.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(private service: NotesService) { }

  ngOnInit(): void {
    this.service.getNotes().subscribe((notes: Note[]) => {
      this.notes = notes;
1    });
  }

  createNote(note: Note): void {
    console.log('creating this note...');
    console.log(note);
    this.service.addNote(note).subscribe((note: Note) => {
      this.notes.push(note);
    })
  }

  deleteNote(note: Note): void {
    console.log('deleting this note...');
    console.log(note);
    this.notes = this.notes.filter(n => n.id !== note.id);
    this.service.deleteNote(note).subscribe(res => console.log(res));
  }
}

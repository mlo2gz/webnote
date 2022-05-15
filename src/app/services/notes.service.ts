import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from '../models/note.model';

const options = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  notesUrl: string = 'https://jsonplaceholder.typicode.com/todos';
  maxNotes: string = '?_limit=10';

  constructor(private http: HttpClient) { }

  getNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.notesUrl}${this.maxNotes}`);
  }

  addNote(note: Note): Observable<Note> {
    return this.http.post<Note>(this.notesUrl, note, options);
  }

  toggleCompleted(note: Note): Observable<any> {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http.put(url, note, options);
  }

  deleteNote(note: Note): Observable<any> {
    const url = `${this.notesUrl}/${note.id}`;
    return this.http.delete<Note>(url, options);
  }
}

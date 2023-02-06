import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPost } from '../models/post.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private http: HttpClient) {}

  getExtensionPost(): Observable<IPost[]> {
    return this.http.get<IPost[]>('http://localhost:3000/api/extension');
  }
  getExtensionPostRandom(): Observable<IPost[]> {
    return this.http.get<IPost[]>('http://localhost:3000/api/extension-random');
  }
}

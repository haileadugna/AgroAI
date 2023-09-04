import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  url = "http://localhost:3000/forum-post"

  constructor(private http: HttpClient) { }

  getPosts(){
    return this.http.get(`${this.url}`);
  }
}

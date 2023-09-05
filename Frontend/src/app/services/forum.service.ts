import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  url = "http://localhost:3000/api/v1/forum"

  constructor(private http: HttpClient) { }

  createPost(postData: any) {
    return this.http.post(`${this.url}/post`, postData);
  }

  // GET method to fetch all existing posts
  getPosts() {
    return this.http.get(`${this.url}/posts`);
  }
}

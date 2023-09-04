import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  url = "http://localhost:3000/api/v1/forum"

  constructor() { }

  getPosts(){
    return ["hello every body hello every body hello every body hello every body hello every body hello every body hello every body", "hello every body", "hello every body", "hello every body"];
  }
}

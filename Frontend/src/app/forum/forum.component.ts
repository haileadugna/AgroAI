import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  posts: string[] = [];
  post: string = "";

  constructor(private postService: ForumService) { }
  ngOnInit(): void {
    console.log(this.post);
  }

  getPosts(){
    this.posts = this.postService.getPosts();
    return this.posts;
  }
}

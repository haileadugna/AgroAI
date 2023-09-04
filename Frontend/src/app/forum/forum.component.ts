import { Component, OnInit } from '@angular/core';
import { ForumService } from '../services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent implements OnInit {
  posts = [{text: "haslfskadfj;sa", username: 'haile', image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto'},
            {text: "haslfskadfj;sa", username: 'haile' , image: 'image2'},
            {text: "haslfskadfj;sa", username: 'haile' , image: 'image3'},
          ];
  post: string = "";
  postpass: string="";

  getPassPost(){
    this.postpass = this.post;
  }

  constructor(private postService: ForumService) { }
  ngOnInit(): void {

    this.postService.getPosts(this.postpass).subscribe((data: any) =>{
      this.posts = data;
    });
  }
}

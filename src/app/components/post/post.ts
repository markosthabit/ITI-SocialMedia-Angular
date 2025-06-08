import { Component, Input } from '@angular/core';
import { IPost } from '../../models/ipost';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {
  post: IPost | undefined;

  @Input() set setPost(post: IPost) {
    this.post = post;
  }
}

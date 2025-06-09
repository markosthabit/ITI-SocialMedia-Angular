import { Component, Input } from '@angular/core';
import { IPost } from '../../models/ipost';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post {
  post: IPost | undefined;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService
  ) { }

  @Input() set setPost(post: IPost) {
    this.post = post;
  }
  ngOnInit(): void {
    const postID = Number(this.route.snapshot.paramMap.get('id'));
    this.post = this.postService.getPostByID(postID);
  }
}

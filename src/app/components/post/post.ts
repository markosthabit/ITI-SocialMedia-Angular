import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../models/ipost';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../../services/post-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css'
})
export class Post implements OnInit {
  post: IPost | undefined;
  currId: IPost['postId'] | undefined;
  postIDs: IPost['postId'][];
  sub!: Subscription;

  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private cd: ChangeDetectorRef
  ) {
    this.postIDs = this.postService.getAllIDs();

  }

  @Input() set setPost(post: IPost) {
    this.post = post;
  }

  ngOnInit(): void {
    this.sub = this.active.paramMap.subscribe((data) => {
      this.currId = Number(data.get('id'));
      try {
        let post = this.postService.getPostByID(this.currId);
        this.post = post;
        this.cd.detectChanges(); // Trigger change detection
      }
      catch (err) {
        console.log(err);
        this.router.navigate(['**']);
      }
    });

  }

  nextPost() {
    let currIndex = this.postIDs.indexOf(this.post!.postId);
    let nextIndex = currIndex + 1;
    if (nextIndex < this.postIDs.length) { this.router.navigate(['post/', Number(this.postIDs[nextIndex])]); }

  }
  previousPost() {
    let currIndex = this.postIDs.indexOf(this.post!.postId);
    let prevIndex = currIndex - 1;
    if (prevIndex >= 0) {
      this.router.navigate(['post/', Number(this.postIDs[prevIndex])]);
    }

  }

}

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
  post!: IPost;
  currId!: IPost['id'];
  postIDs!: IPost['id'][];
  sub!: Subscription;

  constructor(
    private active: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private cd: ChangeDetectorRef
  ) {
    this.postService.getAllIDs().subscribe({
      next: (_postIDs) => {
        this.postIDs = _postIDs;
      },
    })

  }

  @Input() set setPost(post: IPost) {
    this.post = post;
  }
  ngOnInit(): void {
    this.sub = this.active.paramMap.subscribe((data) => {
      this.currId = Number(data.get('id'));
      this.postService.getPostByID(this.currId).subscribe({
        next: (_post) => {
          console.log('Post data received:', _post);
          this.post = _post;
          this.cd.detectChanges(); // Optional: Forces view update
        },
        error: (err) => {
          console.log(err);
          this.router.navigate(['**']);
        }
      });
    });
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  nextPost() {
    let currIndex = this.postIDs.indexOf(this.post!.id);
    let nextIndex = currIndex + 1;
    if (nextIndex < this.postIDs.length) { this.router.navigate(['post/', Number(this.postIDs[nextIndex])]); }

  }
  previousPost() {
    let currIndex = this.postIDs.indexOf(this.post!.id);
    let prevIndex = currIndex - 1;
    if (prevIndex >= 0) {
      this.router.navigate(['post/', Number(this.postIDs[prevIndex])]);
    }

  }

}

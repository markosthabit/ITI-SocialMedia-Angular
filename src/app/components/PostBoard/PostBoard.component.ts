import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from '../../models/ipost';
import { CommonModule } from '@angular/common';
import { PostStyleDirective } from '../../directives/postStyle.directive';
import { FormatLikesPipe } from "../../pipes/format-likes-pipe";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-PostBoard',
  imports: [CommonModule, PostStyleDirective, FormatLikesPipe, RouterLink],
  templateUrl: './PostBoard.component.html',
  styleUrls: ['./PostBoard.component.css']
})
export class PostBoardComponent {

  postsList: IPost[] = [];

  constructor(
    // private router: Router
  ) {

  }

  @Input() set setPostsList(postsList: IPost[]) {
    this.postsList = postsList;
  }

  @Output() selectedPost: EventEmitter<IPost> = new EventEmitter<IPost>()
  selectPost(post: IPost) {
    this.selectedPost.emit(post);
  }

  // Navigating using the Router Service
  // viewPost(postID: number) {
  //   this.router.navigate(['/posts', postID]).then(() => {
  //     console.log('Navigation to post details completed!');
  //   });
  // }

}


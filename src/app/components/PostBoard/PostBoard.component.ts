import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPost } from '../../models/ipost';
import { CommonModule } from '@angular/common';
import { PostStyleDirective } from '../../directives/postStyle.directive';
import { FormatLikesPipe } from "../../pipes/format-likes-pipe";

@Component({
  selector: 'app-PostBoard',
  imports: [CommonModule, PostStyleDirective, FormatLikesPipe],
  templateUrl: './PostBoard.component.html',
  styleUrls: ['./PostBoard.component.css']
})
export class PostBoardComponent {

  postsList: IPost[] = [];



  @Input() set setPostsList(postsList: IPost[]) {
    this.postsList = postsList;
  }

  @Output() selectedPost: EventEmitter<IPost> = new EventEmitter<IPost>()
  selectPost(post: IPost) {
    this.selectedPost.emit(post);
  }

}


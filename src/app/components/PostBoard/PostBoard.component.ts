import { Component, Input, OnInit } from '@angular/core';
import { IPost } from '../../models/ipost';
import { CommonModule } from '@angular/common';
import { PostStyleDirective } from '../../directives/postStyle.directive';

@Component({
  selector: 'app-PostBoard',
  imports: [CommonModule, PostStyleDirective],
  templateUrl: './PostBoard.component.html',
  styleUrls: ['./PostBoard.component.css']
})
export class PostBoardComponent {

  postsList: IPost[] = [];



  @Input() set setPostsList(postsList: IPost[]) {
    this.postsList = postsList;
  }

}


import { Component, Input, OnInit } from '@angular/core';
import { IPosts } from '../../models/iposts';
import { ITopics } from '../../models/itopics';
import { CommonModule } from '@angular/common';
import { PostStyleDirective } from '../../directives/postStyle.directive';

@Component({
  selector: 'app-PostBoard',
  imports: [CommonModule, PostStyleDirective],
  templateUrl: './PostBoard.component.html',
  styleUrls: ['./PostBoard.component.css']
})
export class PostBoardComponent {

  postsList: IPosts[] = [];



  @Input() set setPostsList(postsList: IPosts[]) {
    this.postsList = postsList;
  }

}


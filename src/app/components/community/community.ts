import { Component, Input } from '@angular/core';
import { IPost } from '../../models/ipost';
import { ITopic } from '../../models/itopic';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostBoardComponent } from '../PostBoard/PostBoard.component';
import { Post } from '../post/post';
import { DUMMY_POSTS, PostService } from '../../services/post-service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-Community',
  imports: [CommonModule, FormsModule, PostBoardComponent, Post],
  templateUrl: './Community.html',
  styleUrl: './Community.css'
})
export class Community {


  postsList: IPost[];
  isLiked: boolean = false;
  topicsList: ITopic[] = TOPICS;
  selectedTopic: number = 0;

  constructor(private postService: PostService) {
    this.postsList = this.postService.getAllPosts();
  }

  toggleCommunityLike() {
    this.isLiked = !this.isLiked;
  }



  searchPosts(value: string): void {
    this.postsList = this.postService.filterPosts('title', value);
  }

  @Input() selectedPost!: IPost;
}








export const TOPICS: ITopic[] = [
  { topicId: 1, topicName: "Technology" },
  { topicId: 2, topicName: "Travel" },
  { topicId: 3, topicName: "Food" },
  { topicId: 4, topicName: "Mental Health" },
  { topicId: 5, topicName: "Photography" }
];
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { IPost } from '../../models/ipost';
import { ITopic } from '../../models/itopic';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostBoardComponent } from '../PostBoard/PostBoard.component';
import { PostService } from '../../services/post-service';

@Component({
  selector: 'app-Community',
  imports: [CommonModule, FormsModule, PostBoardComponent],
  templateUrl: './Community.html',
  styleUrl: './Community.css'
})
export class Community {


  postList!: IPost[];
  isLiked: boolean = false;
  topicsList: ITopic[] = TOPICS;
  selectedTopic: number = 0;

  constructor(private postService: PostService, private cd: ChangeDetectorRef
  ) {
    this.postService.getAllPosts().subscribe({
      next: (_data) => {
        console.log(_data);
        this.postList = _data;
        this.cd.detectChanges()
      },
      error(err) {
        console.log(err);
      }
    }

    );
  }

  toggleCommunityLike() {
    this.isLiked = !this.isLiked;
  }

  searchPosts(value: string): void {
    this.postService.filterPosts('title', value).subscribe({
      next: (_postList) => {
        this.postList = _postList;

      },
    })
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
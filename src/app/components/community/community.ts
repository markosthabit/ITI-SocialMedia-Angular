import { Component } from '@angular/core';
import { IPosts } from '../../models/iposts';
import { ITopics } from '../../models/itopics';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostStyleDirective } from '../../directives/postStyle.directive';

@Component({
  selector: 'app-community',
  imports: [CommonModule, FormsModule, PostStyleDirective],
  templateUrl: './community.html',
  styleUrl: './community.css'
})
export class Community {
  toggleCommunityLike() {
    this.isLiked = !this.isLiked;
  }
  postsList: IPosts[] = DUMMY_POSTS;
  topicsList: ITopics[] = TOPICS;
  selectedTopic: number = 0;
  isLiked: boolean = false;;



  filteredPostsList: IPosts[] = this.postsList;
  set FilterByPostTitle(setValue: string) {
    this.filteredPostsList =
      this.doSearch(setValue);
  }


  doSearch(value: string): IPosts[] {
    value = value.toLowerCase();
    return this.postsList.filter(
      (post: IPosts) =>
        post
          .postTitle
          .toLowerCase()
          .includes(value)
    );
  }


}

export const DUMMY_POSTS: IPosts[] = [
  {
    postId: 1,
    postTitle: "The Rise of AI",
    postContent: "Exploring the impact of AI on daily life and future careers.",
    postLikes: 1,
    postImage: "https://picsum.photos/seed/ai/600/300",
    topicId: [1],
    likedByUser: true
  },
  {
    postId: 2,
    postTitle: "Hidden Gems of Japan",
    postContent: "Uncover tranquil villages and cherry blossom trails.",
    postLikes: 15,
    postImage: "https://picsum.photos/seed/japan/600/300",
    topicId: [2],
    likedByUser: false
  },
  {
    postId: 3,
    postTitle: "Mastering React in 30 Days",
    postContent: "From JSX to custom hooks, build like a pro.",
    postLikes: 0,
    postImage: "https://picsum.photos/seed/react/600/300",
    topicId: [1],
    likedByUser: false
  },
  {
    postId: 4,
    postTitle: "Mindfulness for Beginners",
    postContent: "Simple ways to slow down and find peace daily.",
    postLikes: 9,
    postImage: "https://picsum.photos/seed/mind/600/300",
    topicId: [4],
    likedByUser: false
  },
  {
    postId: 5,
    postTitle: "Street Food Wonders",
    postContent: "The top 5 dishes from roadside vendors around the globe.",
    postLikes: 0,
    postImage: "https://picsum.photos/seed/food/600/300",
    topicId: [3],
    likedByUser: true
  },
  {
    postId: 6,
    postTitle: "Solo Hiking Essentials",
    postContent: "What to pack and prepare for safe solo travel.",
    postLikes: 14,
    postImage: "https://picsum.photos/seed/hiking/600/300",
    topicId: [2],
    likedByUser: false
  },
  {
    postId: 7,
    postTitle: "The Dark Side of Social Media",
    postContent: "How comparison culture impacts mental health.",
    postLikes: 27,
    postImage: "https://picsum.photos/seed/social/600/300",
    topicId: [4],
    likedByUser: true
  },
  {
    postId: 8,
    postTitle: "Quick Weeknight Pasta",
    postContent: "10-minute recipes with rich Italian flavor.",
    postLikes: 5,
    postImage: "https://picsum.photos/seed/pasta/600/300",
    topicId: [3],
    likedByUser: true
  },
  {
    postId: 9,
    postTitle: "Understanding the Camera Triangle",
    postContent: "Master ISO, aperture, and shutter speed.",
    postLikes: 0,
    postImage: "https://picsum.photos/seed/photography/600/300",
    topicId: [5],
    likedByUser: false
  },
  {
    postId: 10,
    postTitle: "Remote Work Tech Stack",
    postContent: "Boost productivity with these essential tools.",
    postLikes: 19,
    postImage: "https://picsum.photos/seed/tools/600/300",
    topicId: [1],
    likedByUser: false
  },
  {
    postId: 11,
    postTitle: "Morocco on a Budget",
    postContent: "Markets, spices, and the magic of Marrakesh.",
    postLikes: 33,
    postImage: "https://picsum.photos/seed/morocco/600/300",
    topicId: [2],
    likedByUser: true
  },
  {
    postId: 12,
    postTitle: "Healing Through Journaling",
    postContent: "Let your thoughts find clarity on paper.",
    postLikes: 0,
    postImage: "https://picsum.photos/seed/journal/600/300",
    topicId: [4],
    likedByUser: false
  },
  {
    postId: 13,
    postTitle: "Vegan Delights for Everyone",
    postContent: "Flavorful plant-based meals that even meat lovers enjoy.",
    postLikes: 11,
    postImage: "https://picsum.photos/seed/vegan/600/300",
    topicId: [3],
    likedByUser: false
  },
  {
    postId: 14,
    postTitle: "Portrait Photography 101",
    postContent: "Tips for natural light and sharp focus.",
    postLikes: 4,
    postImage: "https://picsum.photos/seed/portrait/600/300",
    topicId: [5],
    likedByUser: true
  },
  {
    postId: 15,
    postTitle: "The Truth About Algorithms",
    postContent: "How recommendation engines shape what we see.",
    postLikes: 6,
    postImage: "https://picsum.photos/seed/algorithm/600/300",
    topicId: [1],
    likedByUser: true
  },
  {
    postId: 16,
    postTitle: "Backpacking Southeast Asia",
    postContent: "Temples, beaches, and budget travel tips.",
    postLikes: 0,
    postImage: "https://picsum.photos/seed/sea/600/300",
    topicId: [2],
    likedByUser: false
  },
  {
    postId: 17,
    postTitle: "Digital Detox: A Guide",
    postContent: "Step back from screens to reclaim your brain.",
    postLikes: 18,
    postImage: "https://picsum.photos/seed/detox/600/300",
    topicId: [4],
    likedByUser: true
  },
  {
    postId: 18,
    postTitle: "One-Pan Dinners That Save Time",
    postContent: "Delicious meals with minimal clean-up.",
    postLikes: 3,
    postImage: "https://picsum.photos/seed/onepan/600/300",
    topicId: [3],
    likedByUser: false
  },
  {
    postId: 19,
    postTitle: "Nature Through the Lens",
    postContent: "Capture emotion in wild landscapes.",
    postLikes: 17,
    postImage: "https://picsum.photos/seed/nature/600/300",
    topicId: [5],
    likedByUser: true
  },
  {
    postId: 20,
    postTitle: "Ethical Tech: What You Should Know",
    postContent: "Privacy, fairness, and the future of code.",
    postLikes: 0,
    postImage: "https://picsum.photos/seed/ethics/600/300",
    topicId: [1],
    likedByUser: false
  }
];



export const TOPICS: ITopics[] = [
  { topicId: 1, topicName: "Technology" },
  { topicId: 2, topicName: "Travel" },
  { topicId: 3, topicName: "Food" },
  { topicId: 4, topicName: "Mental Health" },
  { topicId: 5, topicName: "Photography" }
];


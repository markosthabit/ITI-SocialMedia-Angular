import { Injectable } from '@angular/core';
import { IPost } from '../models/ipost';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: IPost[];

  constructor() {
    this.posts = DUMMY_POSTS;
  }


  getAllPosts(): IPost[] {
    return this.posts;
  }

  getAllIDs(): IPost['postId'][]{
    return this.posts.map((post) => post.postId);
  }

  getPostByID(id: number): IPost {
    let post = this.posts.find((post) => post.postId == id);
    if (post) { return post; }
    else { throw Error("Invalid post ID"); }
  }

  filterPosts(filterCriteria: string, filterContent: string): IPost[] {
    switch (filterCriteria) {
      case 'title':
        return this.posts.filter((post) => post.postTitle.toLowerCase().includes(filterContent.toLowerCase()));
      default:
        throw Error('Invalid Filter Criteria!');
    }
  }
}

export const DUMMY_POSTS: IPost[] = [
  {
    postId: 1,
    postTitle: "The Rise of AI",
    postContent: "Exploring the impact of AI on daily life and future careers.",
    postLikes: 1954,
    postImage: "https://picsum.photos/seed/ai/600/300",
    topicId: [1],
    likedByUser: true,
    postTimestamp: "2025-01-15T10:00:00Z"
  },
  {
    postId: 2,
    postTitle: "Hidden Gems of Japan",
    postContent: "Uncover tranquil villages and cherry blossom trails.",
    postLikes: 14125,
    postImage: "https://picsum.photos/seed/japan/600/300",
    topicId: [2],
    likedByUser: false,
    postTimestamp: "2025-02-20T12:30:00Z"
  },
  {
    postId: 3,
    postTitle: "Mastering React in 30 Days",
    postContent: "From JSX to custom hooks, build like a pro.",
    postLikes: 0,
    postImage: "https://picsum.photos/seed/react/600/300",
    topicId: [1],
    likedByUser: false,
    postTimestamp: "2025-03-10T08:15:00Z"
  },
  {
    postId: 4,
    postTitle: "Mindfulness for Beginners",
    postContent: "Simple ways to slow down and find peace daily.",
    postLikes: 92134,
    postImage: "https://picsum.photos/seed/mind/600/300",
    topicId: [4],
    likedByUser: false,
    postTimestamp: "2025-04-05T14:45:00Z"
  },
  {
    postId: 5,
    postTitle: "Street Food Wonders",
    postContent: "The top 5 dishes from roadside vendors around the globe.",
    postLikes: 0,
    postImage: "https://picsum.photos/seed/food/600/300",
    topicId: [3],
    likedByUser: true,
    postTimestamp: "2025-05-12T16:20:00Z"
  },
  {
    postId: 6,
    postTitle: "Solo Hiking Essentials",
    postContent: "What to pack and prepare for safe solo travel.",
    postLikes: 15124,
    postImage: "https://picsum.photos/seed/hiking/600/300",
    topicId: [2],
    likedByUser: false,
    postTimestamp: "2025-01-22T09:10:00Z"
  },
  {
    postId: 7,
    postTitle: "The Dark Side of Social Media",
    postContent: "How comparison culture impacts mental health.",
    postLikes: 274,
    postImage: "https://picsum.photos/seed/social/600/300",
    topicId: [4],
    likedByUser: true,
    postTimestamp: "2025-02-18T11:25:00Z"
  },
  {
    postId: 8,
    postTitle: "Quick Weeknight Pasta",
    postContent: "10-minute recipes with rich Italian flavor.",
    postLikes: 53,
    postImage: "https://picsum.photos/seed/pasta/600/300",
    topicId: [3],
    likedByUser: true,
    postTimestamp: "2025-03-25T18:30:00Z"
  },
  {
    postId: 9,
    postTitle: "Understanding the Camera Triangle",
    postContent: "Master ISO, aperture, and shutter speed.",
    postLikes: 0,
    postImage: "https://picsum.photos/seed/photography/600/300",
    topicId: [5],
    likedByUser: false,
    postTimestamp: "2025-04-30T13:40:00Z"
  },
  {
    postId: 10,
    postTitle: "Remote Work Tech Stack",
    postContent: "Boost productivity with these essential tools.",
    postLikes: 112349,
    postImage: "https://picsum.photos/seed/tools/600/300",
    topicId: [1],
    likedByUser: false,
    postTimestamp: "2025-05-10T15:55:00Z"
  },
  {
    postId: 11,
    postTitle: "Morocco on a Budget",
    postContent: "Markets, spices, and the magic of Marrakesh.",
    postLikes: 35123,
    postImage: "https://picsum.photos/seed/morocco/600/300",
    topicId: [2],
    likedByUser: true,
    postTimestamp: "2025-01-28T14:20:00Z"
  },
  {
    postId: 12,
    postTitle: "Healing Through Journaling",
    postContent: "Let your thoughts find clarity on paper.",
    postLikes: 150,
    postImage: "https://picsum.photos/seed/journal/600/300",
    topicId: [4],
    likedByUser: false,
    postTimestamp: "2025-02-22T10:15:00Z"
  },
  {
    postId: 13,
    postTitle: "Vegan Delights for Everyone",
    postContent: "Flavorful plant-based meals that even meat lovers enjoy.",
    postLikes: 151,
    postImage: "https://picsum.photos/seed/vegan/600/300",
    topicId: [3],
    likedByUser: false,
    postTimestamp: "2025-03-18T16:40:00Z"
  },
  {
    postId: 14,
    postTitle: "Portrait Photography 101",
    postContent: "Tips for natural light and sharp focus.",
    postLikes: 4555,
    postImage: "https://picsum.photos/seed/portrait/600/300",
    topicId: [5],
    likedByUser: true,
    postTimestamp: "2025-04-25T12:50:00Z"
  },
  {
    postId: 15,
    postTitle: "The Truth About Algorithms",
    postContent: "How recommendation engines shape what we see.",
    postLikes: 651235,
    postImage: "https://picsum.photos/seed/algorithm/600/300",
    topicId: [1],
    likedByUser: true,
    postTimestamp: "2025-05-20T09:30:00Z"
  },
  {
    postId: 16,
    postTitle: "Backpacking Southeast Asia",
    postContent: "Temples, beaches, and budget travel tips.",
    postLikes: 0,
    postImage: "https://picsum.photos/seed/sea/600/300",
    topicId: [2],
    likedByUser: false,
    postTimestamp: "2025-01-10T11:45:00Z"
  },
  {
    postId: 17,
    postTitle: "Digital Detox: A Guide",
    postContent: "Step back from screens to reclaim your brain.",
    postLikes: 18,
    postImage: "https://picsum.photos/seed/detox/600/300",
    topicId: [4],
    likedByUser: true,
    postTimestamp: "2025-02-15T14:10:00Z"
  },
  {
    postId: 18,
    postTitle: "One-Pan Dinners That Save Time",
    postContent: "Delicious meals with minimal clean-up.",
    postLikes: 3,
    postImage: "https://picsum.photos/seed/onepan/600/300",
    topicId: [3],
    likedByUser: false,
    postTimestamp: "2025-03-22T17:35:00Z"
  },
  {
    postId: 19,
    postTitle: "Nature Through the Lens",
    postContent: "Capture emotion in wild landscapes.",
    postLikes: 17,
    postImage: "https://picsum.photos/seed/nature/600/300",
    topicId: [5],
    likedByUser: true,
    postTimestamp: "2025-04-28T10:25:00Z"
  },
  {
    postId: 20,
    postTitle: "Ethical Tech: What You Should Know",
    postContent: "Privacy, fairness, and the future of code.",
    postLikes: 0,
    postImage: "https://picsum.photos/seed/ethics/600/300",
    topicId: [1],
    likedByUser: false,
    postTimestamp: "2025-05-15T13:50:00Z"
  },
  {
    postId: 21,
    postTitle: "The Future of AI in Healthcare",
    postContent: "How AI is revolutionizing the healthcare industry.",
    postLikes: 2500,
    postImage: "https://picsum.photos/seed/aihealth/600/300",
    topicId: [1],
    likedByUser: true,
    postTimestamp: "2025-01-18T12:00:00Z"
  },
  {
    postId: 22,
    postTitle: "Exploring the Temples of Kyoto",
    postContent: "A journey through the ancient temples of Kyoto.",
    postLikes: 12000,
    postImage: "https://picsum.photos/seed/kyoto/600/300",
    topicId: [2],
    likedByUser: false,
    postTimestamp: "2025-02-25T14:30:00Z"
  },
  {
    postId: 23,
    postTitle: "Advanced React Techniques",
    postContent: "Taking your React skills to the next level.",
    postLikes: 500,
    postImage: "https://picsum.photos/seed/advancedreact/600/300",
    topicId: [1],
    likedByUser: false,
    postTimestamp: "2025-03-12T09:15:00Z"
  },
  {
    postId: 24,
    postTitle: "Mindfulness and Meditation",
    postContent: "Techniques to achieve inner peace and mindfulness.",
    postLikes: 80000,
    postImage: "https://picsum.photos/seed/meditation/600/300",
    topicId: [4],
    likedByUser: false,
    postTimestamp: "2025-04-08T16:45:00Z"
  },
  {
    postId: 25,
    postTitle: "The Best Street Food in Bangkok",
    postContent: "A guide to the best street food in Bangkok.",
    postLikes: 1200,
    postImage: "https://picsum.photos/seed/bangkokfood/600/300",
    topicId: [3],
    likedByUser: true,
    postTimestamp: "2025-05-14T18:20:00Z"
  },
  {
    postId: 26,
    postTitle: "Hiking the Inca Trail",
    postContent: "A guide to hiking the Inca Trail to Machu Picchu.",
    postLikes: 18000,
    postImage: "https://picsum.photos/seed/incatrail/600/300",
    topicId: [2],
    likedByUser: false,
    postTimestamp: "2025-01-25T11:10:00Z"
  },
  {
    postId: 27,
    postTitle: "The Impact of Social Media on Society",
    postContent: "An in-depth look at the impact of social media on society.",
    postLikes: 400,
    postImage: "https://picsum.photos/seed/socialimpact/600/300",
    topicId: [4],
    likedByUser: true,
    postTimestamp: "2025-02-28T13:25:00Z"
  },
  {
    postId: 28,
    postTitle: "Quick and Easy Pasta Recipes",
    postContent: "Delicious pasta recipes that are quick and easy to make.",
    postLikes: 80,
    postImage: "https://picsum.photos/seed/quickpasta/600/300",
    topicId: [3],
    likedByUser: true,
    postTimestamp: "2025-03-30T20:30:00Z"
  },
  {
    postId: 29,
    postTitle: "Mastering Landscape Photography",
    postContent: "Tips and techniques for capturing stunning landscapes.",
    postLikes: 20,
    postImage: "https://picsum.photos/seed/landscapes/600/300",
    topicId: [5],
    likedByUser: false,
    postTimestamp: "2025-04-22T15:40:00Z"
  },
  {
    postId: 30,
    postTitle: "Essential Tools for Remote Work",
    postContent: "A list of essential tools for remote work productivity.",
    postLikes: 120000,
    postImage: "https://picsum.photos/seed/remotetools/600/300",
    topicId: [1],
    likedByUser: false,
    postTimestamp: "2025-05-22T17:55:00Z"
  },
  {
    postId: 31,
    postTitle: "Exploring the Markets of Marrakesh",
    postContent: "A guide to the vibrant markets of Marrakesh.",
    postLikes: 28000,
    postImage: "https://picsum.photos/seed/marrakesh/600/300",
    topicId: [2],
    likedByUser: true,
    postTimestamp: "2025-01-30T16:20:00Z"
  },
  {
    postId: 32,
    postTitle: "The Benefits of Journaling",
    postContent: "How journaling can improve your mental health and well-being.",
    postLikes: 180,
    postImage: "https://picsum.photos/seed/journaling/600/300",
    topicId: [4],
    likedByUser: false,
    postTimestamp: "2025-02-24T12:15:00Z"
  },
  {
    postId: 33,
    postTitle: "Delicious Vegan Recipes",
    postContent: "A collection of delicious and easy-to-make vegan recipes.",
    postLikes: 200,
    postImage: "https://picsum.photos/seed/vegandishes/600/300",
    topicId: [3],
    likedByUser: false,
    postTimestamp: "2025-03-20T18:40:00Z"
  },
  {
    postId: 34,
    postTitle: "Portrait Photography Tips",
    postContent: "Tips for capturing beautiful and natural portraits.",
    postLikes: 5000,
    postImage: "https://picsum.photos/seed/portraitphotography/600/300",
    topicId: [5],
    likedByUser: true,
    postTimestamp: "2025-04-26T14:50:00Z"
  },
  {
    postId: 35,
    postTitle: "Understanding Social Media Algorithms",
    postContent: "How social media algorithms work and their impact on content.",
    postLikes: 580000,
    postImage: "https://picsum.photos/seed/socialalgorithms/600/300",
    topicId: [1],
    likedByUser: true,
    postTimestamp: "2025-05-24T11:30:00Z"
  },
  {
    postId: 36,
    postTitle: "Backpacking Through Europe",
    postContent: "A guide to backpacking through Europe on a budget.",
    postLikes: 500,
    postImage: "https://picsum.photos/seed/europebackpacking/600/300",
    topicId: [2],
    likedByUser: false,
    postTimestamp: "2025-01-12T13:45:00Z"
  },
  {
    postId: 37,
    postTitle: "The Importance of Digital Detox",
    postContent: "Why taking a break from digital devices is crucial for mental health.",
    postLikes: 30,
    postImage: "https://picsum.photos/seed/digitaldetox/600/300",
    topicId: [4],
    likedByUser: true,
    postTimestamp: "2025-02-17T16:10:00Z"
  },
  {
    postId: 38,
    postTitle: "Easy One-Pan Dinner Recipes",
    postContent: "Quick and easy one-pan dinner recipes for busy weeknights.",
    postLikes: 5,
    postImage: "https://picsum.photos/seed/onepandinners/600/300",
    topicId: [3],
    likedByUser: false,
    postTimestamp: "2025-03-24T19:35:00Z"
  },
  {
    postId: 39,
    postTitle: "Capturing the Beauty of Nature",
    postContent: "Tips for photographing the beauty of nature.",
    postLikes: 20,
    postImage: "https://picsum.photos/seed/naturephotography/600/300",
    topicId: [5],
    likedByUser: true,
    postTimestamp: "2025-04-30T12:25:00Z"
  },
  {
    postId: 40,
    postTitle: "The Ethics of Technology",
    postContent: "Exploring the ethical implications of modern technology.",
    postLikes: 50,
    postImage: "https://picsum.photos/seed/techethics/600/300",
    topicId: [1],
    likedByUser: false,
    postTimestamp: "2025-05-18T15:50:00Z"
  },
  {
    postId: 41,
    postTitle: "The Future of AI in Education",
    postContent: "How AI is transforming the education sector.",
    postLikes: 3000,
    postImage: "https://picsum.photos/seed/aieducation/600/300",
    topicId: [1],
    likedByUser: true,
    postTimestamp: "2025-01-20T14:00:00Z"
  },
  {
    postId: 42,
    postTitle: "Exploring the Ancient Ruins of Rome",
    postContent: "A journey through the ancient ruins of Rome.",
    postLikes: 14000,
    postImage: "https://picsum.photos/seed/romeruins/600/300",
    topicId: [2],
    likedByUser: false,
    postTimestamp: "2025-02-27T16:30:00Z"
  },
  {
    postId: 43,
    postTitle: "Advanced Techniques in React Development",
    postContent: "Advanced techniques to enhance your React development skills.",
    postLikes: 600,
    postImage: "https://picsum.photos/seed/reactadvanced/600/300",
    topicId: [1],
    likedByUser: false,
    postTimestamp: "2025-03-14T11:15:00Z"
  },
  {
    postId: 44,
    postTitle: "Mindfulness Practices for Daily Life",
    postContent: "Incorporating mindfulness practices into your daily routine.",
    postLikes: 85000,
    postImage: "https://picsum.photos/seed/dailymindfulness/600/300",
    topicId: [4],
    likedByUser: false,
    postTimestamp: "2025-04-10T18:45:00Z"
  },
  {
    postId: 45,
    postTitle: "The Best Street Food in Mexico City",
    postContent: "A guide to the best street food in Mexico City.",
    postLikes: 1400,
    postImage: "https://picsum.photos/seed/mexicocityfood/600/300",
    topicId: [3],
    likedByUser: true,
    postTimestamp: "2025-05-16T20:20:00Z"
  },
  {
    postId: 46,
    postTitle: "Hiking the Appalachian Trail",
    postContent: "A guide to hiking the Appalachian Trail.",
    postLikes: 20000,
    postImage: "https://picsum.photos/seed/appalachiantrail/600/300",
    topicId: [2],
    likedByUser: false,
    postTimestamp: "2025-01-28T13:10:00Z"
  },
  {
    postId: 47,
    postTitle: "The Role of Social Media in Modern Society",
    postContent: "An analysis of the role of social media in modern society.",
    postLikes: 500,
    postImage: "https://picsum.photos/seed/socialrole/600/300",
    topicId: [4],
    likedByUser: true,
    postTimestamp: "2025-03-02T15:25:00Z"
  },
  {
    postId: 48,
    postTitle: "Quick and Easy Italian Pasta Recipes",
    postContent: "Delicious Italian pasta recipes that are quick and easy to make.",
    postLikes: 100,
    postImage: "https://picsum.photos/seed/italianpasta/600/300",
    topicId: [3],
    likedByUser: true,
    postTimestamp: "2025-04-05T22:30:00Z"
  },
  {
    postId: 49,
    postTitle: "Mastering Wildlife Photography",
    postContent: "Tips and techniques for capturing stunning wildlife photographs.",
    postLikes: 30,
    postImage: "https://picsum.photos/seed/wildlifephotography/600/300",
    topicId: [5],
    likedByUser: false,
    postTimestamp: "2025-05-10T17:40:00Z"
  },
  {
    postId: 50,
    postTitle: "Essential Tools for Remote Work Productivity",
    postContent: "A list of essential tools for boosting remote work productivity.",
    postLikes: 130000,
    postImage: "https://picsum.photos/seed/remoteproductivity/600/300",
    topicId: [1],
    likedByUser: false,
    postTimestamp: "2025-05-30T20:55:00Z"
  },
  {
    postId: 51,
    postTitle: "Exploring the Souks of Dubai",
    postContent: "A guide to the vibrant souks of Dubai.",
    postLikes: 30000,
    postImage: "https://picsum.photos/seed/dubaisouks/600/300",
    topicId: [2],
    likedByUser: true,
    postTimestamp: "2025-02-05T18:20:00Z"
  },
  {
    postId: 52,
    postTitle: "The Benefits of Daily Journaling",
    postContent: "How daily journaling can improve your mental health and well-being.",
    postLikes: 200,
    postImage: "https://picsum.photos/seed/dailyjournaling/600/300",
    topicId: [4],
    likedByUser: false,
    postTimestamp: "2025-03-10T14:15:00Z"
  },
  {
    postId: 53,
    postTitle: "Delicious and Healthy Vegan Recipes",
    postContent: "A collection of delicious and healthy vegan recipes.",
    postLikes: 250,
    postImage: "https://picsum.photos/seed/healthyvegan/600/300",
    topicId: [3],
    likedByUser: false,
    postTimestamp: "2025-04-15T20:40:00Z"
  },
  {
    postId: 54,
    postTitle: "Portrait Photography: Capturing Emotions",
    postContent: "Tips for capturing emotions in portrait photography.",
    postLikes: 5500,
    postImage: "https://picsum.photos/seed/emotionalportraits/600/300",
    topicId: [5],
    likedByUser: true,
    postTimestamp: "2025-05-20T16:50:00Z"
  },
  {
    postId: 55,
    postTitle: "Understanding the Impact of Social Media Algorithms",
    postContent: "How social media algorithms shape the content we see.",
    postLikes: 600000,
    postImage: "https://picsum.photos/seed/algorithmimpact/600/300",
    topicId: [1],
    likedByUser: true,
    postTimestamp: "2025-06-01T13:30:00Z"
  },
  {
    postId: 56,
    postTitle: "Backpacking Through South America",
    postContent: "A guide to backpacking through South America on a budget.",
    postLikes: 800,
    postImage: "https://picsum.photos/seed/southamericabackpacking/600/300",
    topicId: [2],
    likedByUser: false,
    postTimestamp: "2025-01-18T15:45:00Z"
  },
  {
    postId: 57,
    postTitle: "The Importance of Taking a Digital Detox",
    postContent: "Why taking a break from digital devices is crucial for mental health.",
    postLikes: 40,
    postImage: "https://picsum.photos/seed/digitaldetoximportance/600/300",
    topicId: [4],
    likedByUser: true,
    postTimestamp: "2025-02-22T18:10:00Z"
  },
  {
    postId: 58,
    postTitle: "Easy and Quick One-Pan Dinner Recipes",
    postContent: "Quick and easy one-pan dinner recipes for busy weeknights.",
    postLikes: 8,
    postImage: "https://picsum.photos/seed/quickonepandinners/600/300",
    topicId: [3],
    likedByUser: false,
    postTimestamp: "2025-03-28T21:35:00Z"
  },
  {
    postId: 59,
    postTitle: "Capturing the Essence of Nature",
    postContent: "Tips for photographing the essence of nature.",
    postLikes: 25,
    postImage: "https://picsum.photos/seed/natureessence/600/300",
    topicId: [5],
    likedByUser: true,
    postTimestamp: "2025-04-02T14:25:00Z"
  },
  {
    postId: 60,
    postTitle: "The Ethical Implications of Modern Technology",
    postContent: "Exploring the ethical implications of modern technology.",
    postLikes: 60,
    postImage: "https://picsum.photos/seed/moderntechethics/600/300",
    topicId: [1],
    likedByUser: false,
    postTimestamp: "2025-05-22T17:50:00Z"
  }
];

import { Component } from '@angular/core';
import { Community } from '../../models/community';

@Component({
  selector: 'app-post',
  imports: [],
  templateUrl: './post.html',
  styleUrl: './post.css'
})

export class Post {
  postCommunity: Community = new Community("communityName", "https://img.pikbest.com/png-images/20250510/community-network-and-social-icon-design-template-logo-vector_11708048.png!w700wp", ["subgroup1", "subgroup2"], [])
}

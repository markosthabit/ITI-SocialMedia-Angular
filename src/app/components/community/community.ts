import { Component } from '@angular/core';
import { IPosts } from '../../models/iposts';

@Component({
  selector: 'app-community',
  imports: [],
  templateUrl: './community.html',
  styleUrl: './community.css'
})
export class Community {
  postsList: IPosts[] = [];
  isLiked: boolean = false;

}

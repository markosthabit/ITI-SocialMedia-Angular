import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post } from "./components/post/post";
import { Community } from "./components/community/community";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Post, Community],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ITI-SocialMedia-Angular';
}

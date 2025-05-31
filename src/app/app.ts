import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Post } from "./components/post/post";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Post],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ITI-SocialMedia-Angular';
}

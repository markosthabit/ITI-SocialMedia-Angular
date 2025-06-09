import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Community } from "./components/community/community";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Community],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'ITI-SocialMedia-Angular';
}

import { Component } from '@angular/core';
import { ProfileComponent } from 'app/profile/profile.component';
import {GithubService} from 'app/service/github.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [GithubService]

})
export class AppComponent {
  c: ProfileComponent;

  title = 'app';
}

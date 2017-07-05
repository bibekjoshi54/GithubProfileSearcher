import { Component } from '@angular/core';
import { ProfileComponent } from 'app/profile/profile.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  c: ProfileComponent;

  title = 'app';
}

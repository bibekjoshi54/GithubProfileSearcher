import { Injectable } from '@angular/core';

/* For the HTTP request to the github */
import {Http, Headers} from '@angular/http';

/* to use the observable */

import 'rxjs/add/operator/map';
@Injectable()
export class GithubService {

  private username: String;
  constructor(private _http: Http) {
    console.log('GitHub Service Ready');
    this.username = '';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/' + this.username)
    .map(res => res.json());
  }

  getRepos(){
    return this._http.get('http://api.github.com/users/' + this.username + '/repos')
    .map(res => res.json());
  }

  updateUser(userName : string): void{
      this.username = userName;
  }
}

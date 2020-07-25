import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contacts } from '../interfaces/contacts';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  readonly url = 'https://jsonplaceholder.typicode.com/users';

  posts: Observable<Post[]> = null;
  users: Observable<Contacts[]> = null;

  constructor(private httpClient: HttpClient) {
    this.posts = this.httpClient.get<Post[]>(this.url);
    this.users = this.httpClient.get<Contacts[]>(this.url);
  }

  getAll() {
    // return this.posts;
    return this.users;
  }

  getById(id: number) {
    return this.httpClient.get<Contacts[]>(this.url + '/' + id);
  }
}

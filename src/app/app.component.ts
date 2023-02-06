import { Component, OnInit } from '@angular/core';
import { IPost } from './core/models/post.model';
import { PostService } from './core/service/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  posts!: IPost[];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.getExtensionPost();
  }

  getExtensionPost() {
    this.postService.getExtensionPost().subscribe((data) => {
      this.posts = data;
    });
  }
}

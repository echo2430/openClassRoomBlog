import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html'
})
export class PostListItemComponentComponent implements OnInit {

  @Input() post: object;

  constructor() {
  }

  ngOnInit() {
    this.post["created_at"] = new Date();

  }

  getColor() {
    if (this.post["loveIts"] > 0)
      return "green";
    if (this.post["loveIts"] < 0)
      return "red";
    return "black";
  }

  isLoved() {
    return this.post["loveIts"] > 0;
  }
  isNotLoved() {
    return this.post["loveIts"] < 0;
  }

  likeIt() {
    this.post["loveIts"] += 1;
  }

  hateIt() {
    this.post["loveIts"] -= 1;
  }
}

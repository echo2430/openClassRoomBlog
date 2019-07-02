import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html'
})
export class PostListComponentComponent implements OnInit {

  @Input() posts: string[];

  constructor() { }

  ngOnInit() {
  }

}

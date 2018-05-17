import { Component, OnInit } from '@angular/core';
import { ContentfulService } from './contentful.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  books$: Observable<any>;
  constructor(private contentfulService: ContentfulService) {}

  ngOnInit () {
    this.books$ = this.contentfulService.getEntries('book', 'en-US')
  }
}

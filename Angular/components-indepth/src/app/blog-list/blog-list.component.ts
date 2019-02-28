import { Component, OnInit, ViewChild, ViewChildren, Query, QueryList } from '@angular/core';
import { BlogPost } from '../blog-post';
import { BlogTileComponent } from '../blog-tile/blog-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogPost: BlogPost[][]; 
  currentPage: number;
  @ViewChildren('tile') blogTileComponent: QueryList<BlogTileComponent>;
  constructor(private blogDataService: BlogDataService) { 

  }

  ngOnInit() {
    this.currentPage = 0;
    this.blogPost=this.blogDataService.getData();
    
  }

  updatePage(newPage){
    this.currentPage = newPage;
  }
  expandAll(){
    this.blogTileComponent.forEach(e => e.readFullSummary());
  }
  favAll(){
    this.blogPost[this.currentPage].forEach(post => post.isFav = true);
  }
}

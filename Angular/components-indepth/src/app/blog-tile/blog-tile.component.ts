import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from '../blog-post';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-blog-tile',
  templateUrl: './blog-tile.component.html',
  styleUrls: ['./blog-tile.component.css']
})
export class BlogTileComponent implements OnInit {

  @Input() post: BlogPost;
  fullSummary: string;
  flagSummary: boolean = false;
  btntitle:string = 'Read';
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.fullSummary= this.post.summary;
    this.post.summary = this.truncatePipe.transform(this.post.summary, 50);
    }
    readFullSummary(){
        this.flagSummary = !this.flagSummary;
        console.log(this.flagSummary);
        if(this.flagSummary === true){
          this.btntitle = 'Hide'; 
        this.post.summary = this.fullSummary;
      }
      else{
        this.btntitle = 'Read';
        this.post.summary= this.truncatePipe.transform(this.post.summary, 50);
      }
    }
    markFav(){
      this.post.isFav = !this.post.isFav;
    }

}

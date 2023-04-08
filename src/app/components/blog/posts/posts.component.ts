import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  allposts: any = []
  
  constructor(private blogService: BlogService, private spinner: NgxSpinnerService){
    
  }
  ngOnInit(): void {
    this.allPost()
  }

  allPost(){

    this.spinner.show()
    this.blogService.allPosts().subscribe(resp => {
      this.allposts = resp
      this.spinner.hide()
    })
  }



}

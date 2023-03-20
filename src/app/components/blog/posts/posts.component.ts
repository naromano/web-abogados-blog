import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  allposts: any = []
  
  constructor(private blogService: BlogService){
    
  }
  ngOnInit(): void {
    this.allPost()
  }

  allPost(){

    Swal.showLoading()
    this.blogService.allPosts().subscribe(resp => {
      this.allposts = resp
      Swal.close()
      console.log(resp)
    })
  }



}

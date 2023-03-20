import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  allposts: any = []

  constructor(private blogService: BlogService){}
  ngOnInit(): void {
    this.allPost()
  }

  ir(){
    console.log("kapolas sos crack")
  }

  


  allPost(){
    Swal.showLoading()
    
    this.blogService.allPosts().subscribe(resp => {
      this.allposts = resp
      Swal.close()
      console.log(resp)
    })
  }

  delete(id: string){
    Swal.showLoading()
    this.blogService.deletePost(id)?.subscribe()
    Swal.close()

  }

  editar(id: string){

  }
  
}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  allposts: any = []
  authToken = localStorage.getItem("auth_token")

  constructor(private blogService: BlogService, private router: Router){}
  ngOnInit(): void {
    this.allPost()
    this.tokenValid()
  }
  
  tokenValid(){
    if(this.authToken === null){
      this.router.navigateByUrl(`/`);
    }
  }

  allPost(){
    Swal.showLoading()
    
    this.blogService.allPosts().subscribe(resp => {
      this.allposts = resp
      Swal.close()
    })
  }

  delete(id: string){
    Swal.showLoading()
    this.blogService.deletePost(id)?.subscribe()
    setTimeout(() =>{
      window.location.reload()
      Swal.close()
    },1000)
    


  }

  editar(id: string){

  }
  
}


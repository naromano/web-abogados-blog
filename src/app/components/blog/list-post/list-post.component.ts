import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/services/blog.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list-post',
  templateUrl: './list-post.component.html',
  styleUrls: ['./list-post.component.css']
})
export class ListPostComponent implements OnInit {

  allposts: any = []
  authToken = localStorage.getItem("auth_token")

  constructor(private blogService: BlogService, private router: Router, private spinner: NgxSpinnerService){}
  ngOnInit(): void {
    this.tokenValid()
    this.allPost()
    
  }
  
  tokenValid(){
    if(this.authToken === null){
      this.router.navigateByUrl(`/`);
    }
  }

  allPost(){
    this.spinner.show()
    
    this.blogService.allPosts().subscribe(resp => {
      //Falta ordenar por fecha creado
      this.allposts = resp
      this.spinner.hide()
    })
  }

  delete(id: string){
    this.spinner.show()
    this.blogService.deletePost(id)?.subscribe()
    setTimeout(() =>{
      window.location.reload()
      this.spinner.hide()
    },1000)
    


  }

  editar(id: string){
    this.router.navigateByUrl(`/publicacion/editar/${id}`)

  }

  logout(){
    localStorage.removeItem("auth_token");
    setTimeout(() =>{
      this.router.navigateByUrl('/')
    },10)
  }
  
}


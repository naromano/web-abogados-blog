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
  allpostsOrdenados: any = []
  authToken = localStorage.getItem("auth_token")
  pageSize: number = 20;
  currentPage: number = 1;
  pages: number[] = [];
  totalPages: number = 0;
  maxPagesToShow: number = 3;

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

      this.allposts = resp

      this.allposts.sort((a:any, b:any) => {
        const dateA = new Date(a.date).getTime();
        const dateB = new Date(b.date).getTime();
        return dateB - dateA;
      });

      
      this.allpostsOrdenados = this.allposts
      this.totalPages = Math.ceil(this.allpostsOrdenados.length / this.pageSize);
      this.pages = Array.from({length: this.totalPages}, (_, i) => i + 1);

      this.spinner.hide()
    })
  }

  getCurrentPageItems() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.allpostsOrdenados.slice(startIndex, endIndex);
  }

  goToPage(n: number) {
    this.currentPage = n;
  }

  onNext() {
    this.currentPage++;
  }

  onPrev() {
    this.currentPage--;
  }

  getPagesToShow() {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const maxPagesToShow = this.maxPagesToShow;

    let startPage: number, endPage: number;

    // Si el número total de páginas es menor que la cantidad máxima de páginas a mostrar,
    // se muestran todas las páginas
    if (totalPages <= maxPagesToShow) {
      startPage = 1;
      endPage = totalPages;
    } else {
      // Se calcula el número de páginas a mostrar a la izquierda y a la derecha de la página actual
      const maxPagesBeforeCurrentPage = Math.floor(maxPagesToShow / 2);
      const maxPagesAfterCurrentPage = Math.ceil(maxPagesToShow / 2) - 1;

      // Si la página actual está cerca del inicio de la lista de páginas
      if (currentPage <= maxPagesBeforeCurrentPage) {
        startPage = 1;
        endPage = maxPagesToShow;
      // Si la página actual está cerca del final de la lista de páginas
      } else if (currentPage + maxPagesAfterCurrentPage >= totalPages) {
        startPage = totalPages - maxPagesToShow + 1;
        endPage = totalPages;
      // Si la página actual está en el medio de la lista de páginas
      } else {
        startPage = currentPage - maxPagesBeforeCurrentPage;
        endPage = currentPage + maxPagesAfterCurrentPage;
      }
    }

    // Se crea un array con las páginas a mostrar
    return Array.from({ length: (endPage - startPage) + 1 }, (_, i) => startPage + i);
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


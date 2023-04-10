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
  allpostsOrdenados: any = [];
  pageSize: number = 10;
  currentPage: number = 1;
  pages: number[] = [];
  totalPages: number = 0;
  maxPagesToShow: number = 3;

  
  constructor(private blogService: BlogService, private spinner: NgxSpinnerService){
    
  }
  ngOnInit(): void {
    this.allPost()
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


}





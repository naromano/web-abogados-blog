import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PostModel } from 'src/app/models/post';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post!: PostModel;
  renderizado: SafeHtml = ''
  id: string = ""

  constructor(private activatedRoute: ActivatedRoute, private blogService: BlogService, private sanitizer: DomSanitizer){
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
      console.log(params['id'])
      });
    }
  ngOnInit(): void {
    this.getPost()
    
  }


  getPost(){
    this.blogService.onePost(this.id).subscribe(resp => {
      console.log(resp)
      this.renderizado = this.sanitizer.bypassSecurityTrustHtml(resp.text);
    console.log(this.renderizado)
      this.post = {
        title: resp.title,
        image: resp.image,
        text: resp.text,
        user: resp.user,
        date: resp.date


      };
    });

  }

}

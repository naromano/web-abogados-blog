import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PostModel } from 'src/app/models/post';
import { BlogService } from 'src/app/services/blog.service';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage'
import { uploadBytes } from '@firebase/storage';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit{
  
  authToken = localStorage.getItem("auth_token")

  constructor (private fb: UntypedFormBuilder, private sanitizer: DomSanitizer, private blogService: BlogService, private storage: Storage, private router: Router, private spinner: NgxSpinnerService) {
    
  }
  ngOnInit(): void {

    this.tokenValid() 
  }
  renderizado: SafeHtml = ''
  imagePost = '';

  myForm: UntypedFormGroup = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
    image: ['', [Validators.required]],
    user: ['', [Validators.required]]
  })

  tokenValid(){
    if(this.authToken === null){
      this.router.navigateByUrl(`/`);
    }
  }

  createPost(){
    this.spinner.show()
    const post: PostModel = {
      title: this.myForm.get("title")?.value,
      image: this.imagePost,
      text: this.myForm.get("text")?.value,
      user: this.myForm.get("user")?.value,
      date: "",
      id: ""
    }

    this.blogService.createPost(post)?.subscribe(resp =>{
      window.alert(
        'Publicacion Creada'
      )
      const id = resp.id
      this.router.navigateByUrl(`/publicacion/${id}`);
    })

  }

  uploadImage($event: any){
    this.spinner.hide()
    const file = $event.target.files[0];
    
    const imgRef = ref(this.storage, `images/posts/${file.name}`);
    uploadBytes(imgRef, file)
    .then(async resp =>{
      const url = await getDownloadURL(imgRef)
      this.imagePost = url
      this.spinner.show()

    } )
    .catch(error => console.log(error))
  }

}

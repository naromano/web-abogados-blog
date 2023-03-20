import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CKEditorComponent } from 'ng2-ckeditor';
import { PostModel } from 'src/app/models/post';
import { BlogService } from 'src/app/services/blog.service';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage'
import { uploadBytes } from '@firebase/storage';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent{

  constructor (private fb: UntypedFormBuilder, private sanitizer: DomSanitizer, private blogService: BlogService, private storage: Storage) {
    
  }
  name: string = "holaaa"
  renderizado: SafeHtml = ''
  htmlCode = '<h1>Hello World!</h1>';
  imagePost = '';

  myForm: UntypedFormGroup = this.fb.group({
    title: ['', [Validators.required]],
    text: ['', [Validators.required]],
    image: ['', [Validators.required]],
    user: ['', [Validators.required]]
  })


  createPost(){
    const post: PostModel = {
      title: this.myForm.get("title")?.value,
      image: this.imagePost,
      text: this.myForm.get("text")?.value,
      user: this.myForm.get("user")?.value,
      date: ""
    }

    this.blogService.createPost(post)?.subscribe(resp =>{
      console.log(resp)
    })

  }

  uploadImage($event: any){
    Swal.showLoading()
    const file = $event.target.files[0];
    
    const imgRef = ref(this.storage, `images/posts/${file.name}`);
    uploadBytes(imgRef, file)
    .then(async resp =>{
      const url = await getDownloadURL(imgRef)
      this.imagePost = url
      Swal.close()

    } )
    .catch(error => console.log(error))

    

  }

  mostrar(){
    this.name = this.myForm.get("text")?.value
    console.log(this.myForm.get("title")?.value)
    

    this.renderizado = this.sanitizer.bypassSecurityTrustHtml(this.name);
    console.log(this.renderizado)
  }

}

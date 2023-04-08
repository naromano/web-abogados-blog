
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PostModel } from 'src/app/models/post';
import { BlogService } from 'src/app/services/blog.service';
import { Storage, ref, getDownloadURL } from '@angular/fire/storage'
import { uploadBytes } from '@firebase/storage';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  authToken = localStorage.getItem("auth_token")
  id: string = ""

  constructor (private activatedRoute: ActivatedRoute,private fb: UntypedFormBuilder, private sanitizer: DomSanitizer, private blogService: BlogService, private storage: Storage, private router: Router, private spinner: NgxSpinnerService) {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id']
      });
    
  }
  ngOnInit(): void {

    this.tokenValid()
    this.getPost()
  }
  renderizado: SafeHtml = ''
  imagePost: any
  prueba = ''

  myForm: UntypedFormGroup = this.fb.group({
    title: [this.prueba, [Validators.required]],
    text: ['', [Validators.required]],
    image: ['', [Validators.required]],
    user: ['', [Validators.required]]
  })

  tokenValid(){
    if(this.authToken === null){
      this.router.navigateByUrl(`/`);
    }
  }

  getPost(){
    this.spinner.show()
    this.blogService.onePost(this.id).subscribe(resp =>{
      this.myForm.get("title")?.setValue(resp.title)
      this.myForm.get("text")?.setValue(resp.text)
      this.myForm.get("user")?.setValue(resp.user)
      this.imagePost = resp.image
      this.spinner.hide()

    })
  }

  editPost(){
    this.spinner.show()
      const post: PostModel = {
        title: this.myForm.get("title")?.value,
        image: this.imagePost,
        text: this.myForm.get("text")?.value,
        user: this.myForm.get("user")?.value,
        date: "",
        id: ""
      
    }
    this.blogService.updatePost(this.id, post)?.subscribe(resp =>{
      window.alert(
        'Publicacion modificada'
      )
      const id = resp.id
      this.router.navigateByUrl(`/publicacion/${this.id}`);
    })
}

  uploadImage($event: any){
    this.spinner.show()
    const file = $event.target.files[0];
    const imgRef = ref(this.storage, `images/posts/${file.name}`);
    uploadBytes(imgRef, file)
    .then(async resp =>{
      const url = await getDownloadURL(imgRef)
      this.imagePost = url
      this.spinner.hide()
    })
    .catch(error => console.log(error))
  }
}

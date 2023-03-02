import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { CKEditorComponent } from 'ng2-ckeditor';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent{

  constructor (private fb: UntypedFormBuilder, private sanitizer: DomSanitizer) {
    
  }
  name: string = "holaaa"
  renderizado: SafeHtml = ''
  htmlCode = '<h1>Hello World!</h1>';

  myForm: UntypedFormGroup = this.fb.group({
    title: ['', [Validators.required]],
    html: ['', [Validators.required]],
    img: ['', [Validators.required]],
  })

  mostrar(){
    this.name = this.myForm.get("html")?.value
    console.log(this.myForm.get("title")?.value)
    

    this.renderizado = this.sanitizer.bypassSecurityTrustHtml(this.name);
    console.log(this.renderizado)
  }

}

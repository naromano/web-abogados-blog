import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {
  
  constructor (private fb: UntypedFormBuilder, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {

  }
  name: string = "holaaa"
  renderizado: SafeHtml = ''
  htmlCode = '<h1>Hello World!</h1>';

  myForm: UntypedFormGroup = this.fb.group({
    html: ['', [Validators.required]],
  })

  mostrar(){
    this.name = this.myForm.get("html")?.value
    

    this.renderizado = this.sanitizer.bypassSecurityTrustHtml(this.name);
    console.log(this.renderizado)
  }

}

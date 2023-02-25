
import { Component, OnInit } from '@angular/core';
import { FormControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

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
  }
}

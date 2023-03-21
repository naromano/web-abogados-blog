import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, UntypedFormGroup } from '@angular/forms';
import { ContactFormService } from '../../services/contact-form-service.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {


  

  constructor( private fb: FormBuilder, private contactService: ContactFormService, private router: Router) {
    this.crearFormulario();
  }

  forma: UntypedFormGroup = this.fb.group({
    nombre: ['', [Validators.required]],
    correo: ['', [Validators.required]],
    telefono: ['', [Validators.required]],
    motivoConsulta: ['', [Validators.required]],
    mensaje: ['', [Validators.required]],
  })


  ngOnInit(): void {
    this.router.events.subscribe((evt) =>{
      if(!(evt instanceof NavigationEnd)){
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  get nombreNoValido(){
    return this.forma.get('nombre')?.invalid && this.forma.get('nombre')?.touched;
  }
  get correoNoValido(){
    return this.forma.get('correo')?.invalid && this.forma.get('correo')?.touched;
  }
  get telefonoNoValido(){
    return this.forma.get('telefono')?.invalid && this.forma.get('telefono')?.touched;
  }
  get motivoConsultaNoValido(){
    return this.forma.get('motivoConsulta')?.invalid && this.forma.get('motivoConsulta')?.touched;
  }
  get mensajeNoValido(){
    return this.forma.get('mensaje')?.invalid && this.forma.get('mensaje')?.touched;
  }

  crearFormulario(){
    this.forma = this.fb.group({
      nombre: ['', [Validators.required , Validators.minLength(3)]],
      correo: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      telefono: ['', Validators.required],
      motivoConsulta: ['Motivo de consulta', Validators.required],
      mensaje: ['', Validators.required],
    });
  }

  guardar(){
    const formValues = this.forma.value;
    if (this.forma.valid){
      this.contactService.sendForm(formValues).subscribe();
      this.clearForm();
      alert('Mensaje enviado correctamente');
    }
  }

  clearForm() {
    this.forma.reset();
  }
}

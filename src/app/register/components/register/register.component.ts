import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from './../../../core/services/register/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  item: any;
  value: number;
  form: FormGroup;
  hide = true;
  hideV = true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private registerService: RegisterService,
    private router: Router,
  ) {
    this.buildForm();
  }

  ngOnInit(): any {}

  send(event: Event): void {
    event.preventDefault();
    console.log(this.form.value);
    if (this.form.valid) {
      const value = this.form.value;
      this.registerService.register(value).subscribe((data) => {
        console.log(data);
        this.router.navigateByUrl('/login');
      });
    }
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.email]],
      compañia: ['', [Validators.required]],
      contraseña: ['', [Validators.required, Validators.minLength(6)]],
      contraseñav: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit(event: Event): void {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
      /* this.hallazgoService.onSubmit(value).subscribe((data) => {
        console.log(data);
      }); */
    }
  }
}

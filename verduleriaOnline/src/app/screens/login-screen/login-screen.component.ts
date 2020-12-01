import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, PatternValidator, Validators  } from '@angular/forms';
import { UserService } from 'src/app/Services/user/user.service';
declare var $: any;


@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.less']
})
export class LoginScreenComponent implements OnInit {

  public contactForm: FormGroup;

  // tslint:disable-next-line: max-line-length
  private rutPattern: any = /^[0-9]+-[0-9kK]{1}$/;

  login = {rut: null, contrasena: null};

  constructor(private loginService: UserService) {
    this.contactForm = this.createForm();
  }

  public loginUsuario(): any {
    this.loginService.loginUsuario(this.login).subscribe (
      datos => {
        console.log(datos);
      }
    );
  }

  get rut(): AbstractControl{ return this.contactForm.get('rut'); }
  get contrasena(): AbstractControl { return this.contactForm.get('contrasena'); }


  createForm(): FormGroup {
    return new FormGroup({
      rut: new FormControl('', [Validators.required, Validators.pattern(this.rutPattern)]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(10)])
    });
  }

  onResetForm(): void {
    this.contactForm.reset();
  }

  onSaveForm(): void {
    if (this.contactForm.valid) {
      this.onResetForm();
    }
  }
  ngOnInit(): void {}



}


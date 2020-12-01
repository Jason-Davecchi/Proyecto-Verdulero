import { Component, OnInit } from '@angular/core';
import { Form, FormControl, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-register-screen',
  templateUrl: './register-screen.component.html',
  styleUrls: ['./register-screen.component.less']
})
export class RegisterScreenComponent implements OnInit {

  inputEmail: FormControl;
  inputPassword1: FormControl;
  inputPassword2: FormControl;

  // proximas validaciones
  constructor(  ) {
    this.inputEmail = new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(40),
    ]),
    this.inputPassword1 = new FormControl('', [
      Validators.minLength(8),
    Validators.maxLength(16),
    ]),
    this.inputPassword2 = new FormControl('', [
      Validators.minLength(8),
    Validators.maxLength(16),
    ]);

  }
  ngOnInit(): void {

    $(document).ready(

      (function( ) {
        'use strict';
        window.addEventListener('load', function() {
          // Fetch all the forms we want to apply custom Bootstrap validation styles to
          var forms = document.getElementsByClassName('needs-validation');
          // Loop over them and prevent submission
          var validation = Array.prototype.filter.call(forms, function(form) {
            form.addEventListener('submit', function(event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add('was-validated');
            }, false);
          });
        }, false);
      })()
    );

  }
}
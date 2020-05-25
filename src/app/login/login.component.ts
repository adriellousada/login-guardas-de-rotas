import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private authService: LoginService) {}

  onSignin() {
    this.authService.signIn(this.form.value);
  }

  ngOnInit():any {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

}
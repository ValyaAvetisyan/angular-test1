import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isInValidUser = false;
  public invalidUserMessage = 'Wrong credential, please try again';
  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService) {
  }

  ngOnInit(): void {
  }


  login(): void {
    if (this.authService.isValidUser(this.loginForm.get('username')?.value, this.loginForm.get('password')?.value)) {
      this.router.navigate(['home']);
      this.isInValidUser = false;
    }
    this.isInValidUser = true;
  }
}

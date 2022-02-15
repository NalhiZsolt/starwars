import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginData } from 'src/app/models/login-data';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private httpService: HttpService, private router: Router) {
    this.loginForm = new FormGroup({
      username: new FormControl('',[ Validators.required, Validators.minLength(1)]),
      password: new FormControl('',[ Validators.required, Validators.minLength(1)])
    })
  }

  ngOnInit(): void {
  }
  login() {
    const loginData: LoginData = this.loginForm.value
    console.log(loginData);
    this.httpService.login(loginData).subscribe(
      data => {console.log(data); this.router.navigate(['/select-character'])},
      error => console.error(error)
    )
  }
}

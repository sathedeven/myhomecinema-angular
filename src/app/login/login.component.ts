import { Component } from '@angular/core';
import { Login } from './Login';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent {

  login = new Login();
  users: any[];
  isValid = false;
  isLoggedin = true;

  constructor(private router: Router, private loginService: LoginService) { 
    this.loginService.getUsers()
      .subscribe(users => this.users = users );
  }

  onSubmit() {
    let name = this.login.username;
    let password = this.login.password;

    let user = this.users.find(currUser => currUser.username == name && currUser.password ==password);
    // alert(name);
    // alert(password)
    // alert(user)
    if(user)
    {
      this.isValid = true;
      this.isLoggedin = true;
      this.router.navigate(['/home']);
    }
    else{
      this.isValid = false;
      this.isLoggedin = false;
    }

  }

}

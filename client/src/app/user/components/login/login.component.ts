import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UserInterface } from '../../user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSevice: AuthService, private router: Router) { }
  public user: UserInterface = {
    email: "",
    password: ""
  };

  ngOnInit(): void {
  }

  onLogin(){
    return this.authSevice.loginUser(this.user.email, this.user.password)
    .subscribe(data => {
      this.authSevice.setUser(data.user)
      let token = data.id;
      this.authSevice.setToken(token);
      this.router.navigate(['/home/perfil'])
    },
    error => console.log(error)
    );
  }

}

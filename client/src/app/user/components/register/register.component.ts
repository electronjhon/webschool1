import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../../user.interface';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  public user: UserInterface = {
    username: "",
    email: "",
    password: ""
  };

  ngOnInit(): void { }

  onRegister(): void {
    this.authService.registerUser(this.user.username, this.user.email, this.user.password)
      .subscribe(user => {
        this.authService.setUser(user)
        this.router.navigate(["/"])
      })
  }

}

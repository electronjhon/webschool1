import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/User/services/auth.service';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/User/user.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  panelOpenState = false;

  constructor(private authService: AuthService, private router: Router) { }
  user: UserInterface

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    console.log(this.user)
  }

  onLogout(): void {
    this.authService.logoutUser()
    this.router.navigate(['/'])
  }
}

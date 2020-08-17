import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/User/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
 
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  
  
  constructor(private authService: AuthService, private router: Router) { }
  public app_name = "Web School";

  ngOnInit(): void { }
  
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  onLogout(): void {
    this.authService.logoutUser()
    this.router.navigate(['/'])
  }
}

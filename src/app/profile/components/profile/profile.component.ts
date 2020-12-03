import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/core/models/proyecto.model';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userProfile: any;
  panelOpenState = false;
  sideBarOpen = true;
  value: any;
  id: Proyectos;

  constructor(
    private router: Router,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {

    this.userProfile = JSON.parse(this.userService.getUser());

  }
  toggleSideBar(): void {
    this.sideBarOpen = !this.sideBarOpen;
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 20);
  }
  logOt(): void {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }
}

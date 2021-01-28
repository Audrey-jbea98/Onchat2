import { Component, OnInit } from '@angular/core';

import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  redirectToHome(){
    this.router.navigateByUrl('dashboard/home');
  }

  redirectToContact(){
    this.router.navigateByUrl('dashboard/contact');
  }

  redirectToRegister(){
    this.router.navigateByUrl('register');
  }

  logOut(){
    this.router.navigateByUrl('login');
  }

}

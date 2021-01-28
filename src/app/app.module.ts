import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ValidationComponent } from './validation/validation.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes: Routes = [
  {
    path: 'dashboard', component: HeaderComponent,
    children: [
      {path: 'home', component: HomeComponent},
      {path: 'contact', component: ContactComponent},
      
      
    ]

  },
  {path: 'login', component: LoginComponent},
  
  {path: 'validation', component: ValidationComponent},
  {path: 'register', component: RegisterComponent},
  
  
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    ValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import {JoinUsComponent} from './join-us/join-us.component'
import {ProjectsComponent} from './projects/projects.component'
import { ContactUsComponent } from './contact-us/contact-us.component';
import {FooterComponent} from './footer/footer.component';
import{TesterComponent} from './tester/tester.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LoginComponent } from './auth/login/login.component';
const routes: Routes = [
  {path:'',component:LandingComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'whoweare',component:WhoWeAreComponent},
  {path:'joinus',component:JoinUsComponent} ,
  {path:'projects',component:ProjectsComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'footer',component:FooterComponent},
  {path:'test', component:TesterComponent},
  {path:'sign-in',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { DocDashComponent } from './component/admin/admin.component';
import { PatientDashComponent } from './component/customer-das/customer-das.component';
import { PatientInputFormComponent } from './customer/customer.component';
import { DoctorInputFormComponent } from './doctor-input-form/doctor-input-form.component';
import { ResultsComponent } from './results/results.component';
import { DoctorInputComponent } from './doctor-input/doctor-input.component';
import { MapComponent } from './component/map/map.component';
import { PatientsComponent } from './component/customers/customers.component';
import { CoverangeComponent } from './coverange/coverange.component';
import { NewComponentComponent } from './new-component/new-component.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home/signin', component: SigninComponent },
  { path: 'home/signup', component: SignupComponent },
  { path: 'home', component: LandingpageComponent },
  { path: 'admin', component: DocDashComponent },
  { path: 'customer', component: PatientDashComponent },
  { path:'customerinput', component: PatientInputFormComponent },
  { path:'admininput', component: DoctorInputFormComponent },
  { path: 'results', component: ResultsComponent },
  { path: 'admcomponent', component:  DoctorInputComponent},
  {path: 'googlemaps', component: MapComponent}, 
  {path:'customers',component: PatientsComponent},
  {path:'coverange', component:CoverangeComponent},
  {path:'dataplan' , component:NewComponentComponent},
  { path: '**', component: PageNotfoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }







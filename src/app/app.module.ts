import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TracingComponent } from './tracing/tracing.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResultsComponent } from './results/results.component';
import { DoctorInputComponent } from './doctor-input/doctor-input.component';
import { PatientInputFormComponent } from './customer/customer.component';
import { DoctorInputFormComponent } from './doctor-input-form/doctor-input-form.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './component/signin/signin.component';
import { SignupComponent } from './component/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { authInterceptorProviders } from './helpers/auth.interceptor';
import { DocDashComponent } from './component/admin/admin.component';
import { DoctorsComponent } from './component/admins/admins.component';
import { PatientDashComponent } from './component/customer-das/customer-das.component';
import { ContactsComponent } from './component/contacts/contacts.component';
import { PatientsComponent } from './component/customers/customers.component';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MapComponent } from './component/map/map.component';
import { ToastrModule } from 'ngx-toastr';
import { SearchPipe } from './search.pipe';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';
import { NewComponentComponent } from './new-component/new-component.component';
import { CoverangeComponent } from './coverange/coverange.component';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

@NgModule({
  declarations:[
    AppComponent,
    SearchPipe,
    MapComponent,
    TracingComponent,
    ResultsComponent,
    DoctorInputComponent,
    PatientInputFormComponent,
    DoctorInputFormComponent,
    LandingpageComponent,
    NavbarComponent,
    PageNotfoundComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    TracingComponent,
    DocDashComponent,
    DoctorsComponent,
    PatientDashComponent,
    ContactsComponent,
    PatientsComponent,
    SearchPipe,
    NewComponentComponent,
    CoverangeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule,
    MatButtonToggleModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [authInterceptorProviders,NgbModalConfig, NgbModal],
  bootstrap: [AppComponent],
    

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  
 }

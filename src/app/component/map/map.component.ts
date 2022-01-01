import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocationStorageService } from 'src/app/services/location-storage.service';
import { PatientInputService } from 'src/app/patient-input.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

declare var initMap: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  title = 'covidapp';

  constructor(
    private locationStorage: LocationStorageService,
    private router: Router,
    private resultsService: PatientInputService,
    private toastr: ToastrService
  ) {}
  //patient formatted_address
  storedlocation: any;
  storedcoord: any;
  storedcity: any;
  newInput: any = {
    name: null,
    symptoms: null,
  };
  patientInput: any = {
    user: null,
    name: null,
    phonenumber: null,
    location: null,
  };
  user_id: any;
  username: any;
  phonenumber:any;
  location:any;

  public address!: any;
  public locality!: any;
  public coordinates!: any;
  public queryResult!: string;

  // public location = {
  //   address: this.address,
  //   coordinates: this.coordinates,
  //   locality: this.locality,
  // };

  public addLocation() {
    this.location.address = this.address;
    this.location.coordinates = this.coordinates;
    this.location.locality = this.locality;
    this.locationStorage.setItem(this.address, JSON.stringify(this.location));
  }

  public getLocation(nameToRemove: string) {
    this.queryResult = this.locationStorage.getItem(nameToRemove);
  }

  public reset() {
    this.locationStorage.clear();
  }
  ngOnInit() {
    new initMap();
    this.user_id = localStorage.getItem('user_id');
    this.username = localStorage.getItem('username');
    this.phonenumber = localStorage.getItem('phonenumber');
    this.location = localStorage.getItem('location');
    
    
    
    // this.storedlocation = localStorage.getItem('address');
    // this.storedcoord = localStorage.getItem('coordinates');
    // this.storedcity = localStorage.getItem('locality');
  }

  submitInput(): void {
    // this.storedlocation = localStorage.getItem('address');
    // this.storedcoord = localStorage.getItem('coordinates');
    // this.storedcity = localStorage.getItem('locality');
    this.user_id = localStorage.getItem('user_id');
    this.username = localStorage.getItem('username');
    this.phonenumber = localStorage.getItem('phonenumber');
    this.location = localStorage.getItem('location');
    // let location = localStorage.getItem('location');
    let user = this.user_id;
    let name = this.username;
    let phonenumber= this.phonenumber;
    let location= this.location;

    let { symptoms } = this.newInput;
    this.patientInput = { user, name, phonenumber, location };
    console.log(this.patientInput);

    this.resultsService
      .addPatient(
        (user = this.user_id),
        (name = this.username),
         (phonenumber= this.phonenumber),
        (location = this.location),
        
      )
      .subscribe((data) => {
        console.log(data);
      });
    alert(
      'Your session has been updated successfully. Kindly wait the doctors feedback'
    );
    // this.router.navigate(['patient']);
  }
 
  back() {
    this.router.navigate(['patient']);
  }
}

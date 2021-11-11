import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DoctorInput } from '../admin-class/admin';
import { DoctorInputService } from '../admin.service';
import { ResultsRequestService } from '../results-service/results.service';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-doctor-input-form',
  templateUrl: './doctor-input-form.component.html',
  styleUrls: ['./doctor-input-form.component.css']
})
export class DoctorInputFormComponent implements OnInit {

  newInput: any = {
    name: null,
    status: null,
    recomendations: [],
    remarks: null,
  };
  patientsNames!: any[];
  patients: any[];
  PatId: any;

  showSuccess() {
    this.toastr.success('Recomendations successfully submitted and updated to the patients dashboard');
  }


  constructor(private doctorInputService: DoctorInputService, private authService: AuthService, private toastr: ToastrService, private router: Router , private resultRequestService: ResultsRequestService,) { }
  
  submitInput(): void {

    const { name, status, recomendations, remarks } = this.newInput;
    this.doctorInputService.patient(name, status, recomendations, remarks).subscribe(
      data => {
        // console.log(data);
      },
    );
    this.router.navigate(['results']);

  }
  public async ngOnInit(): Promise<void> {
    this.resultRequestService.onDoctorSelect.subscribe(value => {
      console.log('FROM Display Comp -----', value);
      this.PatId = value;
      if (this.PatId) {
        this.resultRequestService.getPatientsById(this.PatId).then(response => {
     
        })
      }
    })
    this.authService.getPatients().subscribe((res: any[]) => {
      this.patientsNames = res;
    
      this.patients = this.patientsNames.filter(patient => patient.id === this.PatId)

    })
  }
}

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {FormBuilder,FormGroup,} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-tuongee',
  templateUrl: './tuongee.component.html',
  styleUrls: ['./tuongee.component.css']
})
export class TuongeeComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
 form:any = {
   name:null,
   email:null,
   subject:null,
   message:null
 }
  constructor(
    // private contactService:ContactService,
    private router:Router,private toastr: ToastrService, public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onSubmit(): void{
    // let {name,email,subject,message}= this.form;
    // this.contactService.post(name,email,subject,message).subscribe(
    //   (data) => {
    //     console.log(data)
    //     this.toastr.success('Mwangaza Little Readers Received Your Message');
    //   this.router.navigate (['contact'])
       
    //   },
    //   (err) => {
    //    console.log(err)
    //    this.toastr.error('Check Your Details ');
    //   });
      // );
      // this.dialogRef.close();
  }
}
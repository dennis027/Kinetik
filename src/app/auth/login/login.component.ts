import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = 'toaster-not';
  form;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(private authService: AuthService, private router: Router,
    private tokenStorage: TokenStorageService,private toastr: ToastrService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }

    this.form = {
      username: '',
      password: '',
    }
  }
  onSubmit() {
    this.authService.login(this.form).subscribe((res: any) => {
      console.log(res)
      localStorage.setItem('accessToken', res['token'])
      localStorage.setItem('username', res['username'])
      localStorage.setItem('user_id', res['user_id'])
      localStorage.setItem('role', res['role'])
    
     
  
      if ((res['role']) === "is_admin") {
        this.router.navigate(['admin']);
      }
      else if ((res['role'])== "is_partner"){
        this.router.navigate (['partner'])
      }
      else{
        this.router.navigate(['volunteer']);
      }
      this.toastr.success('Logged in successfully.Welcome to Mwangaza Readers.');

    }, error => {
      this.toastr.error('Kindly provide the correct credentials');
    })
   
  }

  reloadPage(): void {
    window.location.reload();
  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services//auth.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

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
    
      this.toastr.success('Logged in successfully.Welcome to Kinetik Internet.');
  
      if ((res['role']) === "is_admin") {
        this.router.navigate(['admin']);
      }
      else{
        this.router.navigate(['customer']);
      }

    }, error => {
      this.toastr.error('Kindly provide the correct credentials');
    })
   
  }

  reloadPage(): void {
    window.location.reload();
  }
}
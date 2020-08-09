import { Component, OnInit } from '@angular/core';
import { PucFormService } from 'src/app/services/puc-form.service';
import { LoginData } from 'src/app/models/login-data.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private pucFormService: PucFormService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(value: any) {
    console.log(value);
    let creds: LoginData = new LoginData(value.uname, value.pwd);
    this.pucFormService.login(creds).subscribe(
      (result) => {
        console.log(result);
        this.router.navigate(['/form'])
      },
      (error) => {
        console.log('Error' , error);
      }
    );
  }

}

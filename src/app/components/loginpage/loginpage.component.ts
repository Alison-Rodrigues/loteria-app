import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
})
export class LoginpageComponent {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  pwdFormControl = new FormControl('', [Validators.required]);

}

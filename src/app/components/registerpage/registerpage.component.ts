import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent {


  nameFormControl = new FormControl('', [Validators.required, Validators.maxLength(150)]);
  lastNameFormControl = new FormControl('', [Validators.required, Validators.maxLength(150)]);
  emailFormControl = new FormControl('', [Validators.required, Validators.email, Validators.maxLength(30)]);
  cpfFormControl = new FormControl('', [Validators.required, Validators.maxLength(11)]);
  cepFormControl = new FormControl('', [Validators.required, Validators.maxLength(8)]);
  streetFormControl = new FormControl('', [Validators.required, Validators.maxLength(150)]);
  neighborhoodFormControl = new FormControl('', [Validators.required, Validators.maxLength(150)]);


}

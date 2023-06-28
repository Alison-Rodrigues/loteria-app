import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ApiCepService } from 'src/app/services/api-cep.service';


interface State {
  value: string,
  viewValue: string
}
@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent {

  cep: any;
  info: any;
  birthdayDate: any;
  state: any;

  constructor(private apiCepService: ApiCepService,
    private formBuilder: NonNullableFormBuilder) {}


  formUser = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(30)]],
    lastName: ['', [Validators.required, Validators.maxLength(30)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(30)]],
    cpf: ['', [Validators.required, Validators.maxLength(11)]],
    cep: ['', [Validators.required, Validators.maxLength(9)]],
    street: ['', [Validators.required, Validators.maxLength(100)]],
    neighborhood: ['', [Validators.required, Validators.maxLength(100)]],
    city: ['', [Validators.required, Validators.maxLength(50)]],
    birthdayDate: ['', [Validators.required]],
    state: ['', [Validators.required]]
  })




  searchCep() {

    let cep = this.cep;

    this.apiCepService.searchCep(cep)
    .subscribe({
      next: data => this.updateForm(data),
      error: (error) => console.log(error)
    });

  }

  updateForm(data: any) {
    this.formUser.patchValue({
      street: data.street,
      neighborhood: data.neighborhood,
      city: data.city
    })
  }


  getErrorMessage(fieldName: string) {
    const field = this.formUser.get(fieldName);

    if(field?.hasError('required')) {
      return 'Campo obrigatório';
    }
    if(field?.hasError('maxlength')) {
      return 'Quantidade de caracteres excedida';
    }
    if(field?.hasError('email')) {
      return 'Insira um email válido';
    }

    return 'Campo inválido';
  }

  states: State[] = [
    {value: 'AC', viewValue: 'Acre (AC)'},
    {value: 'AL', viewValue: 'Alagoas (AL)'},
    {value: 'AP', viewValue: 'Amapá (AP)'},
    {value: 'AM', viewValue: 'Amazonas (AM)'},
    {value: 'BA', viewValue: 'Bahia (BA)'},
    {value: 'CE', viewValue: 'Ceará (CE)'},
    {value: 'ES', viewValue: 'Espírito Santo (ES)'},
    {value: 'GO', viewValue: 'Goiás (GO)'},
    {value: 'MA', viewValue: 'Maranhão (MA)'},
    {value: 'MT', viewValue: 'Mato Grosso (MT)'},
    {value: 'MG', viewValue: 'Minas Gerais (MG)'},
    {value: 'PA', viewValue: 'Pará (PA)'},
    {value: 'PB', viewValue: 'Paraíba (PB)'},
    {value: 'PR', viewValue: 'Paraná (PR)'},
    {value: 'PE', viewValue: 'Pernambuco (PE)'},
    {value: 'PI', viewValue: 'Piauí (PI)'},
    {value: 'RJ', viewValue: 'Rio de Janeiro (RJ)'},
    {value: 'RN', viewValue: 'Rio Grande do Norte (RN)'},
    {value: 'RS', viewValue: 'Rio Grande do Sul (RS)'},
    {value: 'RO', viewValue: 'Rondônia (RO)'},
    {value: 'RR', viewValue: 'Roraima (RR)'},
    {value: 'SC', viewValue: 'Santa Catarina (SC)'},
    {value: 'SP', viewValue: 'São Paulo (SP)'},
    {value: 'SE', viewValue: 'Sergipe (SE)'},
    {value: 'TO', viewValue: 'Tocantins (TO)'}
  ]




}

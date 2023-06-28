import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { NgxMaskModule } from 'ngx-mask'
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    RegisterpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    NgIf,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    NgxMaskModule.forRoot(),
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'pt-br'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

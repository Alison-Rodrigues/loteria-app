import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { RegisterpageComponent } from './components/registerpage/registerpage.component';

const routes: Routes = [
  {path: '', redirectTo: "sign-in", pathMatch: "full"},
  {path: 'sign-in', component: LoginpageComponent},
  {path: 'sign-up', component: RegisterpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

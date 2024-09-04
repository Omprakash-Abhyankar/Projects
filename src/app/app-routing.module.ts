import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './User/register/register.component';
import { LoginComponent } from './User/login/login.component';

const routes: Routes = [  
  {path:'',pathMatch:'full',redirectTo:'register'},  
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

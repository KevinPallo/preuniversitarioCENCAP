import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAccountComponent } from './pages/home-account/home-account.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


const routes: Routes = [
    {path:'inicio',component:HomeComponent},
    {path:'login/:parametro',component:LoginComponent},
    {path:'registro',component:RegisterComponent},
    {path:'home',component:HomeAccountComponent},
    {path:'**',component:HomeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })

export class AppRoutingModule { }
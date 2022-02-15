import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseFoodComponent } from './browse-food/browse-food.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path : '' , component : LandingPageComponent},
{path : 'login' , component : LoginComponent},
{path : 'sign-up' , component : SignUpComponent},
{path : 'browse-food' , component : BrowseFoodComponent},
{path : 'profile' , component : ProfileComponent},
//{path : 'landing-page' , component : LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

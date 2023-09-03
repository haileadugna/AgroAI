import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FishFarmComponent } from './fish-farm/fish-farm.component';
import { AgricultureComponent } from './agriculture/agriculture.component';
import { AgroFishAiComponent } from './agro-fish-ai/agro-fish-ai.component';
import { ForumComponent } from './forum/forum.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: "", component: LandingComponent },
  { path: "home", component: HomeComponent },
  { path: "aboutus", component: AboutUsComponent },
  { path: "fishfarm", component: FishFarmComponent },
  { path: "agriculture", component: AgricultureComponent},
  { path: "agrofishai", component: AgroFishAiComponent },
  { path: "forum", component: ForumComponent },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignUpComponent },
  { path: "about", component: AboutComponent},
  { path: "profile", component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

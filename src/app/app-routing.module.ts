import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent} from "./loginpage/loginpage.component";
import { RegisterpageComponent } from "./registerpage/registerpage.component";

const routes: Routes = [
  { path: '', component: HomepageComponent},
  { path: 'login', component: LoginpageComponent},
  {path: 'register', component: RegisterpageComponent}
]

@NgModule({
  declarations: [
    // LoginpageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

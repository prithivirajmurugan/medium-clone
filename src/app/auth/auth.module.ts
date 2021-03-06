import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { RegisterComponent } from "./components/register/register.component";
import { AuthService } from "./services/auth.service";
import { authReducers } from "./store/reducers";

const routes: Routes = [
  {path:'register',component:RegisterComponent}
]

@NgModule({
  declarations:[RegisterComponent],
  imports: [CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', authReducers),
  ],
  providers:[AuthService]
})
export class AuthModule { }
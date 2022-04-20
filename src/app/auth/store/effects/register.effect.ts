import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { request } from "http";
import { switchMap } from "rxjs/operators";
import { CurrenUserInterface } from "src/app/shared/types/currentUser.interface";
import { AuthService } from "../../services/auth.service";
import { registerAction, registerSuccessAction } from "../actions/register.action";

@Injectable()
export class RegisterEffect{
  constructor(private actions$: Actions,private authService:AuthService) {
    
  }
  register$ = createEffect(() => this.actions$.pipe(
    ofType(registerAction),
    switchMap({ request })=> {
      return this.authService.register(request).pipe(map((currentUser: CurrenUserInterface) => {
      return registerSuccessAction({currentUser})
    }))
  }))
}
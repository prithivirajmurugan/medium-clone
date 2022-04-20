import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "../actionTypes";
import { RegisterRequestInterface } from '../../types/registerRequest.interface';
import { CurrenUserInterface } from "src/app/shared/types/currentUser.interface";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: RegisterRequestInterface }>()
)


export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: CurrenUserInterface }>()
)

export const registerFailuresAction = createAction(
  ActionTypes.REGISTER_FAILURE
)
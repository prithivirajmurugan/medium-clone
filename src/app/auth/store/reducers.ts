import { Action, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { registerAction } from "./actions/register.action";

const initialState: AuthStateInterface={
  isSubmitting: false
}

const _authReducer = createReducer(initialState, on(registerAction, (state): AuthStateInterface => {
  return {
    ...state,
    isSubmitting: true
  }
}))

export function authReducers(state: AuthStateInterface, action: Action) {
  return _authReducer(state,action)
}
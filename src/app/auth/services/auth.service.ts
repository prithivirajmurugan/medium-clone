import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


import { CurrenUserInterface } from "src/app/shared/types/currentUser.interface";
import { RegisterRequestInterface } from "../types/registerRequest.interface";
import { environment } from "src/environments/environment";
import { AuthResponseInterface } from "../types/authResponse.interface";

@Injectable()
export class AuthService{
  constructor(private http: HttpClient) {
    
  }
  register(data: RegisterRequestInterface): Observable<CurrenUserInterface> {
    const url = environment.apiUrl + '/users';
    return this.http.post<AuthResponseInterface>(url, data).pipe(map((response:AuthResponseInterface)=>response.user));
     
   }
}
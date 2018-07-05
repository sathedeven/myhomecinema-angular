import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Login } from "./login";
import { catchError } from 'rxjs/operators';
import { Injectable } from "@angular/core" 

@Injectable()
export class LoginService {
    username : string;
    constructor(private http: HttpClient){}

    getUsers() : Observable<Login[]>{
        return this.http.get<Login[]>('assets/users/users.json').pipe(
            catchError(this.handleError));
    }

    private handleError(err:HttpErrorResponse){
        console.error(err);
        return Observable.throw(err.error () || 'server error');
    }

}

import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class TODOService {
    constructor(private http: Http){

    }

    getToDos():Observable<any> {

        return this.http.get('http/getTodos');
    }
}
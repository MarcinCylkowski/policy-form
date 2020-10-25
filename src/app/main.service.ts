import { policy } from './../models/policy';
import { Injectable } from '@angular/core';
import {HttpClient, HttpResponse, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MainService {


  constructor(private http: HttpClient) { }

  postPolicy(policy: policy){
    return this.http.post('http://localhost:8080/api/house', policy);
  }

}

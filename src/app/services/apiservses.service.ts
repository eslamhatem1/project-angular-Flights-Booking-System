
import { Observable } from 'rxjs';
import { register } from './../../shared/models/register';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ApiservsesService {

  constructor(private hhtp:HttpClient) { }

  getall(url:string):Observable<any>{
    return this.hhtp.get(`${environment.baseUrl}${url}`)
  }

  getid(url:string):Observable<any>
  {
    return this.hhtp.get(`${environment.baseUrl}${url}`)
  }

  craete(url:string,register:register):Observable<any>{
    return this.hhtp.post(`${environment.baseUrl}${url}`,register)
  }

  update(url:string,register:register):Observable<any>{
    return this.hhtp.put(`${environment.baseUrl}${url}`,register)
  }

  delete(url:string):Observable<any>
  {
    return this.delete(`${environment.baseUrl}${url}`)
  }

}

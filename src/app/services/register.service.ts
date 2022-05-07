import { register } from './../../shared/models/register';
import { mainapi } from 'src/shared/models/main';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiservsesService } from './apiservses.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private servises:ApiservsesService) { }

  get():Observable<any>{
    return this.servises.getall("/api/GetRegisterationData/getRegisterationTable")
  }

  post(data:register):Observable<any>{
    return this.servises.craete("/api/GetRegisterationData/SaveClientData",data)
  }

  loginstatues=new BehaviorSubject<boolean>(this.isloggedin())
  login(email:string,password:string){
    localStorage.setItem('email',email)
    localStorage.setItem('password',password)
    this.loginstatues.next(true)

  }


  logout(){
    localStorage.removeItem('email')
    localStorage.removeItem('password')
    this.loginstatues.next(false)
  }


  isloggedin():boolean{
    let email=localStorage.getItem('email');
    let password=localStorage.getItem('password');

    return email!=null && password!=null;

  }




}

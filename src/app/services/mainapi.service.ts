import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiservsesService } from './apiservses.service';

@Injectable({
  providedIn: 'root'
})
export class MainapiService {

  constructor(private servises:ApiservsesService) { }

  get():Observable<any>{
    return this.servises.getall("/api/GetTicketData/getTicketDataController")
  }
  getid(id:number):Observable<any>{
    return this.servises.getid(`/api/GetTicketData/getTicketDataControllerid?id=${id}`)
  }
}


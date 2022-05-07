import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reservation } from 'src/shared/models/reservation ';
import { ApiservsesService } from './apiservses.service';

@Injectable({
  providedIn: 'root'
})
export class ResevationService {

  constructor(private http:HttpClient) { }


  post(data:reservation):Observable<any>{
    return this.http.post("http://localhost:12556/api/GetReservation/Reservation",data)
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  refillFlights:[]=[]
  afterRefill:any;
  constructor() { }

  ngOnInit(): void {
    this.getDataFromLocalStorage()
  }

  getDataFromLocalStorage(){
   this.afterRefill=JSON.parse(localStorage.getItem('refillFlights')|| '{}')

   console.log( this.afterRefill)
  }

}

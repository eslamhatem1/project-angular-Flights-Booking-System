import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { flight } from 'src/shared/models/flight';
import { FooterService } from 'src/shared/services/service-footer/footer.service';
import { NavService } from 'src/shared/services/service-nav/nav.service';
import { HomeService } from '../../../shared/services/home/home.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  active = 1;
  data: any;
  param: any;
  param2: any;
  flights: any[] = [];
  refillFlights: any[] = [];
  filterdArray: any;
  model: NgbDateStruct | undefined;
  filterInputs = [
    { key: 'to', value: '' },
    { key: 'from', value: '' },
    { key: 'Departing', value: '' },
  ];
  param3: any;
  refillFlights2: any;
  // currentLang: string;

  constructor(
    private router: Router,
    private toastr: ToastrService,
    public HomeService: HomeService,
    private fg: FormBuilder,
    public ftr: FooterService,
    public nav: NavService
  ) {}
  public searchForm = this.fg.group({
    leaving_Place: ['', [Validators.required]],
    going_Place: ['', [Validators.required]],
    departing_date: ['', [Validators.required]],
  });

  ngOnInit() {
    this.refillFlights = this.getDataFromService();
    this.nav.show();
    this.ftr.show();

  }

  getDataFromService() {
    this.flights = this.HomeService.getFlights;

    return this.flights;
  }

  OnSearch() {
    if(!this.searchForm.valid){
      this.toastr.error('fill all inputs ! ')
    }
    else {
   // this.refillFlights = this.flights;
   this.param = this.searchForm.controls.going_Place.value;
   this.param2 = this.searchForm.controls.leaving_Place.value;
   this.param3 = this.searchForm.controls.departing_date.value;
    let formattedDate = (moment(this.param3)).format('llll')
   this.param3=formattedDate
   this.filterInputs[0].value = this.param;
   this.filterInputs[1].value = this.param2;
   this.filterInputs[2].value = this.param3;
      this.filterWord(this.param);

   this.router.navigateByUrl('search');
    }

  }

  //filter By Goging to input
  filterWord(searchKey: string) {
    this.refillFlights = this.refillFlights.filter(
      (fight) => fight.to == searchKey
    );

    localStorage.setItem('refillFlights', JSON.stringify(this.refillFlights));

    this.searchByFromInput(this.param2);
  }

  //filter By leaving from  input


  searchByFromInput(searchKey: string) {
    this.refillFlights = this.refillFlights.filter(
      (fight) => fight.from == searchKey
    );

    this.searchByDateInput(this.param3);
  }

    //filter By date input

  searchByDateInput(searchKey: string) {
    this.refillFlights = this.refillFlights.filter(
      (fight) => fight.Departing == searchKey
    );
  }



}

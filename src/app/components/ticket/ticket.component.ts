import { Component, OnInit } from '@angular/core';
import { FooterService } from 'src/shared/services/service-footer/footer.service';
import { NavService } from 'src/shared/services/service-nav/nav.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  flight: any;
  personInfo: any;
  constructor(
    public ftr: FooterService,
    public nav: NavService
  ) {}

  ngOnInit(): void {
    this.getDataFromLocalStorage();
    this.nav.show();
    this.ftr.hide();
  }

  getDataFromLocalStorage() {
    this.flight = JSON.parse(localStorage.getItem('flight') || '{}');
    this.personInfo = JSON.parse(
      localStorage.getItem('bookinginfoWithPerson') || '{}'
    );
  }
}

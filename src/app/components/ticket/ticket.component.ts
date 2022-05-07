import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainapiService } from 'src/app/services/mainapi.service';
import { mainapi } from 'src/shared/models/main';
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
    public nav: NavService,
    private servise:MainapiService,
    private active:ActivatedRoute
  ) {}

  theflight=new mainapi();
  ngOnInit(): void {
    this.getDataFromLocalStorage();
    this.nav.show();
    this.ftr.hide();

    this.active.paramMap.subscribe(param=>

      {

        let id=Number(param.get('id'));
        this.servise.getid(id).subscribe(
          (Response:any)=>{
            this.theflight=Response
            console.log(Response)
          }
        )
      })

      


  }

  getDataFromLocalStorage() {
    this.flight = JSON.parse(localStorage.getItem('flight') || '{}');
    this.personInfo = JSON.parse(
      localStorage.getItem('bookinginfoWithPerson') || '{}'
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainapiService } from 'src/app/services/mainapi.service';
import { mainapi } from 'src/shared/models/main';
import { FooterService } from 'src/shared/services/service-footer/footer.service';
import { NavService } from 'src/shared/services/service-nav/nav.service';
import { HomeService } from '../../../shared/services/home/home.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss'],
})
export class FlightComponent implements OnInit {
  id: any;
  flight:any;
  constructor(
    private _activedRoute: ActivatedRoute,
    private HomeService: HomeService,
    public ftr: FooterService,
    public nav: NavService,
    private servise:MainapiService,
    private active:ActivatedRoute
  ) {}

  theflight=new mainapi();
  ngOnInit(): void {
    this.id = this._activedRoute.snapshot.params['id'];
    this.getflight();
    this.nav.show();
    this.ftr.hide();

    this.active.paramMap.subscribe(param=>

      {

        let id=Number(param.get('id'));
        this.servise.getid(id).subscribe(
          (Response:any)=>{
            this.theflight=Response
          }
        )
      })

  }

  getflight() {
   this.flight= this.HomeService.getFlight(this.id);
  }
}

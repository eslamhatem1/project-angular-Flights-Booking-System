import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterService } from 'src/shared/services/service-footer/footer.service';
import { NavService } from 'src/shared/services/service-nav/nav.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  clients: any;
  clientsInfo: any;
  clear : any;
  check: any;

  constructor(public ftr : FooterService,
    public nav: NavService,
    private router: Router,
    ) {    this.check= setInterval(this.checkToken,1000)
    }

  ngOnInit(): void {
    
    this.nav.show();
    this.ftr.show();
   this. getDataFromLocalStorage()

  }

 checkToken = ()=>{
  (!localStorage.getItem('userdata'))&&this.router.navigateByUrl('/home')
  this.clear=clearInterval(this.check)

  }


  getDataFromLocalStorage(){
    this.clients = JSON.parse(localStorage.getItem('bookingList') || '{}');

  }

}

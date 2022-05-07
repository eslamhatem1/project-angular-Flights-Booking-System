import { Component, OnInit } from '@angular/core';
import { MainapiService } from 'src/app/services/mainapi.service';
import { mainapi } from 'src/shared/models/main';

@Component({
  selector: 'app-mainapi',
  templateUrl: './mainapi.component.html',
  styleUrls: ['./mainapi.component.scss']
})
export class MAinapiComponent implements OnInit {

  data:mainapi[]=[]
  isshow:boolean=false
  constructor(private sevises:MainapiService) { }

  ngOnInit(): void {

  this.sevises.get().subscribe(
    (Response:any)=>{

      this.data=Response

    }

  )
  }



}

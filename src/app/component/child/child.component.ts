import { mainapi } from 'src/shared/models/main';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() refillFlights:mainapi[]=[]

  @Input() isshow:boolean=true

  ngOnInit(): void {
  }

  img:string="../../../assets/images/dubai.jpg"
}

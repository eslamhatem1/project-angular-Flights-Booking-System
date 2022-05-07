import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { RegisterService } from 'src/app/services/register.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private servise:RegisterService,private router :Router, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.servise.logout();
    this.toastr.success("you are logout successfully")
    this.router.navigateByUrl("/home")


  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
// import { StudentComponent } from './student/student.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from '../auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { FlightComponent } from './flight/flight.component';
import { SearchComponent } from './search/search.component';
import { TicketComponent } from './ticket/ticket.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component'; // <-- import the module


@NgModule({
  declarations: [HomeComponent,PageNotFoundComponent,LoginComponent, FlightComponent, SearchComponent, TicketComponent, AdminComponent, BookingComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule

  ],exports:[
  ],
})
export class LayoutModule { }

import { LogoutComponent } from './../component/logout/logout.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FlightComponent } from './flight/flight.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { BookingComponent } from './booking/booking.component';
import { TicketComponent } from './ticket/ticket.component';
import { AdminComponent } from './admin/admin.component';

import { MAinapiComponent } from '../component/mainapi/mainapi.component';
import { AuthenticationGuard } from '../authentication.guard';
import { AuthGuard } from '../auth.guard';
import { NavbarComponent } from 'src/shared/navbar/navbar.component';

const routes: Routes = [
  { path: '', redirectTo:'/home',pathMatch:'full' },

  { path: 'home', component: HomeComponent },
  { path: 'flight/:id', component:FlightComponent},
  { path: 'search', component:SearchComponent },
  { path: 'book/:id', component:BookingComponent,canActivate:[AuthGuard] },
  { path: 'ticket', component:TicketComponent},
  { path: 'ticket/:id', component:TicketComponent},
  { path: 'mainapi/:id', component:MAinapiComponent},
  { path: 'mainapi/:id', component:MAinapiComponent },
  { path: 'mainapi', component:MAinapiComponent },
  { path: 'logout', component:LogoutComponent },
  { path: 'navbar', component:NavbarComponent },
  // { path: 'auth/login', component: LoginComponent },


  { path: 'admin', component: AdminComponent  },
  {path:'**',component: PageNotFoundComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseDirective } from '../shared/directives/ngbCollapse/ngb-collapse.directive';
import { LayoutRoutingModule } from './components/layout-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {AuthService} from '../shared/services/auth/auth.service';
import { ApiMainComponent } from './api-main/api-main.component';
import { MAinapiComponent } from './component/mainapi/mainapi.component';
import { ChildComponent } from './component/child/child.component';
import { LogoutComponent } from './component/logout/logout.component';
import { MobilnumberDirective } from './mobilnumber.directive';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NgbCollapseDirective,
    ApiMainComponent,
    MAinapiComponent,
    ChildComponent,
    LogoutComponent,
    MobilnumberDirective,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
     HttpClientModule,

     TranslateModule.forRoot({
       defaultLanguage:'en',
       loader:{
         provide:TranslateLoader,
         useFactory:CreateTranslateLoader,
         deps:[HttpClient]
       }
     })

  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function CreateTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json')
}

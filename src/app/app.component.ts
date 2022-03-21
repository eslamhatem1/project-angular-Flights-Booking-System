import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'legal-House';
  currentLang: string;
  constructor(public translate: TranslateService) {
    this.currentLang = localStorage.getItem('currentLang') || 'en';
    this.translate.use(this.currentLang);

    localStorage.getItem('currentLang')== "en" ? document.dir = 'ltr' : document.dir = 'rtl'
  }


  onActivate(event: any) {
    // window.scroll(0,0);

let scrollToTop = window.setInterval(() => {
    let pos = window.pageYOffset;
    if (pos > 0) {
        window.scrollTo(0, pos - 20);
    } else {
        window.clearInterval(scrollToTop);
    }
}, 16);
}



}

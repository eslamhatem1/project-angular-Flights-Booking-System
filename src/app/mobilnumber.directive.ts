import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[Mobilnumber]'
})
export class MobilnumberDirective {

  constructor(private el:ElementRef) { }

  @HostListener('keyup') onkeyup(){

    let text:string= this.el.nativeElement.value as string
    alert(text)
    let lastelemnt=text.substring(text.length-1)
    if(isNaN(+lastelemnt))
    {
      // alert(lastelemnt)
      this.el.nativeElement.value=text.substring(0,text.length-1)
    }

  }
}

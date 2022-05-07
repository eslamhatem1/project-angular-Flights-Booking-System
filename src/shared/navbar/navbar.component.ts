import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from 'src/app/services/register.service';
import { register } from '../models/register';
import { AuthService } from '../services/auth/auth.service';
import { NavService } from '../services/service-nav/nav.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  // @HostListener('window:scroll', ['$event'])
  scrolled:boolean=false
  geartingName:[] =[];
  @HostListener("document:scroll", [])
  onWindowScroll() {
  (window.pageYOffset > 60) ? this.scrolled = true : this.scrolled = false

}

  lang = 'en';
  public isMenuCollapsed = true;
  // isScrolled = false;

  showModal:boolean=false;
  constructor(
    private router: Router,
    private toastr: ToastrService,
    public nav: NavService,
    private authService: AuthService,
    private sevises:RegisterService,
    private fb:FormBuilder,


  ) {

  }
   isloggged:boolean=false
  theemail:register[]=[]
  ngOnInit(): void {


    this.sevises.loginstatues.subscribe(

      staues=>{
        this.isloggged=staues
      }
    );
    // this.islogged=this.sevises.isloggedin()
    this.changeLang()
    // this.geartingName=

    //JSON.parse(localStorage.getItem('userdata')|| '{}').email


    this.sevises.get().subscribe(
      (Response:any)=>{
        this.theemail=Response
      },
      (error:any)=>{}
    )




  }

  showModalDiv(){

    this.showModal=true
    console.log(this.showModal)
  }

  changeLang() {
    this.lang == 'en'?document.dir ='ltr':document.dir ='ltr'

  }

  logout() {
    if  (localStorage.getItem("userdata")) {
      localStorage.clear()

    }
    this.toastr.success("you are login successfully")
    this.router.navigateByUrl('/home');
  }

isLogged(){

  return this.authService.isLoggedIn;
}




lodingorm=this.fb.group({

  email:['',[Validators.required,Validators.email]],
  password:['',[Validators.required]]

})




login(){
  this.sevises.get().subscribe(

      (Response:any)=>{

        const user=Response.find((a:any)=>{

          return a.email === this.lodingorm.value.email && a.password === this.lodingorm.value.password
        });
        if(user){

          this.toastr.success("you are login successfully")
          this.lodingorm.reset();
          this.router.navigate(['home'])
          this.RegesterForm.reset();
          this.sevises.login(user.email,user.password)

        }
        else{
          this.toastr.success("user not found")
        }
      },
      (error:any)=>{}

  )
}



senddata()
{


  this.sevises.post(this.RegesterForm.value).subscribe(

    (Response:any)=>{
      alert('done')



      this.router.navigate(['home'])
    }
   )


}


RegesterForm=this.fb.group({

  fname:['',[Validators.required]],
  lname:['',[Validators.required]],
  email:['',[Validators.required,Validators.email]],
  password: [  '', [
    Validators.required,
    Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}') ]  ]})





}

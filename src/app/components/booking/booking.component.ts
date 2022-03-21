import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HomeService } from '../../../shared/services/home/home.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  id: any;
  flight: any;
  bookingDetails: {} = {};
  bookingList = [];

  constructor(
    private _activedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private HomeService: HomeService
  ) {}

  public bookingForm = this.fb.group({
    fullName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [Validators.required]],
    street: ['', [Validators.required]],
    blockNum: ['', [Validators.required]],
    city: ['', [Validators.required]],
    zipCode: ['', [Validators.required]],
    country: ['', [Validators.required]],
  });

  ngOnInit(): void {
    this.id = this._activedRoute.snapshot.params['id'];
    this.getflight();
  }

  get f() {
    return this.bookingForm.controls;
  }

  getflight() {
    this.flight = this.HomeService.getFlight(this.id);
  }

  bookTicket(flight: any) {
    if (window.confirm('are you sure you want to book this ticket ?')) {
      this.bookinginfo();
      localStorage.setItem('flight', JSON.stringify(this.flight));

      let bookingList: any;
      if (!localStorage.getItem('bookingList')) {
        localStorage.setItem('bookingList', JSON.stringify(this.bookingList));
        bookingList = JSON.parse(localStorage.getItem('bookingList') || '{}'); // get product list
      } else {
        bookingList = JSON.parse(localStorage.getItem('bookingList') || '{}'); // get product list
        //  for (let i in bookingList) {
        //   this.toastr.error('you are trying to Add item already in card !')

        //      return localStorage.setItem('bookingList', JSON.stringify(bookingList));
        //  }
      }
      bookingList.push({
        id: flight.id,
        from: flight.from,
        to: flight.to,
        price: flight.price,
        Departing: flight.Departing,
        Arriving: flight.Arriving,
        timeDeparting: flight.timeDeparting,
        timeArriving: flight.timeArriving,
        flight_class: flight.flight_class,
        type: flight.type,
        bookingDetails: this.bookingDetails,
      });
      localStorage.setItem('bookingList', JSON.stringify(bookingList));
      this.toastr.success('item added  succesfully');
      this.bookingForm.reset();
      this.router.navigateByUrl('/ticket');
    }
  }

  bookinginfo() {
    const fullName = this.bookingForm.controls.fullName.value;
    const email = this.bookingForm.controls.email.value;
    const phone = this.bookingForm.controls.phone.value;
    const street = this.bookingForm.controls.street.value;
    const blockNum = this.bookingForm.controls.blockNum.value;
    const city = this.bookingForm.controls.city.value;
    const zipCode = this.bookingForm.controls.zipCode.value;
    const country = this.bookingForm.controls.country.value;

    this.bookingDetails = {
      fullName: fullName,
      email: email,
      phone: phone,
      street: street,
      blockNum: blockNum,
      city: city,
      zipCode: zipCode,
      country: country,
    };

    localStorage.setItem(
      'bookinginfoWithPerson',
      JSON.stringify(this.bookingDetails)
    );
  }
}

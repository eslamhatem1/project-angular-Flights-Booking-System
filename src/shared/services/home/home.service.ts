import { Injectable } from '@angular/core';
import { flight } from 'src/shared/models/flight';

@Injectable({ providedIn: 'root' })
export class HomeService {
  flights: flight[] = [
    {
      id: '1',
      Arriving: new Date( "2022-05-22 "),
      Departing: new Date( "2022-05-22 "),
      from: 'cairo',
      img: '../../../assets/images/dubai.jpg',
      price: 70000,
      to: 'Dubai',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'
    },
    {
      id: '2',
      Arriving: new Date( "2022-05-10 "),
      Departing: new Date( "2021-05-10 "),
      from: 'cairo',
      img: '../../../assets/images/dammam.jpg',
      price: 6000,
      to: 'Dammam',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'
    },
    {
      id: '3',
      Arriving: new Date("2022-04-24 "),
      Departing: new Date( "2022-04-24 "),
      from: 'cairo',
      img: '../../../assets/images/england.jpg',
      price: 9000,
      to: 'England',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'
    },
    {
      id: '4',
      Arriving: new Date("2022-04-20 "),
      Departing:new Date( "2022-04-20 "),
      from: 'cairo',
      img: '../../../assets/images/sharm.jpg',
      price: 5000,
      to: 'SharmElsheikh',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'

    },
    {
      id: '5',
      Arriving:new Date( "2022-05-15 "),
      Departing: new Date( "2022-05-15 "),
      from: 'cairo',
      img: '../../../assets/images/germany.jpg',
      price: 8000,
      to: 'Germany',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'
    },
    {
      id: '6',
      Arriving:new Date( "2022-04-1 "),
      Departing: new Date( "2022-04-1 "),
      from: 'Cairo',
      img: '../../../assets/images/08.jpg',
      price: 15000,
      to: 'saudi arabia',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'
    },
    {
      id: '7',
      Arriving:new Date( "2022-04-12 "),
      Departing: new Date( "2022-04-12 "),
      from: 'Cairo',
      img: '../../../assets/images/07.jpg',
      price: 20000,
      to: 'Maldive',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'
    },
    {
      id: '8',
      Arriving:new Date( "2022-04-16 "),
      Departing: new Date( "2022-04-16 "),
      from: 'Cairo',
      img: '../../../assets/images/05.jpg',
      price: 3000,
      to: 'luxor',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'
    },
    {
      id: '9',
      Arriving:new Date( "2022-03-30 "),
      Departing: new Date( "2022-03-30 "),
      from: 'Cairo',
      img: '../../../assets/images/01.jpg',
      price: 8000,
      to: ' south africa',
      timeArriving:'15:00 pm',
      timeDeparting:'14:00 pm ',
      type: 'twoWay',
      flight_class:'Economy'
    },
  ];
  constructor() {}

  get getFlights() {
    return [...this.flights];
  }

  getFlight(flightId: string) {
    return {
      ...this.flights.find((flight) => {
        return flight.id === flightId;
      }),
    };
  }
}

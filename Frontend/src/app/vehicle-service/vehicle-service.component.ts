import { Component, OnInit, Input } from '@angular/core';
import { UserVehicleService } from '../service/user-vehicle.service';
import { IVehicleServiceLog, VehicleServiceLog } from '../model/vehicleServiceLog';
import { VehicleServiceLogService } from '../service/vehicle-service-log.service';
import { TimerService } from '../service/timer.service.spec';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-vehicle-service',
  templateUrl: './vehicle-service.component.html',
  styleUrls: ['./vehicle-service.component.css']
})
export class VehicleServiceComponent implements OnInit {
  counter: number = 0;
  @Input() vehicleServiceLog: VehicleServiceLog[] = [];
  displayedColumns: string[] = ['serviceId', 'serviceDetails', 'timer', 'lastDate', 'dueDate'];
  dataSource = [];

  constructor(public vehicleServiceLogService: VehicleServiceLogService, public timerService: TimerService) { }

  ngOnInit(): void {
  }

  startTimer(){
    this.counter = 0;
    this.timerService.getObservable().subscribe(val => this.counter = val)
  }
  stopTimer(){
    this.timerService.stop();
  }

}

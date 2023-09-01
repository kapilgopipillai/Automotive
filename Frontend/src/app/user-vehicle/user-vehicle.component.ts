import { Component, OnInit, Input } from '@angular/core';
import { UserVehicle } from '../model/userVehicle';

@Component({
  selector: 'app-user-vehicle',
  templateUrl: './user-vehicle.component.html',
  styleUrls: ['./user-vehicle.component.css']
})
export class UserVehicleComponent implements OnInit {
  @Input() userVehicleDetails: UserVehicle = { 
    vehicleId: 0,
    userId: 0,
    name: '',
    description:  '',
    rcnumber:  '',
    model:  '',
    video:  ''
  };

  constructor() { }

  ngOnInit(): void {
  }

}

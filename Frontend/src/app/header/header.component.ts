import { Component, OnInit, Input, Inject, Output, EventEmitter } from '@angular/core';
import { UserVehicleService } from '../service/user-vehicle.service';
import { UserVehicle } from '../model/userVehicle';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import { UserAccount } from '../model/userAccount';
import { UserAccountService } from '../service/user-account.service';
import { NgIf } from '@angular/common';
import { VehicleServiceLogService } from '../service/vehicle-service-log.service';
import { VehicleServiceLog } from '../model/vehicleServiceLog';
import { Subject } from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() deviceXs: boolean = false;
  @Input() userId: any;

  vehicleServiceLog: VehicleServiceLog[] = [];
  userVehicle: UserVehicle[] = [];

  userAccount: UserAccount = {
    userId: 0,
    userName: '',
    password: '',
    userProfile: ''
  };

  userVehicleDetails: UserVehicle = { 
    vehicleId: 0,
    userId: 0,
    name: '',
    description:  '',
    rcnumber:  '',
    model:  '',
    video:  ''
  };

  constructor(public userVehicleService: UserVehicleService, public vehicleServiceLogService: VehicleServiceLogService,
    public userAccountService: UserAccountService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userAccountService.getUserDetails(this.userId).subscribe(data => {
      this.userAccount = data;
      console.log("userAccountService");
      console.log(this.userAccount);
    });
    this.userVehicleService.getUserVehicleByUserId(this.userId).subscribe(data => {
      this.userVehicle = data;
      console.log("userVehicleService");
      console.log(this.userVehicle);
      
      this.userVehicleDetails = this.userVehicle[0];
      this.vehicleServiceLogService.GetVehicleServiceLogByVehicleId(this.userVehicle[0].vehicleId).subscribe(data => {
        this.vehicleServiceLog = data;
      });
    });
  }

  userVehicleChange(data: UserVehicle): void{
    this.userVehicleDetails = data;
    this.vehicleServiceLogService.GetVehicleServiceLogByVehicleId(this.userVehicleDetails.vehicleId).subscribe(data => {
      this.vehicleServiceLog = data;
    });
  }

  openDialog() {
    console.log("openDialog");
    console.log(this.userAccount);
    const dialogRef = this.dialog.open(UserProfileDialog, {
      data: this.userAccount
    });
    dialogRef.updatePosition({
      right: '20px',  // Set right position
      top: '60px'    // Set top position
    });
  }

}

@Component({
  selector: 'userProfileDialog',
  templateUrl: 'userProfileDialog.html'
})
export class UserProfileDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: UserAccount, public userAccountService: UserAccountService) {}
  
  subject$ = new Subject();

  logOut(){
    console.log("UserProfileDialog");
    console.log("logout");
    this.userAccountService.setLogoutValue(true);
  }
}

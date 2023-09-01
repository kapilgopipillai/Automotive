import { Component } from '@angular/core';
import { UserAccount } from './model/userAccount';
import { UserAccountService } from './service/user-account.service';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend';
  mediaSub: Subscription | undefined;
  deviceXs: boolean = false;

  isLogin: boolean = true;
  userId: any;


  constructor(public userAccountService: UserAccountService, public mediaObserver: MediaObserver){

  }

  ngOnInit(){
    this.mediaSub =this.mediaObserver.media$.subscribe((result: MediaChange) => {
      console.log(result.mqAlias);
      this.deviceXs = result.mqAlias === 'xs' ? true : false;
    });

    this.userAccountService.getLogoutValue().subscribe(data => {
      this.userId = undefined;
      this.isLogin = !this.isLogin;
      console.log("this.isLogin");
      console.log(this.isLogin);
    });
  }

  login(event: any){
    console.log("open");
    console.log(event);
    this.userAccountService.login(event.username, event.password).subscribe(data => {
      console.log("login");
      console.log(data);
      this.userId = data;
      this.isLogin = !this.isLogin;
    });
  }

  logout(){
    console.log("logout");
    this.userId = undefined;
    this.isLogin = !this.isLogin;
  }

  ngOnDestroy(){
    // this.mediaSub.unsubscribe();
  }
}

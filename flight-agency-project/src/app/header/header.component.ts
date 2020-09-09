import { JwtResponse } from './../shared/models/dto/jwt-response';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { SocialAuthService } from 'node_modules/angularx-social-login';
import { LoginComponent } from './../home/login/login.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from 'node_modules/@angular/material';
import { SocialUser } from 'angularx-social-login';

declare let $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  userLogged: JwtResponse;
  isLogged: boolean;
  constructor(public dialog: MatDialog, private authService: SocialAuthService, private tokenStorage: TokenStorageService) { }

  ngOnInit() {
    if (this.tokenStorage.getJwtResponse() != null) {
      this.userLogged = this.tokenStorage.getJwtResponse();
      this.isLogged = (this.tokenStorage.getJwtResponse().accountName != null)
    } else {
      this.isLogged = false;
    }

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '440px',
      height: '600px',
      data: {},

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.isLogged = result;
      console.log('The dialog was closed');
      this.ngOnInit();
    });
  }

  logOut(): void {

    this.authService.authState.subscribe((user) => {
      if (user = null) {
        this.authService.signOut()
      }
    });
    this.tokenStorage.logOut();
    this.isLogged = false;
  }
}

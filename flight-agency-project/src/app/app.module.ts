import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { httpInterceptorProviders } from './authentication/auth-interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { SendFeedbackComponent } from './home/send-feedback/send-feedback.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PDFExportModule } from './../../node_modules/@progress/kendo-angular-pdf-export';
import {FlightModule} from './flight/flight.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    FooterComponent,
    HeaderComponent,
    SendFeedbackComponent,
    PageNotFoundComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        SocialLoginModule,
        BrowserAnimationsModule,
        MaterialModule,
        NgbModule,
        NgxPaginationModule,
        PDFExportModule,
        FormsModule,
        FlightModule,
    ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '47941306302-24ankpk8rfrq3cgmm8tlifooaj4pdsa6.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('934027683741142'),
          },
        ],
      } as SocialAuthServiceConfig,
    }, httpInterceptorProviders], entryComponents: [
      LoginComponent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

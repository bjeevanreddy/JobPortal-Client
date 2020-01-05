import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CardDirective } from './card.directive';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './Auth/login/login.component';
import {ForseekerService} from './forseeker.service';
import {ForrecruiterService} from './forrecruiter.service';
import { TokenInterceptorService } from './token-interceptor.service';
//import { EditprofileComponent } from './seeker/editprofile/editprofile.component';
//import { PostjobComponent } from './recruiter/rdashboard/postjob/postjob.component';
//import { RdashboardComponent } from './recruiter/rdashboard/rdashboard.component';
//import { RprofileComponent } from './recruiter/rprofile/rprofile.component';
//import { PostedjobsComponent } from './recruiter/rdashboard/postedjobs/postedjobs.component';
//import { AppliedEmployeesComponent } from './recruiter/rdashboard/applied-employees/applied-employees.component';
//import { EmpProfileComponent } from './seeker/emp-profile/emp-profile.component';
//import { RegisComponent } from './Auth/regis/regis.component';
//import { DashboardComponent } from './dashboard/dashboard.component';
//import { LoginComponent } from './login/login.component';
// import { JobsComponent } from './dashboard/jobs/jobs.component';
// import { AppliedjobsComponent } from './dashboard/appliedjobs/appliedjobs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardDirective,
    routingComponents,
    LoginComponent,
    //EditprofileComponent,
    //PostjobComponent,
    // RdashboardComponent,
    // RprofileComponent,
    // PostedjobsComponent,
    // AppliedEmployeesComponent,
    //EmpProfileComponent,
    //RegisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ForseekerService,ForrecruiterService,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

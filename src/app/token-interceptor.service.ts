import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {ForseekerService} from './forseeker.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector:Injector) { }

  intercept(req,next){
    let seekerservice=this.injector.get(ForseekerService);
    let tokenized=req.clone({
      setHeaders:{
        Authorization: `Bearer ${seekerservice.gettoken()}`
      }
    })
    return next.handle(tokenized);
  }
}

import {Injectable} from '@angular/core';
import { Resolve } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolver implements Resolve<any>{

  constructor(private userService:UserService){

  }
  resolve(){
    return this.userService.getAll();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { User } from './shared/model/user.model';
import { DataModel } from '../shared/data.model';
import { UserService } from './shared/service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[];

  user: User = new User();

  usersModel: DataModel[];

  userForm: FormGroup;


  constructor(public userService: UserService, private route: ActivatedRoute, private fb: FormBuilder) { }

  ngOnInit() {
    this.users = this.route.snapshot.data.users;

    this.userForm = this.fb.group({
      username: ['', Validators.required]
    });

    this.usersModel = [
      new DataModel('id','ID','number',true,[]),
      new DataModel('username','Nom d\'utilisateur','string',false,[]),
      new DataModel('enable','Actif','number',true,[])
    ]
  }

}

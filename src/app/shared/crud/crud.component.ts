import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators} from '@angular/forms';

import { CrudService } from '../crud.service';
import { DataModel } from '../data.model';
@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  data: any;

  @Input()
  service: CrudService;

  @Input()
  initItem: any;

  @Input()
  initForm: FormGroup;

  @Input()
  dataModelList: DataModel[];

  crudType = 'sample';

  constructor(){
  }

  ngOnInit(){
  }

  dataChanged($event){
    this.data = this.data.concat($event);
  }

}

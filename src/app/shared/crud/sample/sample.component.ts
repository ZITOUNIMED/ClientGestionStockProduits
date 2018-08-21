import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';

import { CrudService } from '../../crud.service';
import { DataModel } from '../../data.model';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

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

  crudForm: FormGroup;

  operation: string = 'add';

  selectedItem: any;

  constructor(private fb: FormBuilder){
    this.createForm();
  }

  ngOnInit(){
    this.init();
  }

  createForm(){
    this.initForm ? this.crudForm = this.initForm : this.crudForm = this.fb.group({});
  }

  loadData(){
    this.service.getAll().subscribe(
      data => {this.data = data},
      error => { console.log('An error was occured.')},
      () => { console.log('loading data was done.')}
    );
  }

  add(){
    const p = this.crudForm.value;
    this.service.add(p).subscribe(
      res => {
        this.init();
        this.loadData();
      }
    );
  }

  update(){
    this.service.update(this.selectedItem)
    .subscribe(
      res => {
        this.init();
        this.loadData();
      }
    );
  }

  init(){
    this.selectedItem = this.initItem;
    this.createForm();
  }

  delete(){
    this.service.delete(this.selectedItem.id).
    subscribe(
      res =>{
        this.selectedItem = this.initItem;
        this.loadData();
      }
    );
  }
}

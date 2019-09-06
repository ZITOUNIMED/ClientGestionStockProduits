import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {ProductService} from './shared/service/product.service';
import {Product} from './shared/model/product.model';
import { DataModel } from '../shared/data.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[];

  productForm: FormGroup;

  product = new Product();

  productsModel: DataModel[];

  constructor(public productService: ProductService, private fb: FormBuilder, private route: ActivatedRoute){

  }

  ngOnInit(){
    this.products = this.route.snapshot.data.products;
    this.productForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    });

    this.productsModel = [
      new DataModel('id','ID','number',true,[]),
      new DataModel('ref','Référence','string',false,[]),
      new DataModel('quantite','Quantité','number',false,[]),
      new DataModel('prixUnitaire','Prix Unitaire','number',false,[])
    ]
  }
}

import {Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import {ProduitService} from './produit.service';
import {Produit} from '../shared/produit.model';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit{

  public produits: Produit[];

  produitForm: FormGroup;

  operation: string = 'add';

  selectedProduit: Produit;

  constructor(private produitService: ProduitService, private fb: FormBuilder, private route: ActivatedRoute){
    this.createForm();
  }

  ngOnInit(){
    this.initProduit();
    this.produits = this.route.snapshot.data.produits;
  }

  createForm(){
    this.produitForm = this.fb.group({
      ref: ['', Validators.required],
      quantite: '',
      prixUnitaire: ''
    });
  }
  loadProduits(){
    this.produitService.getAll().subscribe(
      data => {this.produits = data},
      error => { console.log('An error was occured.')},
      () => { console.log('loading produits was done.')}
    );
  }

  addProduit(){
    const p = this.produitForm.value;
    this.produitService.add(p).subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  updateProduit(){
    this.produitService.update(this.selectedProduit)
    .subscribe(
      res => {
        this.initProduit();
        this.loadProduits();
      }
    );
  }

  initProduit(){
    this.selectedProduit = new Produit();
    this.createForm();
  }

  deleteProduit(){
    this.produitService.delete(this.selectedProduit.id).
    subscribe(
      res =>{
        this.selectedProduit = new Produit();
        this.loadProduits();
      }
    );
  }




}

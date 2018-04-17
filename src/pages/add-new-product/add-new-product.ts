import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'
import {Product } from '../../Model/Product'
/**
 * Generated class for the AddNewProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-new-product',
  templateUrl: 'add-new-product.html',
})
export class AddNewProductPage {
  product = new Product();
  private isEditMode:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private restProvider:RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddNewProductPage');
    if(this.navParams.get('product')){
        this.isEditMode = true;
         this.product = this.navParams.get('product');
      }
  }

  submitNewProduct(){
    console.log(this.product.name);
    if(this.isEditMode){
      this.restProvider.editProduct(this.product).subscribe(
        (product) => { 
             console.log("POST call sucessful");
             this.navCtrl.pop();
         }, response => {
               console.log("API Failure: "+response.message);
         },
         () => {
             console.log("The POST observable is now completed");
           });
     // 
          }
    else {
    this.restProvider.createProduct(this.product).subscribe(
      (product) => { 
           console.log("POST call sucessful");
           this.navCtrl.pop();
       }, response => {
             console.log("API Failure: "+response.message);
       },
       () => {
           console.log("The POST observable is now completed");
         });
   // 
        }
  }
}

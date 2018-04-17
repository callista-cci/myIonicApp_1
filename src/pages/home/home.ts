import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task';
import { TaskManagerProvider } from '../../providers/task-manager/task-manager'
import { Task } from '../../Model/Task';
import { RestProvider } from '../../providers/rest/rest'
import { Product } from '../../Model/Product'
import { Observable } from 'rxjs/Observable';
import { AddNewProductPage } from '../add-new-product/add-new-product'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  taskList = new Array<Task>();
  productList = new Array<Product>();


  constructor(public navCtrl: NavController, private taskManager: TaskManagerProvider, private restProvider:RestProvider ) {

  }
  getAllProducts(){

   this.restProvider.getProducts().subscribe(products => this.productList = products);
    console.log(this.productList.length+' Length if response array');

 
    console.log('checkAPIResult finished');
  }

  deleteProduct(product){
    this.restProvider.deleteProduct(product).subscribe(
      (product) => { 
           console.log("POST call sucessful");
           this.getAllProducts();
           
       }, response => {
           console.log("API Failure: "+response.message);
       },
       () => {
           console.log("The POST observable is now completed");
         });

  }
  public editProduct(product: Product){
    this.navCtrl.push(AddNewProductPage,{"product":product});
  }
  
  addNewTaskClick(){
    this.navCtrl.push(AddNewTaskPage,'');

  }
  addNewProduct(){
    this.navCtrl.push(AddNewProductPage,'');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home Page');

  }

  ionViewWillEnter(){

    console.log('ionViewWillEnter Home Page');
    this.taskList = this.taskManager.getTaskList();
    this.getAllProducts();
  }
}
